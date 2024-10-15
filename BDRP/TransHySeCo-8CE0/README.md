# TransHySeCo
### A Hybrid Self-Correcting Approach for Embedding Knowledge Graphs.

This repository pertains to the study conducted at the LISN laboratory of Université Paris Saclay, the objective of which is to devise a new method for embedding knowledge graphs (KGs). The method conceived is termed "TransHySeCo": a Hybrid and Self-correcting new approach for embedding knowledge graphs. TransHySeCo is based on a hybrid training to learn the KG embeddings using both the domain semantics and the topology underlying the graph structure. Moreover, it is self-correcting, generating new negative triples leveraging the embeddings from previous training iterations and (quasi-)true negatives obtained with the
ontology-based negative generation method proposed in this paper. These new true negative triples are paired with the corresponding positive ones in a subsequent training step. The self-correction terminates when there is no new (quasi-)true negative triple generable. We define, implement and evaluate the whole framework, including the three main phases: pre-processing, training and negative triples update where the latter is a prerequisite for
the self-correct training. To assess TransHySeCo, we conducted numerous experiments on benchmark datasets and evaluated the quality of the embeddings for link prediction purposes compared to TransE, TransOWL, TransR and TransROWL. The results position TransHySeCo as a promising solution for knowledge graph embedding.


### TransHySeCo - overview 

The TransHySeCo's pipeline is depicted:

![TransHySeCo's framework](https://anonymous.4open.science/r/TransHySeCo-8CE0/images/framework.jpg)

Given a KG and its corresponding ontology, the pipeline devised by TransHySeCo can be segmented into three phases:
- **Pre-processing phase** aims to reduce the knowledge base inconsistency. More specifically, we define a linear algorithm to remove inconsistent triples wrt. to the ontology and the knowlege graph.
We also enrich the training subgraph using ontological entailment. This augmentation allows to generate new positive triples exploiting domain knowledge.
- **Training phase** aims to learn the KG embedding with positive training triples and negative training triples, minimizing a loss function L. The generation of negative triples is initially performed in a hybrid mode: starting from the positive ones, exploiting both the KG structure and the domain ontology. For the self-correct training, the positives samples are paired with the negative samples discovered in the Negative Triples Update phase.
- **Negative Triples Update phase** prepares new negative triples to be used during the self-correct training by exploiting the embeddings created in the previous training and a triple classification task defined in TransHySeCo.

## TransHySeCo - Repository structure

- DATASETS FOLDERS (DBPEDIA15K, YAGO, NELL). Content:
  - `Train2id`,`Test2id`, `Valid2id` are the knowledge graphs divided in triples as they were divided by the TransOWL authors ([repository link](https://github.com/Keehl-Mihael/TransROWL-HRS))
  - `***_axioms.txt` files: axioms extracted from the ontologies related to the respective knowledge graph. These files are created as explained in the section [PREPROCESSING - Instructions](### PREPROCESSING - Instructions)
: they have been provided already created for your convenience.
  - `CCs.txt` is the file containing the clustering coefficient associated to each entity of the knwoledge graph. Also this file can be created as explained in section [TRAINING - Instructions](## TRAINING - Instructions): it has been provided already created for your convenience.
  - `DBPEDIA_ontology2`, `NELLontology` are the ontologies for the DBPEDIA15K and NELL datasets ([source: TRANSOWL repository](https://github.com/Keehl-Mihael/TransROWL-HRS)). The ontology used for YAGO, instead, was not possible to upload because of Github file size constraints. It was found that the ontology used by [TRANSOWL authors](https://github.com/Keehl-Mihael/TransROWL-HRS) was missing important axioms but the full YAGO ontology weighted over 250Gb of memory. Therefore, instead of sourcing the ontology from a single file on YAGO's official website,  all the parts of the ontology useful for the framework were downloaded from the [official YAGO website](https://www.mpi-inf.mpg.de/departments/databases-and-information-systems/research/yago-naga/yago/downloads). This step was necessary by the expansive size of the complete YAGO ontology, which includes components like annotations and other details that, although relevant in other scenarios, were not pertinent within the scope of the framework. Therefore, a streamlined version of the ontology was utilized, aligning with the \TransHI application requirements. As mentioned earlier, this streamlined version was too big for Github constraints anyway so we uploaded the already-extracted axioms, separated in different files (the files as `***_axiom.txt`).
  - `entity2id`, `relation2id` are the files where the strings representing the entities in the KGs are mapped to numerical IDs, easier to work with inside the training algorithms.
  - `train2id_consistent`, `test2id_consistent`, `valid2id_consistent` - are the files corresponding to the `Train2id`,`Test2id`, `Valid2id` but after the `Inconsistent triples removal` step (with the inconsistent triples removed). These files are generated as described in the section [PREPROCESSING - Instructions](### PREPROCESSING - Instructions). They have been provided already created for your convenience.
  - `train2id_consistentWithAugmentation` - file corresponding to the triples in `train2id_consistent` augmented with the preprocessing phase `Positive Triples Augmentation`. This file is generated as described in the section [PREPROCESSING - Instructions](### PREPROCESSING - Instructions). It has been provided already created for your convenience.
- LINK PREDICTION folder. Content : algorithms for performing link prediction starting from already generated embeddings by [Giovanni Sansaro](https://github.com/aditya1601/kmeans-clustering-cpp), also used by [TRANSOWL authors](https://github.com/Keehl-Mihael/TransROWL-HRS).
- MODELS folder. It contains the heart of the TransHySeCo approach. It's divided in 3 folders, corresponding to the main phases of the TransHySeCo framework:
  - Preprocessing folder: the main algorithms are contained in the files `InconsistencyCorrection.java` and `PositiveTripleAugmentation.java`. All the other files are support files that are used as explained in the section [PREPROCESSING - Instructions](### PREPROCESSING - Instructions)
  - Training folder. It contains: the algorithm to extract the clustering coefficients of the entities from KGs, `CC_generator.java`; the algorithm to extract the neighbors of each entity of a KG, `NeighborsGenerator.java`; the `TransHySeCo` and `TransRHySeCo` training algorithm (TransRHySeCo is a variant of `TransHySeCo` explained better in the next paragraph).
  - Negative triples update folder. It contains the algorithm to generate batches of inconsistent triples to classify at each iteration of the algorithm. It contains also the triple classification algorithm by [Giovanni Sansaro](https://github.com/aditya1601/kmeans-clustering-cpp), also used by [TRANSOWL authors](https://github.com/Keehl-Mihael/TransROWL-HRS).

## TransHySeCo - Link prediction performances

In the table below, the performance of TransHySeCo is compared to that of TransE, TransOWL, TransR and TransROWL. Their quality was assessed in the link prediction task.

![TransHySeCo's results](https://anonymous.4open.science/r/TransHySeCo-8CE0/images/summary_table.png)

It can be observed that the best iteration of TransHySeCo outperforms the other algorithms for the considered datasets: DBPEDIA15K, YAGO, and NELL. Alongside the final result of TransHySeCo (that of the best performance), one can also view, for comparison, the outcomes of TransE, TransOWL, TransR and TransROWL using preprocessed data (with preprocessing provided by TransHySeCo). Additionally, the results from the individual use of negative triples generated based on structure and those based on ontology are displayed, as well as the outcomes of TransHySeCo after just a single iteration and the ones obtained without the order based on CC.

Also the performances of TransRHySeCo is presented. TransRHySeCo is the algorithm obtained by applying TransR by but initializing the embeddings with TransHySeCo, as opposed to the conventional initialization method that uses TransE. The comparison between TransHySeCo and TransRHySeCo helps in demonstrating the embeddings ability of modeling complex relations. 

The 'images' folder containes further tables detailing the results of all the tests performed.

## TransHySeCo - Parameters

Standard parameters commonly employed in the literature were used to enable a fair comparison of the approaches under identical conditions. The chosen parameters include:
- Learning rate: 0.001
- Epochs: 1000 
- Embedding dimension: 100
- Margin γ = 1
Two extra parameters, associated with the training employed by TransHySeCo, pertain to the process of identifying entity neighbors:
- A choice of k = 3 hops was made:
- Varying numbers of random walks were used for the three KGs: DBPEDIA15k with 10,000 random walks, YAGO with 3,000 random walks, and NELL with 5,000 random walks
Both these choices, as disccussed in the research paper, were informed by the quantity of neighbors required for training.

## TransHySeCo - Instructions

Instructions for executing the TransHySeCo pipeline are provided. Specifically, the relevant codes are located in the MODELS folder and are divided into the three main phases of the pipeline: Pre-processing, Training, and Negative Triples Update.

Within the folders dedicated to the 3 KGs (DBPEDIA15K, YAGO, NELL), one can find specific files tailored for each KG. Before initiating the pipeline, one must choose a particular KG; all subsequent steps will utilize files contained within the chosen KG's folder.

In the training algorithm, triples are not employed as strings but rather as sequences of three numbers, created by assigning an identifying number to each entity and relation. Therefore, there are steps included to remove/strip the relevant IDs from the files or to convert from TTL notation (using strings) to the representation of triples with the IDs.

### PREPROCESSING - Instructions

The initial two steps of this phase utilize an ontological reasoner, Hermit (http://www.hermit-reasoner.com/java.html), to work with ontologies. The two JAR files related to this reasoner, as used in TransHySeCo, can be found in the 'MODELS/PREPROCESSING/' directory. To execute the commands provided below accurately, one should place the JAR files in the same directory where the programs to be run are located.

1. Inconsistencies correction


- Remove IDs from files "train2id", "test2id" e "valid2id". These files are from the authors of TransOWL (https://github.com/Keehl-Mihael/TransROWL-HRS) and are used to keep the same division train/test/valid as them. This step removes the numerical IDs from those files producing three files: "train.txt","test.txt","valid.txt".
   ```basg
   javac Triple.java
   
   javac Triple_Integer.java
   
   javac IDtoTTLconverter.java
   
   java IDtoTTLconverter "/path_to_train2id/" "train2id.txt"
   
    java IDtoTTLconverter "/path_to_test2id/" "test2id.txt"
   
    java IDtoTTLconverter "/path_to_valid2id/" "valid2id.txt"
   ```
- Remove Inconsitencies - The file "complete_graph" has to be in the same folder as the files "train.txt", "test.txt", "valid.txt". This step clean the complete graph from the inconsistencies and then split the triples based on the division done by the authors of TransOWL (https://github.com/Keehl-Mihael/TransROWL-HRS). The files with the consistent triples produced are: "consistent_triples_train.txt", "consistent_triples_test.txt", "consistent_triples_valid.txt".
```bash
   javac -cp ./:./org.semanticweb.HermiT.jar:./HermiT.jar InconsistencyCorrection.java
   java -cp ./:./org.semanticweb.HermiT.jar:./HermiT.jar InconsistencyCorrection "/path_to_ontology_file_complete_graph/" "/path_to_ontology/ontology_file.ttl"
```
- Reput IDs instead of the string triples in "consistent_triples_train.txt", "consistent_triples_test.txt", "consistent_triples_valid.txt" (contained in the folder with the path "path_to_files"). The files produced are : "train2id_Consistent.txt", "test2id_Consistent.txt", "valid2id_Consistent.txt".
```bash
   javac TTLtoIDconverter.java
   
   java TTLtoIDconverter "/path_to_files/" "consistent_triples_train.txt"
   
    java TTLtoIDconverter "/path_to_files/" "consistent_triples_test.txt"
   
    java TTLtoIDconverter "/path_to_files/" "consistent_triples_valid.txt"
 ```

  
2. Ontology Axioms Entailment - In this step, the files "relation2id" and "entity2id" containing all the entities and relationships of the KG have to be in the same folder . This step does the entailment of ontological axioms and store the axioms explicitely contained in the KG and the ones entailed in files: "SuperClasses_axioms.txt", "SubClasses_axioms.txt", "SuperProperties_axioms.txt", ... .
   ```bash
   javac -cp ./:./org.semanticweb.HermiT.jar:./HermiT.jar Axiom_entailment.java
   java -cp ./:./org.semanticweb.HermiT.jar:./HermiT.jar Axiom_entailment "/path_to_files_entity2id_and_relation2id/" "/path_to_ontology/ontology_file.ttl"
   ```
3. Positive Triples Augmentation -  "path_to_axioms" è il percorso per i files creati nello step precedente: "SuperClasses_axioms.txt", "SubClasses_axioms.txt", "SuperProperties_axioms.txt", ... . The file containing the train triples augmented with the newly created ones is "train2id_Consistent_withAugmentation.txt". 
```bash
javac PositiveTripleAugmentation.java
 java PositiveTripleAugmentation "/path_to_axioms/" "/path_to_train2id_consistent/" "/path_to_relation2id/"
 ```

## TRAINING - Instructions

4. Training algorithm -first iteration
   
- CC generation - The CC for each entity of the is saved in the file "CCs.tx".
 ```bash
javac CC_Generator.java
 java CC_Generator "/path_to_train2id_Consistent_withAugmentation/"
 ```
- Neighbors generation - The first parameter is the number K of hops to find the k-hops neighbors. The second parameter is the number of random walks performed to find the k-hop neighbors. The third is the path to the file "train2id_Consistent_withAugmentation". The k-hop neighbors for each entity are saved in the file "file_Neighbors.tx".
 ```bash
javac NeighborsGenerator.java
 java NeighborsGenerator "/path_to_train2id_Consistent_withAugmentation/"
 ```
- Training algorithm -  The first parameter indicates the current iteration number. The second parameter, "percentage_negatives_generated," represents the percentage of negatives generated either by leveraging ontological knowledge or the structure. The "use_ontology" parameter should be set to true if one wishes to use ontology-based negative triples. The same applies to the "use_structure" parameter. All input files must reside in the same directory ("path_to_files"), "path_to_files", and these files include: relation2id.txt, entity2id.txt, train2id_Consistent_withAugmentation.txt, DisjointWith_axioms.txt, Domain_axioms.txt, Range_axioms.txt, SuperClasses_axioms.txt, IrreflexiveProperties_axioms.txt, AsymmetricProperties_axioms.txt, file_Neighbors.txt, and CCs.txt. The training output yields the embeddings of entities and relationships, saved in the files: relation2vec.vec and entity2vec.vec. To differentiate the embeddings generated under various settings, one can append a string to "entity2vec" and "relation2vec" using the 'note' parameter.
  ```bash
  g++ -std=c++11 TransHySeCo.cpp -o TransHySeCo.exe -pthread
  ./TransHySeCo.exe -number_iteration 1 -percentage_negatives_generated 10 -use_ontology false -use_structure true -input ~/path_to_files/ -output ~/c/ -note "_10_onlyS"
   ```
  <small>*N.B. In this example 10% of the negatives triples are create using only the structure.*</small>

  

### TRAINING DATA UPDATE - Instructions

5. Inconsistent Triples Generation - this step creates files of inconsistent triples "InconsistentTriples_1", "InconsistentTriples_2", ... . It creates as many files with inconsistent triples as possible. Each one of these files is supposed to be used in one of the subsequent iterations, therefore this code can be ran just 1 time and it will automatically produce files for all the possible iterations. The folder indicated in the parameter "input" is supposed to contain the files: relation2id.txt, entity2id.txt, train2id_Consistent_withAugmentation.txt, DisjointWith_axioms.txt, Domain_axioms.txt, Range_axioms.txt, SuperClasses_axioms.txt, IrreflexiveProperties_axioms.txt, AsymmetricProperties_axioms.txt.
  ```bash
g++ -std=c++11 InconsistentTriplesGenerator.cpp -o InconsistentTriplesGenerator.exe 
./InconsistentTriplesGenerator.exe -input ~/path_to_files/ -output ~/path_to_files/
   ```

6. Triples Classification - The first parameter is the parameter "note" used during the training algorithm so it's the string that is optionally attached to the files relation2vec and entity2vec and identifies which are the embeddings that we want to use for the classification. The "path_to_files" folder instead has to contain the files with the embeddings (entity2vec.vec,relation2vec.vec), train2id_Consistent_withAugmentation.txt, test2id_Consistent.txt and the file with the inconsistent triples followed by the number of the current iteration, f.i. for the first iteration "InconsistentTriples_1". The third parameter is the number of the current iteration. The misclassified triples are saved in a file: "inconsistent_wrongly_classified.txt".
 ```bash
python3 triple_classification.py "_10_onlyS" "/path_to_files/" "1"
 ```
 <small>*N.B. In this example the embeddings used for classification are created with 10% of the negatives using only the structure and the iteration is the first one.*</small>
 
### TRAINING NEXT ITERATIONS - Instructions

7. Training algorithm -next iterations - The first parameter indicates the current iteration number. The second parameter, "percentage_negatives_generated" should be set at 100 because in the iterations following the first one all the misclassified triples are to be used. All input files must reside in the same directory ("path_to_files"), "path_to_files", and these files include: relation2id.txt, entity2id.txt, train2id_Consistent_withAugmentation.txt, inconsistent_wrongly_classified.txt and the files of the embeddings created in the previous training. The parameter "note" used in the previous training has to be used as parameter "old_note". Instead, the parameter "note" should have another label to identify the new embeddings created.
  ```bash
  ./TransHySeCo.exe -number_iteration 2 -percentage_negatives_generated 100 -input ~/path_to_files/ -output ~/path_to_files/ -old_note "_10_onlyS" -note "_10_onlyS_2iter"
   ```

After the training of the iterations following the first one, another classification can follow and then another training step, in an iterative way. The pipeline stops when the file "inconsistent_wrongly_classified.txt" is empty or there are no more files "InconsistentTriples_***.txt" to use (each of them has to be used just once).

### LINK PREDICTION - Instructions

The embeddings created in each iteration are evaluated by their performance on a link prediction task. The prediction performance can be separated between the performance in predicting "typeOf" links (the prediction of triples that have 'type' as relation) and the performance on "noTypeOf" links (the prediction of triples that do not have 'type' as relation). In the folder "path_to_embedding" there have to be the embeddings to be evaluated: the files entity2vec and relation2vec  followed by the string indicated in "note" that identify the settings of creation of the embeddings. 

For general performance: 
  ```bash
g++ -std=c++11 LinkPrediction.cpp -o LinkPrediction.exe -pthread -O3 -march=native
./LinkPrediction.exe -init ~/path_to_embeddings/ -input ~/path_to_files/ -output ~/path_to_files/ -note "_10_onlyS"
   ```

For performance on triples 'typeOf': 
  ```bash
g++ -std=c++11 LinkPrediction_TypeOf.cpp -o LinkPrediction_TypeOf.exe -pthread -O3 -march=native
./LinkPrediction_TypeOf.exe -init ~/path_to_embeddings/ -input ~/path_to_files/ -output ~/path_to_files/ -note "_10_onlyS"
   ```

For performance on triples 'noTypeOf': 
  ```bash
g++ -std=c++11 LinkPrediction_noTypeOf.cpp -o LinkPrediction_noTypeOf.exe -pthread -O3 -march=native
./LinkPrediction_noTypeOf.exe -init ~/path_to_embeddings/ -input ~/path_to_files/ -output ~/path_to_files/ -note "_10_onlyS"
   ```

 <small>*N.B. In this example the embeddings evaluated were created with 10% of the negatives.*</small>


### TransRHySeCo - Instructions

To train TransRHySeCo all input files must reside in the same directory ("path_to_files"), "path_to_files", and these files include: relation2id.txt, entity2id.txt, train2id_Consistent_withAugmentation.txt and the files with the embeddings obtained with TransHySeCo ("entity2vec_note1.vec" and "relation2vec_note1.vec" where 'note' depends on the name given to the best iteration embeddings obtained with TransHySeCo.
The training output yields the embeddings of entities and relationships, saved in the files: relation2vec_note.vec and entity2vec_note.vec. 
  ```bash
g++ -std=c++11 TransRHySeCo.cpp -o TransRHySeCo.exe -pthread
./TransRHySeCo.exe -input ~/path_to_files/ -output ~/path_to_files/ -note "_RHySeCo" -note1 "_best_iteration_note"
   ```
To test TransHySeCo the LinkPredictionR.cpp algorithm is used. Similarly to the LinkPrediction.cpp one, in the folder "path_to_embedding" there have to be the embeddings to be evaluated: the files entity2vec and relation2vec followed by the string indicated in "note" that identify the settings of creation of the embeddings. 

  ```bash
g++ -std=c++11 LinkPredictionR.cpp -o LinkPredictionR.exe -pthread -O3 -march=native
./LinkPredictionR.exe -init ~/path_to_embedding/ -input ~/path_to_embedding/ -output ~/path_to_embedding/ -note "_to_test"
   ```

### Code contributions
 - [https://github.com/aditya1601/kmeans-clustering-cpp], Giovanni Sansaro [3]
 - [https://github.com/thunlp/Fast-TransX], [https://github.com/iieir-km/ComplEx-NNE_AER/tree/master/datasets/DB100K], [https://github.com/nle-ml/mmkb/tree/master/DB15K] (as done by [TransOWL authors](https://github.com/Keehl-Mihael/TransROWL-HRS/tree/master?tab=readme-ov-file#code-contributions), the datasets DB100K and DB15K have been modified compared to their original version [10] [11])
 - [https://www.mpi-inf.mpg.de/departments/databases-and-information-systems/research/yago-naga/yago/downloads] - YAGO ontology
 - [https://github.com/Keehl-Mihael/TransROWL-HRS/tree/master?tab=readme-ov-file#] - Triple classification algorithm and link prediction algorithms were taken by the [TransOWL authors](https://github.com/Keehl-Mihael/TransROWL-HRS/tree/master?tab=readme-ov-file#code-contributions). Their TransOWL algorithm, has also been used as a basis for TransHySeCo and deeply modified to support the hybrid creation of negatives and iterative training.


