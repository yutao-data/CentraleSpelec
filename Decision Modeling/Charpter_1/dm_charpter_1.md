# Preferences as binary relations

## Definition

A subset of ordered pairs of a set *X* is called a binary relation.

Formally, *R* is a binary relation on *X* if *R* *⊆* *X* *×* *X*.

Usually we write *x R y* if (*x**,* *y*) *∈* *R*



### Relation as Directed Graphs

Let be *R* a relation on a set *A*. A direct graph representation of relation *R* is

*G* = (*A**,* *E*) where *A* is the set of nodes and *E* the set of direct edges where

​	(*a**,* *b*) *∈* *R* *⇐⇒* (*a**,* *b*) *∈* *E*(an arrow from *a* to *b*)



### Relation as Matrices

![image-20240916102215341](/home/yutao/.config/Typora/typora-user-images/image-20240916102215341.png)



### Definitions

A binary relation *R* on *X* is said to be:

**Reflexive** if for every *x* *∈* *X*, *x R x*;

**Irreflexive** if for every *x* *∈* *X*, not(*x R x*)



**Complete** if for every *x**,* *y* *∈* *X*, *x R y* or *y R x* (possibly both);

**Weakly complete** if for every *x**,* *y* *∈* *X*, *x* *6* = *y* =*⇒* [*x R y* or *y R x*] (possibly both);



**Symmetric** if for every *x**,* *y* *∈* *X*, [*x R y* =*⇒* *y R x*];

**Asymmetric** if for every *x**,* *y* *∈* *X*, [*x R y* =*⇒* not(*y R x*)];

**Antisymmetric** if for every *x**,* *y* *∈* *X*, [*x R y* and *y R x* =*⇒* *x* = *y*];



**Transitive** if for every *x**,* *y**,* *z* *∈* *X*, [*x R y* and *y R z* =*⇒* *x R z*];

**Negatively transitive** if for every *x**,* *y**,* *z* *∈* *X*, [not(*x R y*) and not(*y R z*) =*⇒* not(*x R z*)];

**Semi-transitive** if for every *x**,* *y**,* *z**,**t* *∈* *X*, [(*x R y*) and (*y R z*)] =*⇒* [(*x R t*) or (*t R z*)]





### Properties

![image-20240916103525102](/home/yutao/.config/Typora/typora-user-images/image-20240916103525102.png)



### Relations *P* and *I* from *R*

For a binary relation *R* on *X*, we define a symmetric part *I* and an asymmetric part *P* as follows: for all *x**,* *y* *∈* *X*

* x I y* if [*x R y* and *y R x*]

- *x P y* if [*x R y* and not(*y R x*)]



### Concatenation of two binary relations

![image-20240916103851480](/home/yutao/.config/Typora/typora-user-images/image-20240916103851480.png)

假设集合 X={A,B,C}X = \{A, B, C\}X={A,B,C}，并且我们定义两个二元关系：

- RRR 表示“是朋友”，
- R′R'R′ 表示“是同事”。

假设 ARBA R BARB 表示 AAA 和 BBB 是朋友，BR′CB R' CBR′C 表示 BBB 和 CCC 是同事。

通过关系的连接 R⋅R′R \cdot R'R⋅R′，我们可以说 AAA 通过 BBB 与 CCC 产生了间接关系：即 AR⋅R′CA R \cdot R' CAR⋅R′C，意思是“AAA 的朋友是 BBB，而 BBB 和 CCC 是同事，因此 AAA 和 CCC 通过这种间接关系相关。”



### Proposition(important)

*Let be* *R* *a binary relation on X.*

1 *R* *transitive* =*⇒ R • R ⊆ R* ( *i.e.* *R*^2 *⊆ R*)

2 *R* *asymmetric* =*⇒ R* *irreflexive*

3 *R* *complete* *⇐⇒ R* *reflexive and weakly complete*

4 ***R* *asymmetric and negative transitive* =*⇒ R* *transitive***

反证法证明：

![image-20240916111236515](/home/yutao/.config/Typora/typora-user-images/image-20240916111236515.png)



**5 *R* *complete and transitive* =*⇒ R* *negative transitive***

Assume we have not(x R y), and not (y R z)

we want to prove not(x R z)

let's assume x R z

because not(x R y) we can get (y R x) from complete

so we have (y R x), and (x R z), so we have (y R z) from transitive

so it's conflict with our assumption, so we proved it



### Definition

A binary relation *R* on *X* that is reflexive, symmetric and transitive is called an **equivalence** relation.

A binary relation *R* on *X* is a **preorder** if *R* is reflexive and transitive.

A binary relation *R* on *X* is a **weak order** or a **complete preorder** if *R* is complete and transitive.

A binary relation *R* on *X* is a **total order** or a **linear order** if *R* is complete, antisymmetric and transitive.



### Exercise 1

![image-20240923084132666](/home/yutao/.config/Typora/typora-user-images/image-20240923084132666.png)

1. Give a matrix and a graphical representation of *B*

|      | a    | b    | c    | d    | e    | f    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| a    | 1    | 1    | 1    | 1    | 1    | 1    |
| b    | 0    | 1    | 1    | 1    | 1    | 1    |
| c    | 0    | 0    | 1    | 1    | 1    | 1    |
| d    | 0    | 1    | 1    | 1    | 1    | 0    |
| e    | 0    | 0    | 0    | 1    | 1    | 1    |
| f    | 0    | 0    | 0    | 0    | 1    | 1    |

<img src="/home/yutao/.config/Typora/typora-user-images/image-20240923085634728.png" alt="image" width="400"/>

2. Is *B* reflexive? symmetric? asymmetric? transitive? negative transitive? semi-transitive?

 reflexive: Yes

symmetric: No

asymmetric: No

Transitive: d->e, e->f, but d-!f, so No

negative transitive: d-!f, f-!c, but d->c, so No

semi-transitive: d B e, e B d, but not(d B f) and not(f B d), so No



### Exercise 2

Let be *B* and *B*' two equivalence relations on a set *X*:

1. Prove that B ∩ B' is an equivalence relation.

​		*x* (B ∩ B' ) *y* *⇐⇒* [*x* *B* *y* and *x* *B* ' *y*]*,* For all *x**,* *y* *∈* *X*

to be equivalence, we need to have Reflexivity, Symmetry, and Transitivity

![image-20240923093905715](/home/yutao/.config/Typora/typora-user-images/image-20240923093905715.png)

![image-20240923093925357](/home/yutao/.config/Typora/typora-user-images/image-20240923093925357.png)

2. Is *B ∪ B*' an equivalence relation ?

​	        x (B ∪ B' ) *y* *⇐⇒* [*x* *B* *y* or *x* *B*' *y*]*,* For all *x**,* *y* *∈* *X*

![image-20240923094523171](/home/yutao/.config/Typora/typora-user-images/image-20240923094523171.png)

3. Could we have the same conclusions if *B* and *B*'  are two complete preorders on a set *X* ? 

It's not true, because we get complete preorder, we could have complete and transitive, so we could have reflexive and transitive, but we could not get symmetric, so it's false

![image-20240923102223813](/home/yutao/.config/Typora/typora-user-images/image-20240923102223813.png)

### Reflexive closure

Given a relation R, we want to add to it just enough “edges” to make the resulting relation satisfy the reflexive property.

![image-20240923104136277](/home/yutao/.config/Typora/typora-user-images/image-20240923104136277.png)



### Symmetric closure

Given a relation R, we want to add to it just enough “edges” to make the resulting relation satisfy the symmetric property.

![image-20240923104216545](/home/yutao/.config/Typora/typora-user-images/image-20240923104216545.png)



### Transitive closure

Given a relation R, we want to add to it just enough “edges” to make the resulting relation satisfy the transitivity property.

![image-20240923104308702](/home/yutao/.config/Typora/typora-user-images/image-20240923104308702.png)



**How to extend a partial pre-order to a complete preorder?**

By applying a topological sorting when there is **no cycle** in the preferences.



### Topological Sorting

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge *uv*, vertex *u* comes before *v* in the ordering.

Topological Sorting for a graph is not possible if the graph is not a DAG.

拓扑排序是针对**有向无环图**（DAG, Directed Acyclic Graph）的一种排序方法，它将图的顶点按照某种顺序排序，确保在有向图中，如果有边 u→vu \to vu→v，那么顶点 uuu 一定排在顶点 vvv 的前面。

![image-20240923104746478](/home/yutao/.config/Typora/typora-user-images/image-20240923104746478.png)

A topological sorting of the previous graph is 542310.

There can be more than one topological sorting for a graph. For example, another topological sorting of the previous graph is 452310. The first vertex in topological sorting is always a vertex with in-degree as 0 (a vertex with no incoming edges).



### Idea of the numerical representation

![image-20240923110205515](/home/yutao/.config/Typora/typora-user-images/image-20240923110205515.png)



Theorem (Cantor, 1895)

![image-20240923110558110](/home/yutao/.config/Typora/typora-user-images/image-20240923110558110.png)

![image-20240923110722194](/home/yutao/.config/Typora/typora-user-images/image-20240923110722194.png)

这个定理的核心思想是：如果一个可数集合上的二元关系是完全预序的，那么可以通过一个实值函数 fff 来解释这个关系。换句话说，集合 XXX 中的每个元素都可以映射到一个实数，且这个实数的大小反映了元素之间的关系 ≿。

康托尔的定理表明，**完全预序**的二元关系可以用一个实数值函数来表示，这为很多数学和应用领域提供了便利，例如在排序、选择理论以及偏好分析中。这种函数的存在性为数学上的各种优化和分析提供了基础。

![image-20240923111019282](/home/yutao/.config/Typora/typora-user-images/image-20240923111019282.png)

![image-20240923111422089](/home/yutao/.config/Typora/typora-user-images/image-20240923111422089.png)

![image-20240923112123730](/home/yutao/.config/Typora/typora-user-images/image-20240923112123730.png)

![image-20240923112134243](/home/yutao/.config/Typora/typora-user-images/image-20240923112134243.png)

![image-20240923111754283](/home/yutao/.config/Typora/typora-user-images/image-20240923111754283.png)

![image-20240923112030321](/home/yutao/.config/Typora/typora-user-images/image-20240923112030321.png)

![image-20240923112050477](/home/yutao/.config/Typora/typora-user-images/image-20240923112050477.png)

![image-20240930085204814](/home/yutao/.config/Typora/typora-user-images/image-20240930085204814.png)
