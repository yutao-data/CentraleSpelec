# GENERAL INTRODUCTION

## Main Topics
Part 1

Preliminaries on graph theory & linear algebra
Random Walk & Page Rank algorithms
Graph centrality measures
Community detection, Influence maximisation, Label propagation, ... 

Part 2

Embedding graphs & Applications: Spectral approaches, Learning-based graph embedding approaches, Knowledge graphs
Assessment: 
Individual assessment: Individual assessment: 2 main quizzes  for each part 70% - The presence is mandatory!!
Assessment per pair for each part: 2 main mini-project (presentation + delivers)   30% - The presence is mandatory!!
No resit exam







## The Bridges of Königsberg

![image-20240927084552492](/home/yutao/.config/Typora/typora-user-images/image-20240927084552492.png)







## Graph-structured data is everywhere

Graph-structured data at the heart of complex systems, play a major role in our daily life, in science and economy
	Cooperation between billions of individuals, or communication infrastructures - billions of cell phones with computers and satellites -, interactions between thousands of genes and metabolites within our cells, billions of neurons in our brain, internet of things . . .



Understanding mathematical foundations, description, prediction, and eventually control this kind of systems is one of the major scientific challenges of the 21st century.
	The Bridges of Königsberg (18th century with Euler), Paul Erdös and Alfréd Rényi (1959), Mark Granovetter (1973)
	Emergence of Network Science
	Also the most revolutionary technologies, empowering everything from Google to Facebook, CISCO, Twitter, LinkedIn, . . .
	And neural networks . . .



![image-20240927085439320](/home/yutao/.config/Typora/typora-user-images/image-20240927085439320.png)





## Social Networks

![image-20240927085638410](/home/yutao/.config/Typora/typora-user-images/image-20240927085638410.png)





## Encyclopedia, Semantic & Knowledge Networks

![image-20240927090103313](/home/yutao/.config/Typora/typora-user-images/image-20240927090103313.png)

Typical NLP problems
+ Information extraction at sentence or document level (across sentences)
+ Word sense disambiguation (neighbouring words)
+ Entity Resolution, Entity Linking, Relation Extraction

![image-20240927090727796](/home/yutao/.config/Typora/typora-user-images/image-20240927090727796.png)

Vertices: Articles

Edges: cross-language links, internal links, category links, redirect links . . .



DBPedia: Open data project built from wikipedia and other thesaurus based on ontologies (Yago, wordnet, DBLP, Freebase, Wikidata...). Used by
Google, IBM Watson’s, ... Popular: Google and Satori Knowledge Graphs
+ According to Gruber, ontology is an explicit specification of a conceptualization, which makes it possible to specify in a formal language the
concepts of a domain and their relationships.
IBM Watson’s Jeopardy



Vertices: Subject s, Object o - Edges: Semantic relationships r
+ KB is a set of triples <s, r, o>: T-box (is-a, subclassOf, equivalentClass, properties, domain, range, ...) and A-box (class instances and their
relationships)

![image-20240927091713505](/home/yutao/.config/Typora/typora-user-images/image-20240927091713505.png)

A knowledge graph:
+ Inference engine base on description logics Challenges: Incomplete, Inconsistent, Ambiguous
+ W3C languages: RDF, OWL, SPARQL, ...





## Transaction Networks (e.g., Bitcoin)

Vertices: Users

Edges: Exchange of Currency

![image-20240927092321047](/home/yutao/.config/Typora/typora-user-images/image-20240927092321047.png)





## Biological Networks

Protein-protein interaction, Metabolic networks, Gene regulatory networks

![image-20240927092347388](/home/yutao/.config/Typora/typora-user-images/image-20240927092347388.png)



## Recommender Systems

IMDb: Database related to films, television programs, videos, games, streaming content, ...
+ Vertices: Users and Items (content-based) or Users and Users (collaboration-based)
+ Edges: ratings or similarities

![image-20240927092423950](/home/yutao/.config/Typora/typora-user-images/image-20240927092423950.png)







# GRAPH THEORY PRELIMINARIES

## Graph Typology

![image-20240927093221172](/home/yutao/.config/Typora/typora-user-images/image-20240927093221172.png)

**无向图 (Undirected graph)**：图的边是顶点的对称关系，即 (vi,vj)=(vj,vi)(v_i, v_j) = (v_j, v_i)(vi,vj)=(vj,vi)，表示边的两个顶点没有方向。

**有向图 (Directed graph)**：图的边是顶点的非对称关系，即 (vi,vj)(v_i, v_j)(vi,vj) 和 (vj,vi)(v_j, v_i)(vj,vi) 可能表示不同的边，因此边是有方向的。

**加权图 (Weighted graph)**：

- **加权顶点 (weighted vertex)**：每个顶点 wvw_vwv 具有一个与其关联的权值，可以表示为 wv:V→Rw_v : V \rightarrow \mathbb{R}wv:V→R。
- **加权边 (weighted edge)**：每条边 wew_ewe 也可以具有权值，表示为 we:E→Rw_e : E \rightarrow \mathbb{R}we:E→R，权值通常用于表示距离、成本等信息。

**标记图 (Labeled graph)**：

- **标记顶点 (labeled vertex)**：每个顶点 wvw_vwv 具有一个标签，通常从某个集合（例如字母或符号集合）中取值，表示为 wv:V→Lw_v : V \rightarrow \mathbb{L}wv:V→L。
- **标记边 (labeled edge)**：每条边也可以有一个标签，表示为 we:E→Lw_e : E \rightarrow \mathbb{L}we:E→L，标签可以表示关系或类型等。

**二部图 (Bipartite graph)**：顶点集可以分为两个不相交的子集 V1V_1V1 和 V2V_2V2，且所有边的顶点分别来自这两个子集，即 E={(vi,vj)∣vi∈V1,vj∈V2}E = \{(v_i, v_j) | v_i \in V_1, v_j \in V_2 \}E={(vi,vj)∣vi∈V1,vj∈V2}。二部图是 kkk-部图的特殊情况，当 k=2k=2k=2 时为二部图。

**多重图或多重有向图 (Multigraph or Multidigraph)**：允许多个边连接相同的顶点对。对于多重图，映射 r:E→Vr : E \rightarrow Vr:E→V 指定了每条边 e∈Ee \in Ee∈E 所连接的顶点对 (vi,vj)(v_i, v_j)(vi,vj)。

**超图 (Hypergraph)**：每条边可以连接任意数量的顶点，而不是像普通图那样只连接两个顶点。边在这里是顶点的一个子集。

**完全图 (Complete graph)**：在完全图中，任意两个不同的顶点之间都有一条边，即对于每一对 (vi,vj)∈V×V(v_i, v_j) \in V \times V(vi,vj)∈V×V，都存在边 (vi,vj)∈E(v_i, v_j) \in E(vi,vj)∈E。

![image-20240927093741372](/home/yutao/.config/Typora/typora-user-images/image-20240927093741372.png)



## Graph Properties

![image-20240927094316544](/home/yutao/.config/Typora/typora-user-images/image-20240927094316544.png)

resp means respectively

![image-20240927094623716](/home/yutao/.config/Typora/typora-user-images/image-20240927094623716.png)

![image-20240927094645801](/home/yutao/.config/Typora/typora-user-images/image-20240927094645801.png)



![image-20240927094842009](/home/yutao/.config/Typora/typora-user-images/image-20240927094842009.png)

![image-20240927094950293](/home/yutao/.config/Typora/typora-user-images/image-20240927094950293.png)

![image-20240927094958523](/home/yutao/.config/Typora/typora-user-images/image-20240927094958523.png)

![image-20240927102923251](/home/yutao/.config/Typora/typora-user-images/image-20240927102923251.png)

![image-20240927103303496](/home/yutao/.config/Typora/typora-user-images/image-20240927103303496.png)

![image-20240927103333542](/home/yutao/.config/Typora/typora-user-images/image-20240927103333542.png)

## Breadth First Search (BFS)

![image-20240927104218667](/home/yutao/.config/Typora/typora-user-images/image-20240927104218667.png)

![image-20240927104423030](/home/yutao/.config/Typora/typora-user-images/image-20240927104423030.png)

![image-20240927105250980](/home/yutao/.config/Typora/typora-user-images/image-20240927105250980.png)

## Depth First Search (DFS)

![image-20240927104525358](/home/yutao/.config/Typora/typora-user-images/image-20240927104525358.png)

这里使用的是栈结构,先进后出

![image-20240927105222569](/home/yutao/.config/Typora/typora-user-images/image-20240927105222569.png)

![image-20240927105303130](/home/yutao/.config/Typora/typora-user-images/image-20240927105303130.png)

## Graph Representation using Matrices

![image-20240927105556182](/home/yutao/.config/Typora/typora-user-images/image-20240927105556182.png)

![image-20240927110018709](/home/yutao/.config/Typora/typora-user-images/image-20240927110018709.png)

![image-20240927110029046](/home/yutao/.config/Typora/typora-user-images/image-20240927110029046.png)





## Exercises

1) Using graph traversal algorithms, propose an algorithm that computes the number of edges between a given vertex and all other vertices.

![image-20240927110308734](/home/yutao/.config/Typora/typora-user-images/image-20240927110308734.png)

![image-20240927111254313](/home/yutao/.config/Typora/typora-user-images/image-20240927111254313.png)

![image-20241004091433079](/home/yutao/.config/Typora/typora-user-images/image-20241004091433079.png)





2. ###### Given the following cycles with even and odd length (with the distances or depths from the grey vertex), what do you think about the case of graphs with an odd cycle (in number of edges)? Is this a characteristic property? State the general case.

![image-20240927111730085](/home/yutao/.config/Typora/typora-user-images/image-20240927111730085.png)

Characteristic Property:
Odd-length cycles are characteristic of non-bipartite graphs. A graph that contains at least one odd-length cycle cannot be bipartite because it is impossible to  divide the vertices into two distinct sets such that every edge connects vertices from different sets.
Even-length cycles do not have this problem. They can be bipartite, as you can always alternate distances or vertex sets without conflict.

General Case:
A graph is bipartite if and only if it does not contain any odd-length cycle. This is a well-known characteristic property of bipartite graphs. If you can successfully divide a graph into two sets of vertices such that no edge exists between vertices within the same set, the graph is bipartite. The presence of an odd-length cycle disrupts this division, while even-length cycles allow for this property.

![image-20241004091448080](/home/yutao/.config/Typora/typora-user-images/image-20241004091448080.png)

3. Propose an algorithm that determines if a graph contains an odd cycle.

![image-20241004091459134](/home/yutao/.config/Typora/typora-user-images/image-20241004091459134.png)







4. In a bipartite graph, can there be a cycle with an odd number of edges? Is this a characteristic property? Justify your answer.

![image-20241004091511643](/home/yutao/.config/Typora/typora-user-images/image-20241004091511643.png)







5. Propose an algorithm that allows to determine if a graph is bipartite. Test your algorithm on the following graph. Is it bipartite? Justify your answer

![image-20240927112544895](/home/yutao/.config/Typora/typora-user-images/image-20240927112544895.png)



![image-20241004091520191](/home/yutao/.config/Typora/typora-user-images/image-20241004091520191.png)







### Exercise: Depth-First Search and 2-colorable graphs

![image-20241004091622397](/home/yutao/.config/Typora/typora-user-images/image-20241004091622397.png)

![image-20241004091655674](/home/yutao/.config/Typora/typora-user-images/image-20241004091655674.png)





### Exercise: Shortest path

![image-20241004091739074](/home/yutao/.config/Typora/typora-user-images/image-20241004091739074.png)

We need to make sure no negative weights

![image-20241004093014494](/home/yutao/.config/Typora/typora-user-images/image-20241004093014494.png)

![image-20241004093032322](/home/yutao/.config/Typora/typora-user-images/image-20241004093032322.png)

### Exercise: Matrix Multiplication & Power

![image-20241004093403223](/home/yutao/.config/Typora/typora-user-images/image-20241004093403223.png)

![image-20241004093806624](/home/yutao/.config/Typora/typora-user-images/image-20241004093806624.png)

The complexity is n^3

![image-20241004094451955](/home/yutao/.config/Typora/typora-user-images/image-20241004094451955.png)

![image-20241004094426677](/home/yutao/.config/Typora/typora-user-images/image-20241004094426677.png)





# LINEAR ALGEBRA PRELIMINARIES

## Vector Norms

![image-20241004094919196](/home/yutao/.config/Typora/typora-user-images/image-20241004094919196.png)

`f(x) = 0 -> x = 0` 表示：如果一个向量的范数为0，那么这个向量一定是零向量。这实际上就是非负性性质的一个推论。







## Vectors and Matrices

![image-20241004101840513](/home/yutao/.config/Typora/typora-user-images/image-20241004101840513.png)



## Matrix Transpose

![image-20241004102000165](/home/yutao/.config/Typora/typora-user-images/image-20241004102000165.png)



## Matrix Determinant

![image-20241004102109059](/home/yutao/.config/Typora/typora-user-images/image-20241004102109059.png)



![image-20241004103038519](/home/yutao/.config/Typora/typora-user-images/image-20241004103038519.png)







## Invertible Matrix

![image-20241004103651708](/home/yutao/.config/Typora/typora-user-images/image-20241004103651708.png)





## Eigenvectors and eigenvalues

![image-20241004104111726](/home/yutao/.config/Typora/typora-user-images/image-20241004104111726.png)

![image-20241004104913133](/home/yutao/.config/Typora/typora-user-images/image-20241004104913133.png)

![image-20241004104946130](/home/yutao/.config/Typora/typora-user-images/image-20241004104946130.png)

![image-20241004105835551](/home/yutao/.config/Typora/typora-user-images/image-20241004105835551.png)

![image-20241004105823340](/home/yutao/.config/Typora/typora-user-images/image-20241004105823340.png)

![image-20241004110536959](/home/yutao/.config/Typora/typora-user-images/image-20241004110536959.png)

![image-20241004110600290](/home/yutao/.config/Typora/typora-user-images/image-20241004110600290.png)





## Eigen Decomposition

![image-20241004111214924](/home/yutao/.config/Typora/typora-user-images/image-20241004111214924.png)







## Orthogonal Matrix

![image-20241004111309420](/home/yutao/.config/Typora/typora-user-images/image-20241004111309420.png)





## Positive (semi-)definite matrices

![image-20241004112223187](/home/yutao/.config/Typora/typora-user-images/image-20241004112223187.png)

semi-definite matrix is always symmetric (other matrix don't have this property)

![image-20241004113116042](/home/yutao/.config/Typora/typora-user-images/image-20241004113116042.png)





## Laplacian Matrix

![image-20241004113821166](/home/yutao/.config/Typora/typora-user-images/image-20241004113821166.png)



![image-20241004113932680](/home/yutao/.config/Typora/typora-user-images/image-20241004113932680.png)



