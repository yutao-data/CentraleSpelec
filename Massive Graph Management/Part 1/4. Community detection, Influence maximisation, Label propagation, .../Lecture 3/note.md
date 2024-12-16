# Lazy Random Walks: Formalisation

## Definition
Lazy random walks are a modified version of standard random walks to address the problem of periodicity. At each time step \( t \), the lazy random walk behaves as follows:
- With probability \( \frac{1}{2} \), the walker stays at the current vertex.
- With probability \( \frac{1}{2} \), the walker takes a step to one of the neighboring vertices, following the standard random walk transition rules.

---

## Transition Matrix
The transition probabilities for lazy random walks are represented by the matrix:
\[
W' = \frac{1}{2}(W + I) = \frac{1}{2}(I + A \cdot D^{-1}),
\]
where:
- \( W \): Transition matrix of the standard random walk.
- \( I \): Identity matrix (representing the probability of staying at the current vertex).
- \( A \): Adjacency matrix of the graph \( G \).
- \( D \): Diagonal degree matrix, where \( D_{ii} = d(i) \) is the degree of vertex \( i \).

This modification ensures that lazy random walks break the periodicity of the standard random walk.

---

## Normalized Walk Matrix
Since \( W \) and \( W' \) are not symmetric, their analysis can be complicated. To simplify this, we define the **normalized walk matrix** as:
\[
N = D^{-1/2} \cdot W \cdot D^{-1/2} = D^{-1/2} \cdot A \cdot D^{-1/2}.
\]

The **normalized lazy walk matrix** is similarly defined as:
\[
N' = D^{-1/2} \cdot W' \cdot D^{-1/2} = \frac{1}{2} \left(I + D^{-1/2} \cdot A \cdot D^{-1/2} \right).
\]

---

## Key Properties
1. **Eigenvalues and Eigenvectors**:
   - The matrices \( N \) and \( W \) have the same eigenvalues and related eigenvectors.
   - Proof:
     Suppose \( v \) is an eigenvector of \( N \) with eigenvalue \( \lambda \). Let \( q = D^{1/2} \cdot v \). Then:
     \[
     N \cdot v = \lambda \cdot v \quad \implies \quad D^{-1/2} \cdot W \cdot D^{-1/2} \cdot v = \lambda \cdot v.
     \]
     Multiplying by \( D^{1/2} \) on the left:
     \[
     W \cdot q = \lambda \cdot q.
     \]
     Therefore, \( q \) is an eigenvector of \( W \) with eigenvalue \( \lambda \).

2. **Stationary Distribution**:
   - By Claim 3, \( W \) has eigenvector \( D \cdot 1 \) (the vector of degrees), corresponding to eigenvalue 1.
   - The normalized walk matrix \( N \) has eigenvector \( D^{1/2} \cdot 1 \), also with eigenvalue 1.

---

## Conclusion
Lazy random walks introduce a probability of staying at the current vertex, which effectively breaks periodicity in the graph. The normalized matrices \( N \) and \( N' \) simplify the analysis and provide useful properties such as shared eigenvalues and eigenvectors with the original matrices \( W \) and \( W' \).