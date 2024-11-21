## **Entity-to-Relation Transformation**:

The paper uses a graph transformation process that converts the entity-centric graph into a relation-centric view.

Each relation in the original graph becomes a node in the transformed graph.

Edges in this transformed graph represent relational adjacency based on shared entities in the original graph.

For example, if relation r1r_1r1 connects entity e1e_1e1 to e2e_2e2 and r2r_2r2 also connects e1e_1e1 to e3e_3e3, r1r_1r1 and r2r_2r2 are connected in the transformed graph.

![image-20241119125736440](/home/yutao/.config/Typora/typora-user-images/image-20241119125736440.png)



## **Initial Embedding from Ontology (h0h_0h0)**:

- The ontology provides semantic information like domain, range, subproperties, and hierarchical relationships among relations.
- These semantic features are encoded into an initial embedding h0h_0h0 for each relation. This step involves mapping ontology-derived features to a trainable embedding space, often using a function fschemaf_{\text{schema}}fschema such as a linear transformation:

![image-20241119125815774](/home/yutao/.config/Typora/typora-user-images/image-20241119125815774.png)









## **Relational Message Passing**:

- The relational graph is constructed, where each node represents a relation, and edges capture co-occurrence patterns or structural adjacencies in the KG.
- Starting from the initial embeddings h0h_0h0, message passing layers iteratively update the embeddings hkh_khk by aggregating information from neighboring relations:



![image-20241119125840057](/home/yutao/.config/Typora/typora-user-images/image-20241119125840057.png)

![image-20241119131026295](/home/yutao/.config/Typora/typora-user-images/image-20241119131026295.png)







## **Final Relation Embeddings**:

After 

KKK

 layers of message passing, the embeddings 

hr(K)h_r^{(K)}hr(K)

 for all relations are obtained. These embeddings integrate both:

- Semantic knowledge from the ontology (via h0h_0h0).
- Structural patterns from the KG (via iterative message passing and attention).





## **Prediction**:

- For a given triple (h,r,t)(h, r, t)(h,r,t), the score is computed by combining the learned relation embedding hr(K)h_r^{(K)}hr(K) with the embeddings of entities hhh_hhh and hth_tht (if available):

![image-20241119130120427](/home/yutao/.config/Typora/typora-user-images/image-20241119130120427.png)





