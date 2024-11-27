**Ontology-Enhanced Subgraph Contrastive Learning (OESCL) for Inductive Knowledge Graph Completion**

------

**Overview:**

We propose **Ontology-Enhanced Subgraph Contrastive Learning (OESCL)**, a novel method that builds upon GraIL by integrating ontologies and utilizing contrastive learning for inductive knowledge graph completion. OESCL introduces the following key innovations:

1. **Ontology-Augmented Subgraph Extraction**: Incorporate ontological information into the extracted subgraphs, enriching them with semantic context.
2. **Probabilistic Logic Graph Neural Networks**: Leverage probabilistic logic to guide the message passing within GNNs, inspired by pLogicNet.
3. **Ontology-Guided Contrastive Learning**: Employ contrastive learning with hard negatives generated using ontological rules, inspired by KALE's integration of logical rules.

These innovations differentiate OESCL from RMPI, which focuses on relational message passing in a relation-view graph. OESCL operates on entity-based subgraphs enhanced with ontologies and employs contrastive learning to improve inductive reasoning.

------

**Method Details:**

### 1. **Ontology-Augmented Subgraph Extraction**

**Objective:** Enrich the KKK-hop enclosing subgraphs around target triples with ontological information to provide a richer semantic context for GNNs.

- Subgraph Extraction:

  ![image-20241126133221194](/home/yutao/.config/Typora/typora-user-images/image-20241126133221194.png)

- Ontology Integration:

  - Retrieve relevant ontological entities and relations connected to the nodes and edges within Gh,t\mathcal{G}_{h,t}Gh,t.

  - Add Ontological Nodes and Edges:

    - Include ontological concepts (e.g., classes, types) related to the entities in Gh,t\mathcal{G}_{h,t}Gh,t.
    - Add edges representing ontological relationships (e.g., `subClassOf`, `typeOf`, `equivalentTo`).

  - Resulting Subgraph:

    - An ontology-augmented subgraph Gh,tont\mathcal{G}_{h,t}^{\text{ont}}Gh,tont that combines structural and semantic information.

    

### 2. **Probabilistic Logic Graph Neural Networks**

**Objective:** Incorporate probabilistic logic into GNNs to model the uncertainty and semantics of logical rules, inspired by pLogicNet.

- **Node and Edge Features:**
  - Entity Nodes:
    - Feature vectors include structural information (e.g., distance labels) and embeddings of ontological types.
  - Relation Edges:
    - Edge features include relation embeddings and ontological relation types.
- **Probabilistic Logic Integration:**
  - Logic Rules as Constraints:
    - Represent logical rules as constraints within the GNN framework.
    - Use probabilistic logic to handle the uncertainty of rules.
  - Message Passing with Logic Guidance:
    - During message passing, incorporate logic rule probabilities to modulate the aggregation of neighbor information.
    - For example, if a rule suggests that (h,r′,t)(h, r', t)(h,r′,t) is likely given (h,r,t)(h, r, t)(h,r,t), increase the attention to neighbors connected via r′r'r′.
- **GNN Architecture:**
  - Utilize a GNN that supports edge features and attention mechanisms, such as a Relational Graph Attention Network (R-GAT).
  - **Node Update Rule:** hi(k)=σ(∑(j,r)∈N(i)αij(k)Wr(k)hj(k−1)+W0(k)hi(k−1))h_i^{(k)} = \sigma \left( \sum_{(j, r) \in \mathcal{N}(i)} \alpha_{ij}^{(k)} W_r^{(k)} h_j^{(k-1)} + W_0^{(k)} h_i^{(k-1)} \right)hi(k)=σ

![image-20241126131729507](/home/yutao/.config/Typora/typora-user-images/image-20241126131729507.png)

- **Logic-Guided Attention Mechanism:**

  - Compute attention coefficients 

    αij(k)\alpha_{ij}^{(k)}αij(k)

     by considering both the structural features and the probabilities from logic rules:

    αij(k)=softmaxj(ϕ(hi(k−1),hj(k−1),eij,Lij))\alpha_{ij}^{(k)} = \text{softmax}_j \left( \phi \left( h_i^{(k-1)}, h_j^{(k-1)}, e_{ij}, \mathcal{L}_{ij} \right) \right)αij(k)=softmaxj(ϕ(hi(k−1),hj(k−1),eij,Lij))

    ![image-20241126131757590](/home/yutao/.config/Typora/typora-user-images/image-20241126131757590.png)

    - ϕ\phiϕ: A function combining node embeddings, edge features, and logic rule probabilities Lij\mathcal{L}_{ij}Lij relevant to edge (i,j)(i, j)(i,j).

### 3. **Ontology-Guided Contrastive Learning**

**Objective:** Use contrastive learning with hard negatives generated based on ontological information and logical rules to enhance the model's discriminative ability.

- **Positive and Negative Sample Generation:**

  - Positive Samples:
    - True triples (h,r,t)(h, r, t)(h,r,t) from the knowledge graph.
  - Hard Negative Samples:
    - Generate negative triples that are challenging to distinguish from positives by considering ontological proximity.
    - For example, replace the tail entity ttt with an entity t′t't′ that shares the same ontological type as ttt and is connected via similar relations.
  - Logic-Based Negatives:
    - Utilize logical rules to create negatives that violate certain rules, making them harder examples.

- **Contrastive Loss Function:**

  - Apply a contrastive loss that pushes embeddings of positive samples closer while pulling embeddings of negative samples apart:

    Lcontrastive=∑(h,r,t)∈D+∑(h′,r′,t′)∈D−max⁡(0,γ+f(h,r,t)−f(h′,r′,t′))\mathcal{L}_{\text{contrastive}} = \sum_{(h,r,t) \in \mathcal{D}^{+}} \sum_{(h',r',t') \in \mathcal{D}^{-}} \max \left( 0, \gamma + f(h, r, t) - f(h', r', t') \right)Lcontrastive=(h,r,t)∈D+∑(h′,r′,t′)∈D−∑max(0,γ+f(h,r,t)−f(h′,r′,t′))

    - D+\mathcal{D}^{+}D+: Set of positive samples.
    - D−\mathcal{D}^{-}D−: Set of hard negative samples.
    - f(h,r,t)f(h, r, t)f(h,r,t): Scoring function computed from the GNN output.
    - γ\gammaγ: Margin hyperparameter.

    ![image-20241126131809010](/home/yutao/.config/Typora/typora-user-images/image-20241126131809010.png)

- **Incorporating Ontology in Loss:**

  - Weight the loss terms based on ontological similarity:
    - Assign higher weights to negatives that are more ontologically similar to positives, forcing the model to learn finer distinctions.

------

**Workflow of OESCL:**

1. **Subgraph Extraction and Augmentation:**
   - Extract KKK-hop enclosing subgraphs for target triples.
   - Augment subgraphs with ontological nodes and edges.
2. **Feature Initialization:**
   - Initialize node features with structural and ontological embeddings.
   - Initialize edge features with relation embeddings and ontological relation types.
3. **Probabilistic Logic GNN Training:**
   - Perform message passing with logic-guided attention.
   - Update node embeddings considering both structural and ontological information.
4. **Contrastive Learning with Hard Negatives:**
   - Generate hard negatives using ontologies and logical rules.
   - Apply contrastive loss to enhance the model's discriminative power.
5. **Triple Scoring and Prediction:**
   - Compute scores for target triples using the learned embeddings.
   - Use these scores for inductive knowledge graph completion tasks.

------

**Advantages Over RMPI:**

1. **Integration of Ontologies at Subgraph Level:**
   - OESCL enriches the entity-based subgraphs with ontological information directly, while RMPI transforms the graph into a relation-view and operates on relations.
2. **Probabilistic Logic Integration:**
   - OESCL incorporates probabilistic logic into the GNN, allowing it to model the uncertainty of logical rules, inspired by pLogicNet.
   - RMPI focuses on relational message passing without explicit probabilistic logic modeling.
3. **Contrastive Learning with Ontology-Guided Negatives:**
   - OESCL employs contrastive learning with hard negatives generated using ontologies and logical rules, enhancing the model's ability to distinguish subtle differences.
   - RMPI does not utilize contrastive learning in this manner.
4. **Entity-Focused Reasoning:**
   - By operating on entity-based subgraphs enriched with ontologies, OESCL maintains the intuitive structure of the knowledge graph.
   - RMPI's transformation to a relation-view graph shifts focus away from entities.

------

**Implementation Considerations:**

- **Scalability:**
  - While augmenting subgraphs with ontologies adds complexity, the method remains scalable due to localized subgraph processing.
- **Ontology Availability:**
  - Requires well-defined ontologies with sufficient coverage of entities and relations.
- **Training Efficiency:**
  - Contrastive learning with hard negatives may increase training time but leads to better generalization.

------

**Potential Benefits of OESCL:**

- **Enhanced Inductive Reasoning:**
  - Better generalization to unseen entities and relations due to the incorporation of ontological semantics.
- **Improved Discriminative Power:**
  - Contrastive learning with ontology-guided hard negatives forces the model to learn more discriminative embeddings.
- **Probabilistic Handling of Logic Rules:**
  - Modeling uncertainty in logical rules allows the method to handle imperfect or noisy ontologies effectively.

------

**Conclusion:**

Ontology-Enhanced Subgraph Contrastive Learning (OESCL) is a robust method for inductive knowledge graph completion that builds upon GraIL by integrating ontologies, probabilistic logic, and contrastive learning. Inspired by KALE and pLogicNet, OESCL introduces ontology-augmented subgraphs, probabilistic logic GNNs, and ontology-guided contrastive learning to enhance reasoning capabilities. By being sufficiently different from RMPI and allowing for fair comparison, OESCL offers a promising direction for leveraging ontologies and logical rules in knowledge graph completion tasks.

------

**References:**

- **GraIL:** Teru, K., Denis, E., & Hamilton, W. L. (2020). Inductive relation prediction by subgraph reasoning. In *International Conference on Machine Learning* (pp. 9448-9457).
- **KALE:** Guo, S., Wang, Q., Wang, L., Wang, B., & Guo, L. (2016). Jointly embedding knowledge graphs and logical rules. In *Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing* (pp. 192–202).
- **pLogicNet:** Qu, M., & Tang, J. (2019). Probabilistic logic neural networks for reasoning. In *Advances in Neural Information Processing Systems* (pp. 7710–7720).



































# yutao.chen@student-cs.fr