## Multi-layer perceptron

### Theoritical reminder: Differentiability

![image-20240925084024517](/home/yutao/.config/Typora/typora-user-images/image-20240925084024517.png)

如果存在一个线性且连续的映射 LxL_xLx，并且对于所有足够小的 h∈Eh \in Eh∈E（使得 x+h∈Ux + h \in Ux+h∈U），有以下关系成立：

f(x+h)=f(x)+Lx(h)+o(h)f(x + h) = f(x) + L_x(h) + o(h)f(x+h)=f(x)+Lx(h)+o(h)

这表示函数 fff 在点 xxx 是**可微的**。

公式的含义：

1. **f(x+h)f(x + h)f(x+h)**：这是函数 fff 在 x+hx + hx+h 点的值，表示我们沿着方向 hhh 移动时的函数值。
2. **f(x)f(x)f(x)**：这是函数 fff 在 xxx 点的值，表示原始点的函数值。
3. **Lx(h)L_x(h)Lx(h)**：这是一个线性近似，描述了从 xxx 移动到 x+hx + hx+h 时函数的线性变化部分。可以理解为 fff 在 xxx 点的**线性部分**。
4. **o(h)o(h)o(h)**：这是比 hhh 更小的项，表示当 h→0h \to 0h→0 时，o(h)∣h∣→0\frac{o(h)}{|h|} \to 0∣h∣o(h)→0。这些项代表了随着 hhh 变小而变得可以忽略的部分。

直观解释：

这个公式表明，函数 fff 在点 xxx 附近可以通过线性映射 LxL_xLx 来近似，再加上一些小的误差项（用 o(h)o(h)o(h) 表示）。这与经典微积分中可微性的概念类似，经典微分意味着一个函数在某点附近可以用其切线来近似，但在这里，它是向量空间之间的更广义的推广。





### Theoretical reminder: Jacobian function

![image-20240925084226655](/home/yutao/.config/Typora/typora-user-images/image-20240925084226655.png)

![image-20240925084500616](/home/yutao/.config/Typora/typora-user-images/image-20240925084500616.png)

![image-20240925084512498](/home/yutao/.config/Typora/typora-user-images/image-20240925084512498.png)



### Gradient Definition

![image-20240925084840570](/home/yutao/.config/Typora/typora-user-images/image-20240925084840570.png)

![image-20240925084831790](/home/yutao/.config/Typora/typora-user-images/image-20240925084831790.png)

Example: 

![image-20240925085848865](/home/yutao/.config/Typora/typora-user-images/image-20240925085848865.png)

<x|y> is the Scala product

Mapping this formula to the theory up here, we could find the <2x | a> is the <gradient_x_f | h>, so 2x here is the gradient



### Gradient in Differentiable Calculus

![image-20240925085944351](/home/yutao/.config/Typora/typora-user-images/image-20240925085944351.png)

![image-20240925090428202](/home/yutao/.config/Typora/typora-user-images/image-20240925090428202.png)



### Example: Perception

![image-20240925092551901](/home/yutao/.config/Typora/typora-user-images/image-20240925092551901.png)



![image-20240925092910036](/home/yutao/.config/Typora/typora-user-images/image-20240925092910036.png)

![image-20240925093502810](/home/yutao/.config/Typora/typora-user-images/image-20240925093502810.png)



### Gradient Descent Update Rule

![image-20240925093746427](/home/yutao/.config/Typora/typora-user-images/image-20240925093746427.png)

![image-20240925093753008](/home/yutao/.config/Typora/typora-user-images/image-20240925093753008.png)



### Multi-layer perception

![image-20240925094209220](/home/yutao/.config/Typora/typora-user-images/image-20240925094209220.png)



![image-20240925094317435](/home/yutao/.config/Typora/typora-user-images/image-20240925094317435.png)





### Piecewise-linear perceptions

![image-20240925094421784](/home/yutao/.config/Typora/typora-user-images/image-20240925094421784.png)



### Piecewise-linear perceptrons

![image-20240925094445490](/home/yutao/.config/Typora/typora-user-images/image-20240925094445490.png)



### Example: Learning XOR

![image-20240925094514890](/home/yutao/.config/Typora/typora-user-images/image-20240925094514890.png)

![image-20240925094602124](/home/yutao/.config/Typora/typora-user-images/image-20240925094602124.png)

![image-20240925094648116](/home/yutao/.config/Typora/typora-user-images/image-20240925094648116.png)

![image-20240925094658504](/home/yutao/.config/Typora/typora-user-images/image-20240925094658504.png)

## Deep feedforward networks

Building blocks of a deep feedforward network (or MLP):
	multiple consecutive linear layers (≥ 2)
	activation functions (hidden units) in between layers to introduce non-linearities
	optional output unit (activation)



### Activation functions

![image-20240925095458335](/home/yutao/.config/Typora/typora-user-images/image-20240925095458335.png)

![image-20240925095808231](/home/yutao/.config/Typora/typora-user-images/image-20240925095808231.png)

ReLU is now slowly being replaced by better alternatives...

![image-20240925095844451](/home/yutao/.config/Typora/typora-user-images/image-20240925095844451.png)





##  Cost functions

Architecture design
Choice of layers (MLP, CNN, RNN, attention (Transformer), GNN...)
Non-linearities
Cost function L
Minimize L with stochastic gradient-descent
	Train on a **training** dataset
	Estimate error on an **evaluation** dataset
	Gradient computation by backpropagation
Aiming for local minimum (or at least reducing training error), instead of global minimum.
	Deep neural networks have surprisingly good local & non-global optimum !



### Choice of cost function

![image-20240925100838925](/home/yutao/.config/Typora/typora-user-images/image-20240925100838925.png)

![image-20240925103838814](/home/yutao/.config/Typora/typora-user-images/image-20240925103838814.png)

### MLE and cross-entropy

![image-20240925104152601](/home/yutao/.config/Typora/typora-user-images/image-20240925104152601.png)

![image-20240925104703877](/home/yutao/.config/Typora/typora-user-images/image-20240925104703877.png)

![image-20240925104134967](/home/yutao/.config/Typora/typora-user-images/image-20240925104134967.png)

![image-20240925104318811](/home/yutao/.config/Typora/typora-user-images/image-20240925104318811.png)

### Cross-entropy in practice

![image-20240925104449828](/home/yutao/.config/Typora/typora-user-images/image-20240925104449828.png)





### Output units

![image-20240925104833148](/home/yutao/.config/Typora/typora-user-images/image-20240925104833148.png)

Changed to higher dimensions first, then get the output back to lower dimensions.



In the maximum likelihood estimation framework, we might apply activation functions to the output layer to get a desired structure for our distribution. This choice will also influence the mathematical form of the cost function. Examples:
	**Linear** units for regression
	**Linear** units for Gaussian distributions
	**Sigmoid** units for binary classification
	**Softmax** units for multi-class classification



![image-20240925105128382](/home/yutao/.config/Typora/typora-user-images/image-20240925105128382.png)

Linear output, without activation



![image-20240925105455768](/home/yutao/.config/Typora/typora-user-images/image-20240925105455768.png)

![image-20240925105718146](/home/yutao/.config/Typora/typora-user-images/image-20240925105718146.png)

max here is like Relu

min here is to Bound, to make w*h + b less than or equal to 1



### Sigmoid unit for binary classification

![image-20240925105910168](/home/yutao/.config/Typora/typora-user-images/image-20240925105910168.png)

![image-20240925110024583](/home/yutao/.config/Typora/typora-user-images/image-20240925110024583.png)



### Softmax unit for multi-class classification

![image-20240925110139754](/home/yutao/.config/Typora/typora-user-images/image-20240925110139754.png)

![image-20240925110214911](/home/yutao/.config/Typora/typora-user-images/image-20240925110214911.png)

![image-20240925110723260](/home/yutao/.config/Typora/typora-user-images/image-20240925110723260.png)

for multi-label classification, the activation function is applied sigmoid elemental wise



## Architecture and theory

![image-20240925111049302](/home/yutao/.config/Typora/typora-user-images/image-20240925111049302.png)

![image-20240925111058183](/home/yutao/.config/Typora/typora-user-images/image-20240925111058183.png)



More common and recent types

![image-20240925111212577](/home/yutao/.config/Typora/typora-user-images/image-20240925111212577.png)



### Why deep neural networks?

![image-20240925111444604](/home/yutao/.config/Typora/typora-user-images/image-20240925111444604.png)





### Universal approximation theorem

![image-20240925111812723](/home/yutao/.config/Typora/typora-user-images/image-20240925111812723.png)

![image-20240925111906619](/home/yutao/.config/Typora/typora-user-images/image-20240925111906619.png)

![image-20240925111915942](/home/yutao/.config/Typora/typora-user-images/image-20240925111915942.png)



### No Free Lunch theorem

![image-20240925111950667](/home/yutao/.config/Typora/typora-user-images/image-20240925111950667.png)





### Why go deeper?

![image-20240925112147579](/home/yutao/.config/Typora/typora-user-images/image-20240925112147579.png)

![image-20240925112224495](/home/yutao/.config/Typora/typora-user-images/image-20240925112224495.png)

![image-20240925211156666](/home/yutao/.config/Typora/typora-user-images/image-20240925211156666.png)

![image-20240925211206517](/home/yutao/.config/Typora/typora-user-images/image-20240925211206517.png)

![image-20240925112309468](/home/yutao/.config/Typora/typora-user-images/image-20240925112309468.png)

![image-20240925112416393](/home/yutao/.config/Typora/typora-user-images/image-20240925112416393.png)

![image-20240925112430052](/home/yutao/.config/Typora/typora-user-images/image-20240925112430052.png)





### Hierarchical structure of depth

![image-20240925112601402](/home/yutao/.config/Typora/typora-user-images/image-20240925112601402.png)





## Gradient-based learning

### Optimization

![image-20240925112929547](/home/yutao/.config/Typora/typora-user-images/image-20240925112929547.png)

![image-20240925112941490](/home/yutao/.config/Typora/typora-user-images/image-20240925112941490.png)

![image-20240925113022201](/home/yutao/.config/Typora/typora-user-images/image-20240925113022201.png)



### Gradient

![image-20240925113123085](/home/yutao/.config/Typora/typora-user-images/image-20240925113123085.png)



### Gradient descent

![image-20240925113408404](/home/yutao/.config/Typora/typora-user-images/image-20240925113408404.png)

![image-20240925113419104](/home/yutao/.config/Typora/typora-user-images/image-20240925113419104.png)



### Stochastic gradient descent

![image-20240925113623557](/home/yutao/.config/Typora/typora-user-images/image-20240925113623557.png)

![image-20240925113632800](/home/yutao/.config/Typora/typora-user-images/image-20240925113632800.png)

![image-20240925113647355](/home/yutao/.config/Typora/typora-user-images/image-20240925113647355.png)

![image-20240925113823900](/home/yutao/.config/Typora/typora-user-images/image-20240925113823900.png)



### Backpropagating gradients

![image-20240925114204822](/home/yutao/.config/Typora/typora-user-images/image-20240925114204822.png)

![image-20240925114332236](/home/yutao/.config/Typora/typora-user-images/image-20240925114332236.png)

![image-20240925114341589](/home/yutao/.config/Typora/typora-user-images/image-20240925114341589.png)



### Forward-pass

![image-20240925114413444](/home/yutao/.config/Typora/typora-user-images/image-20240925114413444.png)

### Derivatives in computational graph

![image-20240925114500821](/home/yutao/.config/Typora/typora-user-images/image-20240925114500821.png)

![image-20240925114520131](/home/yutao/.config/Typora/typora-user-images/image-20240925114520131.png)

![image-20240925114533850](/home/yutao/.config/Typora/typora-user-images/image-20240925114533850.png)
