# Lecture 5 Massive Graph

## k -Clique and Maximal Cliques

### Typical large network structure: k -Clique

![image-20241025101145519](/home/yutao/.config/Typora/typora-user-images/image-20241025101145519.png)

It's NP_Complete Problem

Maximal clique的意思是, 再添加一个node, 图形将不再是一个complete graph了

![image-20241025101745388](/home/yutao/.config/Typora/typora-user-images/image-20241025101745388.png)

![image-20241025102234165](/home/yutao/.config/Typora/typora-user-images/image-20241025102234165.png)

![image-20241025102305365](/home/yutao/.config/Typora/typora-user-images/image-20241025102305365.png)

![image-20241025102245475](/home/yutao/.config/Typora/typora-user-images/image-20241025102245475.png)

![image-20241025102716596](/home/yutao/.config/Typora/typora-user-images/image-20241025102716596.png)

### Bron-Kerbosch Algorithm

![image-20241025103518966](/home/yutao/.config/Typora/typora-user-images/image-20241025103518966.png)

![image-20241025103551999](/home/yutao/.config/Typora/typora-user-images/image-20241025103551999.png)

![image-20241025103537143](/home/yutao/.config/Typora/typora-user-images/image-20241025103537143.png)

![image-20241025103604143](/home/yutao/.config/Typora/typora-user-images/image-20241025103604143.png)

In the graph we list all the cliques of the graph

![image-20241025104028372](/home/yutao/.config/Typora/typora-user-images/image-20241025104028372.png)

### Bron-Kerbosch Algorithm with pivot: All Maximal Cliques
![image-20241025105106030](/home/yutao/.config/Typora/typora-user-images/image-20241025105106030.png)

![image-20241025105249329](/home/yutao/.config/Typora/typora-user-images/image-20241025105249329.png)

![image-20241025105609414](/home/yutao/.config/Typora/typora-user-images/image-20241025105609414.png)

![image-20241025105713888](/home/yutao/.config/Typora/typora-user-images/image-20241025105713888.png)





## k -Core Subgraphs Decomposition (Relaxation of a clique: k -core)

### Typical large network structure: k -Core

![image-20241025105840862](/home/yutao/.config/Typora/typora-user-images/image-20241025105840862.png)

红:3个邻居, 绿: 2个邻居, 黄: 1个邻居

![image-20241025100116263](/home/yutao/.config/Typora/typora-user-images/image-20241025100116263.png)



### k -Core Subgraphs Decomposition

![image-20241025100742756](/home/yutao/.config/Typora/typora-user-images/image-20241025100742756.png)

![image-20241025100935838](/home/yutao/.config/Typora/typora-user-images/image-20241025100935838.png)

![image-20241025101418187](/home/yutao/.config/Typora/typora-user-images/image-20241025101418187.png)

![image-20241025100945369](/home/yutao/.config/Typora/typora-user-images/image-20241025100945369.png)

![image-20241025104117477](/home/yutao/.config/Typora/typora-user-images/image-20241025104117477.png)

![image-20241025104127535](/home/yutao/.config/Typora/typora-user-images/image-20241025104127535.png)







## Community Detection Problem

### Community Detection Problem

![image-20241025104244586](/home/yutao/.config/Typora/typora-user-images/image-20241025104244586.png)

<img src="/home/yutao/.config/Typora/typora-user-images/image-20241025104309959.png" alt="image-20241025104309959" style="zoom:50%;" />

<img src="/home/yutao/.config/Typora/typora-user-images/image-20241025104719388.png" alt="image-20241025104719388" style="zoom:50%;" />

![image-20241025105032550](/home/yutao/.config/Typora/typora-user-images/image-20241025105032550.png)

![image-20241025105128629](/home/yutao/.config/Typora/typora-user-images/image-20241025105128629.png)

![image-20241025105443679](/home/yutao/.config/Typora/typora-user-images/image-20241025105443679.png)

### Clique-based approach

![image-20241025110040901](/home/yutao/.config/Typora/typora-user-images/image-20241025110040901.png)

![image-20241025110643949](/home/yutao/.config/Typora/typora-user-images/image-20241025110643949.png)

Blue community {A, B , C , D } should be called as a clique

Problem:

	1. We need to get k Clique first
	1. Overlapping

#### Clique Percolation Method: Algorithm

![image-20241025111840494](/home/yutao/.config/Typora/typora-user-images/image-20241025111840494.png)

![image-20241025112003593](/home/yutao/.config/Typora/typora-user-images/image-20241025112003593.png)

### Modularity maximization approach

#### Community Detection: Louvain Algorithm

![image-20241107094528896](/home/yutao/.config/Typora/typora-user-images/image-20241107094528896.png)

##### Community Detection: Modularity

![image-20241107095224092](/home/yutao/.config/Typora/typora-user-images/image-20241107095224092.png)

![image-20241107095553137](/home/yutao/.config/Typora/typora-user-images/image-20241107095553137.png)

![image-20241107095606143](/home/yutao/.config/Typora/typora-user-images/image-20241107095606143.png)

![image-20241107100346827](/home/yutao/.config/Typora/typora-user-images/image-20241107100346827.png)

![image-20241107100406099](/home/yutao/.config/Typora/typora-user-images/image-20241107100406099.png)

![image-20241107100416288](/home/yutao/.config/Typora/typora-user-images/image-20241107100416288.png)

![image-20241107101027617](/home/yutao/.config/Typora/typora-user-images/image-20241107101027617.png)

![image-20241107101427855](/home/yutao/.config/Typora/typora-user-images/image-20241107101427855.png)

![image-20241107101437238](/home/yutao/.config/Typora/typora-user-images/image-20241107101437238.png)

![image-20241107101504691](/home/yutao/.config/Typora/typora-user-images/image-20241107101504691.png)

![image-20241107101943433](/home/yutao/.config/Typora/typora-user-images/image-20241107101943433.png)

![image-20241107101954140](/home/yutao/.config/Typora/typora-user-images/image-20241107101954140.png)

![image-20241107102044296](/home/yutao/.config/Typora/typora-user-images/image-20241107102044296.png)

![image-20241107102107216](/home/yutao/.config/Typora/typora-user-images/image-20241107102107216.png)

![image-20241107102335592](/home/yutao/.config/Typora/typora-user-images/image-20241107102335592.png)

![image-20241107102348388](/home/yutao/.config/Typora/typora-user-images/image-20241107102348388.png)

![image-20241107102427399](/home/yutao/.config/Typora/typora-user-images/image-20241107102427399.png)

![image-20241107102736867](/home/yutao/.config/Typora/typora-user-images/image-20241107102736867.png)

![image-20241107102753820](/home/yutao/.config/Typora/typora-user-images/image-20241107102753820.png)

![image-20241107103859063](/home/yutao/.config/Typora/typora-user-images/image-20241107103859063.png)

![image-20241107103934360](/home/yutao/.config/Typora/typora-user-images/image-20241107103934360.png)

![image-20241107104002621](/home/yutao/.config/Typora/typora-user-images/image-20241107104002621.png)











### Random walk-based approach

#### Walktrap Approach

![image-20241107112135630](/home/yutao/.config/Typora/typora-user-images/image-20241107112135630.png)

![image-20241107112618930](/home/yutao/.config/Typora/typora-user-images/image-20241107112618930.png)

![image-20241107112632757](/home/yutao/.config/Typora/typora-user-images/image-20241107112632757.png)

![image-20241107112902508](/home/yutao/.config/Typora/typora-user-images/image-20241107112902508.png)

![image-20241107113049189](/home/yutao/.config/Typora/typora-user-images/image-20241107113049189.png)

![image-20241107113209476](/home/yutao/.config/Typora/typora-user-images/image-20241107113209476.png)

![image-20241107113222020](/home/yutao/.config/Typora/typora-user-images/image-20241107113222020.png)







### Edge betweenness separation-based approach

#### Girvan-Newman Approach

![image-20241107113927847](/home/yutao/.config/Typora/typora-user-images/image-20241107113927847.png)

![image-20241107114009470](/home/yutao/.config/Typora/typora-user-images/image-20241107114009470.png)

![image-20241107114026058](/home/yutao/.config/Typora/typora-user-images/image-20241107114026058.png)

