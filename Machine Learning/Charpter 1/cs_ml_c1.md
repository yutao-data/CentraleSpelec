# Chapter 1 - Deep Learning

## Evaluation

- Exams at the end of each speaker's classes: 50% (alone) 每个老师课程结束都有考试，以多项选择题形式考察，总共有五次考试，考试权重按课程数量来分布
- Project: 50% (groups of 2 or 3)
  Grades will take into account the quality of your presentation and report, how you tackled the task, and a bonus for performance.

![image-20240918090739558](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918090739558.png)



## Machine Learning Basics

### Linear Algebra

#### Notations

![image-20240918092523884](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092523884.png)

#### Vectors and matrices operations

![image-20240918092540030](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092540030.png)

#### Norms

![image-20240918092600795](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092600795.png)

#### Random Variables

![image-20240918092615278](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092615278.png)



### Probability

#### Probability Distribution

![image-20240918092632340](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092632340.png)

#### Marginal and Conditional Probabilities

![image-20240918092657698](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092657698.png)

#### Independance and Conditional Independance

![image-20240918092722810](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092722810.png)

#### Expectation, Variance and Covariance

![image-20240918092748878](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918092748878.png)



### Machine Learning

#### Objective

*A computer program is said to learn from experience E with respect to some **class of tasks T and performance measure P, if its performance at tasks in T,**as measured by P, improves with experience E.*



**Task T**: classification, regression, translation, generation, anomaly detection, ...

**Performance measure P**: specific to the tasks such as accuracy for classification. It is measured on a **test set**.

**Experience E**: two main categories supervised and unsupervised Supervised learning: a dataset of points associated with a label or a target Unsupervised learning: a dataset of points without labels or targets



#### Mathematically

![image-20240918093156875](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918093156875.png)



#### The capacity of a model

The main challenge of a machine learning model is **generalization** to unseen data estimated on *test* data after training on *training* data

**Overfitting** occurs when the gap between training error and test error is too large and **underfitting** when the training error is too low

The **capacity** of a model is the range of functions it is able to learn and control how likely the model can overfit or underfit



#### Curse of Dimensionality

![image-20240918093501613](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918093501613.png)



#### Estimators

![image-20240918093709169](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918093709169.png)



#### Maximum Likelihood Estimation

![image-20240918094417870](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918094417870.png)



### Unsupervised Machine learning: Data Visualisation and Clustering



#### Common Characteristics for Data

**Redundancy:** Original dimensions of the data are often higher than what is needed

**Clusterable data**: Groups can be defined to describe the input data

**Structured data**: Data can follow a given structure (Shape, Manifold etc...)



#### Projection through PCA(Principal Component Analysis

![image-20240918101114022](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918101114022.png)

![image-20240918101528198](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918101528198.png)



PCA as a constraint problem

![image-20240918101710553](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918101710553.png)

![image-20240918101720021](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918101720021.png)

![image-20240918102002180](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918102002180.png)

We can repeat this process, adding the orthogonality constraint d time

Or, using the spectral theorem, we know that *σ*, being a positive-semidefinite matrix, has d orthonormal eigenvectors, with d the number of nonnull eigenvalues.



**PCA computation: summary**

Center data (Why?)

Use singular value decomposition on *X**T* *X*, which will give you eigenvalues and associated eigenvectors.

Ordere the eigen vector w.r. the eigenvalues (from highest to lowest), and project the centered data on the d first eigenvectors



**PCA limitations**

Performs linear transformations on the data (linear projection)

Mean of the data and covariance matrix are supposed to be enough to reduce dimensionality

Assume that large variance is an interest criterion



#### Kernel PCA

使用Kernel把数据升维，来发现更多的高维特征，之后把数据恢复维度

![image-20240918102516017](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918102516017.png)

**Kernel PCA: quick theoretical summary**

![image-20240918103115903](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918103115903.png)

**特征空间映射**：通过 φ(x)\varphi(x)φ(x) 将数据从原始空间映射到高维空间。

**协方差矩阵**：在特征空间中构建协方差矩阵 Σ\SigmaΣ，它表示高维空间中数据点的相关性。

**特征值问题**：通过求解 Σu=λu\Sigma u = \lambda uΣu=λu，找到主成分方向 uuu。

**核方法简化计算**：通过核函数 k(xi,xj)k(x_i, x_j)k(xi,xj) 来避免显式构造映射 φ(x)\varphi(x)φ(x)，直接在低维空间中进行高维空间的计算。



**Kernel PCA: quick theoretical summary**

![image-20240918103457834](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918103457834.png)

**核矩阵 K\mathbf{K}K**：通过核函数计算的数据点之间的相似性矩阵。

**特征值问题**：通过求解 Kα=λ(n−1)α\mathbf{K} \alpha = \lambda(n-1) \alphaKα=λ(n−1)α，找到核矩阵的特征值和特征向量。

**归一化**：确保特征向量满足单位长度的约束，通过除以特征值 ci=λi(n−1)c_i = \lambda_i(n-1)ci=λi(n−1) 完成。

**投影计算**：通过核函数和特征向量计算样本在特征空间中的分量。



**Kernel PCA: which kernel function to use?**

![image-20240918103658400](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918103658400.png)

Mercier’s condition is a criterion used in plasma physics to ensure the stability of a plasma in a magnetic confinement system by evaluating the balance between pressure and magnetic field curvature.

在这里，Mercier条件提到了核函数 k 必须满足的一个条件，即核矩阵 K\mathbf{K}K 必须是**半正定**（semi-definite positive）。这意味着，对于任意输入数据，核矩阵 K\mathbf{K}K 的所有特征值都必须是非负的。这个条件保证了核PCA（或其他核方法）能够正确运行。

Mercier条件原本出现在等离子体物理中，但在这里被类比用于机器学习领域，表明核矩阵必须满足某些数学上的稳定性条件。



**Other Projections approaches: t-SNE and UMAP**

![image-20240918104539108](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918104539108.png)



#### **Clustering Algorithms : K-means**

![image-20240918104609903](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918104609903.png)



### Deep Neural Networks

#### Perceptron

![image-20240918104740332](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918104740332.png)

**Gradient Descent for Perceptron**

![image-20240918104951921](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918104951921.png)



**Perceptron limitation**

A perceptron cannot separate non linear data



**Percepton limitations mitigation : Adaboost**

Let’s *{**h**}* be a set of perceptions (weeak classifiers), *H* = *sign*( P (*h*(*x*)), we want to find the right h to get the best H possible.

这个问题讨论的是通过 **Adaboost** 来缓解感知机（Perceptron）模型的局限性。

### 解释：

- **{h}** 表示一组弱分类器，感知机是其中一个例子。这些弱分类器单独效果较差，但可以组合起来。
- **H = sign(∑ h(x))** 是通过对多个弱分类器的输出进行加权组合，形成最终的强分类器 HHH。通过计算各个弱分类器的结果 h(x)h(x)h(x)，然后求其符号得到最终分类结果。
- **Adaboost** 的目标是通过迭代加权，找到合适的弱分类器 hhh，使得组合后的强分类器 HHH 达到最优的分类性能。

Adaboost 通过加大对错误分类样本的权重，逐步提高整体分类性能，从而缓解感知机单一模型的局限性。



**Adaboost Algorithm**

![image-20240918105232398](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918105232398.png)

**Adaboost** 是一种迭代算法，通过组合多个弱分类器来形成一个强分类器。每一轮迭代中，Adaboost 选择一个错误率最小的弱分类器，并给它分配一个权重 αt\alpha_tαt。同时，根据当前分类器的表现，调整样本的权重分布，使得下一轮更加关注当前分类错误的样本。

这样，强分类器 FTF_TFT 是所有弱分类器的加权组合，可以显著提高分类性能。



**Updating parameters**

![image-20240918105409265](C:\Users\cyt\AppData\Roaming\Typora\typora-user-images\image-20240918105409265.png)

αt 决定了每个弱分类器在最终强分类器中的权重，错误率低的分类器权重大，错误率高的分类器权重小。

wt+1w_{t+1}wt+1 更新样本权重，错误分类的样本权重增加，以便让下一轮更加关注这些分类错误的样本。

Zt+1Z_{t+1}Zt+1 是一个归一化因子，确保权重之和为 1。
