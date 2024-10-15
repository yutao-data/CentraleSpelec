# Chapter 3

## Optimization

### Reminder scalar product (also called dot product and inner product)

![image-20241002103030882](/home/yutao/.config/Typora/typora-user-images/image-20241002103030882.png)



### Backpropagating gradients

![image-20241002103147012](/home/yutao/.config/Typora/typora-user-images/image-20241002103147012.png)



### Chain rule

![image-20241002103315020](/home/yutao/.config/Typora/typora-user-images/image-20241002103315020.png)



### Back-propagation

![image-20241002103336754](/home/yutao/.config/Typora/typora-user-images/image-20241002103336754.png)

### Forward-pass

![image-20241002103516725](/home/yutao/.config/Typora/typora-user-images/image-20241002103516725.png)



### Derivatives in computational graph

![image-20241002103627558](/home/yutao/.config/Typora/typora-user-images/image-20241002103627558.png)



### Derivatives in computational graph

![image-20241002103702976](/home/yutao/.config/Typora/typora-user-images/image-20241002103702976.png)

- **问题**：直接计算所有路径的偏导数会导致计算量迅速增加，难以处理。
- **简化**：通过因式分解，我们可以将多个路径的计算简化为每个节点的贡献。
- **正向模式**和**反向模式**：通过不同的顺序遍历计算图，这两种方法都只需要沿着每个节点进行一次传播计算，从而大大简化了偏导数的计算。

这张图展示的核心思想是：通过因式分解和选择合适的微分模式，偏导数计算可以变得更加高效，尤其是在复杂的计算图中。

### Why backpropagation?

![image-20241002103721263](/home/yutao/.config/Typora/typora-user-images/image-20241002103721263.png)



### Reminder: why optimization?

![image-20241002104042590](/home/yutao/.config/Typora/typora-user-images/image-20241002104042590.png)



### Optimization versus learning

![image-20241002104446945](/home/yutao/.config/Typora/typora-user-images/image-20241002104446945.png)





### Problems of gradient-descent

![image-20241002104507141](/home/yutao/.config/Typora/typora-user-images/image-20241002104507141.png)



### Problems of deep neural networks

![image-20241002105326594](/home/yutao/.config/Typora/typora-user-images/image-20241002105326594.png)





### Solving bad convergence

![image-20241002105432801](/home/yutao/.config/Typora/typora-user-images/image-20241002105432801.png)



#### Gradient clipping

![image-20241002105457182](/home/yutao/.config/Typora/typora-user-images/image-20241002105457182.png)

![image-20241002105704907](/home/yutao/.config/Typora/typora-user-images/image-20241002105704907.png)



#### Momentum

![image-20241002110529185](/home/yutao/.config/Typora/typora-user-images/image-20241002110529185.png)

![image-20241002111123670](/home/yutao/.config/Typora/typora-user-images/image-20241002111123670.png)

动量梯度下降法通过引入动量项，使得参数更新更加平滑和高效，是一种非常常用的优化算法，广泛应用于深度学习等领域。



#### SGD with Nesterov Momentum

![image-20241002111219450](/home/yutao/.config/Typora/typora-user-images/image-20241002111219450.png)

**形象比喻：**

想象你在下坡，普通的动量法就像你闭着眼睛往前冲，可能会冲过头或者冲不到位。而Nesterov动量法就像你睁开眼睛，先看一眼前方，然后调整方向，这样就能更准确地到达谷底。



### Learning rate

![image-20241002111238154](/home/yutao/.config/Typora/typora-user-images/image-20241002111238154.png)





#### Heuristics for learning rate

![image-20241002111814313](/home/yutao/.config/Typora/typora-user-images/image-20241002111814313.png)

![image-20241002112645118](/home/yutao/.config/Typora/typora-user-images/image-20241002112645118.png)



#### Cyclical learning rate

![image-20241002112709012](/home/yutao/.config/Typora/typora-user-images/image-20241002112709012.png)

![image-20241002112720538](/home/yutao/.config/Typora/typora-user-images/image-20241002112720538.png)





#### Super convergence with one-cycle policy

![image-20241002113157490](/home/yutao/.config/Typora/typora-user-images/image-20241002113157490.png)





### SGD with adaptive learning rates

![image-20241002113249023](/home/yutao/.config/Typora/typora-user-images/image-20241002113249023.png)





#### AdaGrad

![image-20241002113310099](/home/yutao/.config/Typora/typora-user-images/image-20241002113310099.png)



#### RMSProp

![image-20241002113439896](/home/yutao/.config/Typora/typora-user-images/image-20241002113439896.png)



### Adam

![image-20241002113911673](/home/yutao/.config/Typora/typora-user-images/image-20241002113911673.png)





### Comparison of modern optimizers

![image-20241002113902232](/home/yutao/.config/Typora/typora-user-images/image-20241002113902232.png)













## Initialization and normalization

### Weight initialization

![image-20241002114144108](/home/yutao/.config/Typora/typora-user-images/image-20241002114144108.png)

![image-20241002114156810](/home/yutao/.config/Typora/typora-user-images/image-20241002114156810.png)

**Xavier initialization** is a popular technique used in neural networks to initialize the weights of layers. Its primary goal is to keep the variance of the activations in each layer roughly constant during training. This helps prevent the vanishing gradient problem, where gradients become too small and the network struggles to learn.

Key Points:

```
W_ij ~ U(-√(6 / (n_i + n_{i+1})), √(6 / (n_i + n_{i+1})))
```

where:

- `W_ij`: Weight between neuron i in the previous layer and neuron j in the current layer
- `n_i`: Number of input neurons to the layer
- `n_{i+1}`: Number of output neurons from the layer







### Input normalization

![image-20241002114540337](/home/yutao/.config/Typora/typora-user-images/image-20241002114540337.png)



### Batch normalization

![image-20241002114556615](/home/yutao/.config/Typora/typora-user-images/image-20241002114556615.png)

![image-20241002114855238](/home/yutao/.config/Typora/typora-user-images/image-20241002114855238.png)

![image-20241002114905885](/home/yutao/.config/Typora/typora-user-images/image-20241002114905885.png)



## Regularization

### Generalization and over-fitting

![image-20241002095113056](/home/yutao/.config/Typora/typora-user-images/image-20241002095113056.png)

### Preventing overfitting

![image-20241002095152750](/home/yutao/.config/Typora/typora-user-images/image-20241002095152750.png)









### L2 Regularization

![image-20241002095623562](/home/yutao/.config/Typora/typora-user-images/image-20241002095623562.png)

#### L2 regularization (Ridge)

![image-20241002095819268](/home/yutao/.config/Typora/typora-user-images/image-20241002095819268.png)





### L1 regularization

![image-20241002101959986](/home/yutao/.config/Typora/typora-user-images/image-20241002101959986.png)





### L2 vs L1 regularization

![image-20241002102014552](/home/yutao/.config/Typora/typora-user-images/image-20241002102014552.png)





### Early stopping

![image-20241002102032885](/home/yutao/.config/Typora/typora-user-images/image-20241002102032885.png)

![image-20241002102044044](/home/yutao/.config/Typora/typora-user-images/image-20241002102044044.png)







### Dropout

![image-20241002102157657](/home/yutao/.config/Typora/typora-user-images/image-20241002102157657.png)

![image-20241002102210106](/home/yutao/.config/Typora/typora-user-images/image-20241002102210106.png)

![image-20241002102219450](/home/yutao/.config/Typora/typora-user-images/image-20241002102219450.png)

![image-20241002102428548](/home/yutao/.config/Typora/typora-user-images/image-20241002102428548.png)







### Data augmentation

![image-20241002102448039](/home/yutao/.config/Typora/typora-user-images/image-20241002102448039.png)





### Mixup

![image-20241002102635413](/home/yutao/.config/Typora/typora-user-images/image-20241002102635413.png)







## Vanishing gradient

![image-20241002102735814](/home/yutao/.config/Typora/typora-user-images/image-20241002102735814.png)

![image-20241002102902223](/home/yutao/.config/Typora/typora-user-images/image-20241002102902223.png)

![image-20241002102959251](/home/yutao/.config/Typora/typora-user-images/image-20241002102959251.png)





### Residual networks

![image-20241002103020148](/home/yutao/.config/Typora/typora-user-images/image-20241002103020148.png)



### Stochastic depth

![image-20241002103103762](/home/yutao/.config/Typora/typora-user-images/image-20241002103103762.png)





## Double descent

### Deep double descent

![image-20241002103139780](/home/yutao/.config/Typora/typora-user-images/image-20241002103139780.png)

![image-20241002103225975](/home/yutao/.config/Typora/typora-user-images/image-20241002103225975.png)



### Grokking

![image-20241002103300964](/home/yutao/.config/Typora/typora-user-images/image-20241002103300964.png)





### Deep learning in practice

### Hardware

![image-20241002103403697](/home/yutao/.config/Typora/typora-user-images/image-20241002103403697.png)

![image-20241002103434386](/home/yutao/.config/Typora/typora-user-images/image-20241002103434386.png)







### Hardware Transfer

![image-20241002103541170](/home/yutao/.config/Typora/typora-user-images/image-20241002103541170.png)

Data transfer from Hard Disk to RAM, from RAM to VRAM, could be a very obvious bottle neck





![image-20241002103659444](/home/yutao/.config/Typora/typora-user-images/image-20241002103659444.png)



![image-20241002103747905](/home/yutao/.config/Typora/typora-user-images/image-20241002103747905.png)

dataloader = DataLoader(dataset, batch_size=16, shuffle=True, num_workers=2)

**DataLoader**：PyTorch提供的一个用于加载数据的类，可以将数据集分割成小批量，方便训练。

**dataset**：用户自定义的数据集。

**batch_size**：每个batch的大小，这里设置为16。

**shuffle**：是否在每个epoch打乱数据顺序。

**num_workers**：用于加载数据的子进程数量。



![image-20241002103911651](/home/yutao/.config/Typora/typora-user-images/image-20241002103911651.png)![image-20241002103924180](/home/yutao/.config/Typora/typora-user-images/image-20241002103924180.png)



























