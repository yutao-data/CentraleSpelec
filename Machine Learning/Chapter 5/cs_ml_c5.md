# Deep Learning

## Generative modeling

### Quick Introduction of Attention

![image-20241016084848898](/home/yutao/.config/Typora/typora-user-images/image-20241016084848898.png)

在注意力（Attention）机制中，模型能够聚焦输入的不同部分，并给予它们不同的权重，从而增强对重要信息的捕捉。这一机制的关键在于**自注意力**（self-attention）或**点积注意力**（dot-product attention），其主要工作原理如下：

1. **Query、Key 和 Value**：
   - 输入序列中的每一个词都会通过线性变换生成三个向量：Query、Key 和 Value。Query用于查询相关性，Key用于与Query匹配，Value是最终需要加权平均的值。
2. **计算注意力分数**：
   - 对于每个词，它的Query向量会与序列中其他词的Key向量进行点积运算，计算它们之间的相似度。这个点积值越大，表示两个词之间的关联性越强。然后对这些点积值进行缩放，并通过softmax函数将它们转化为一个概率分布。这使得每个词都对其他词的关注度被量化为一个权重值。
3. **加权求和**：
   - 计算出的注意力权重将会作用于每个词的Value向量，最终得到一个加权求和的结果，代表该词在当前上下文中的新表示。这样，模型可以根据不同词的相关性，动态地选择对哪些词更加关注。
4. **多头注意力机制**：
   - 在实际应用中，注意力机制通常通过多头注意力（multi-head attention）来实现。多个头分别执行独立的注意力操作，捕捉不同维度的特征，最后将这些头的结果拼接起来以获得更加丰富的信息。

通过这些步骤，注意力机制允许模型对输入的不同部分根据它们的重要性进行聚焦，确保模型在处理每一个输入时都能够综合考虑其他相关输入的影响。

### Supervised vs Unsupervised learning

![image-20241016085715794](/home/yutao/.config/Typora/typora-user-images/image-20241016085715794.png)

![image-20241016085720771](/home/yutao/.config/Typora/typora-user-images/image-20241016085720771.png)

![image-20241016085727654](/home/yutao/.config/Typora/typora-user-images/image-20241016085727654.png)

![image-20241016085733979](/home/yutao/.config/Typora/typora-user-images/image-20241016085733979.png)

![image-20241016085742984](/home/yutao/.config/Typora/typora-user-images/image-20241016085742984.png)

![image-20241016085749413](/home/yutao/.config/Typora/typora-user-images/image-20241016085749413.png)

![image-20241016085755360](/home/yutao/.config/Typora/typora-user-images/image-20241016085755360.png)

![image-20241016085803089](/home/yutao/.config/Typora/typora-user-images/image-20241016085803089.png)

![image-20241016085808536](/home/yutao/.config/Typora/typora-user-images/image-20241016085808536.png)

### Discriminative vs Generative models

![image-20241016085818714](/home/yutao/.config/Typora/typora-user-images/image-20241016085818714.png)

![image-20241016090020608](/home/yutao/.config/Typora/typora-user-images/image-20241016090020608.png)

![image-20241016090152470](/home/yutao/.config/Typora/typora-user-images/image-20241016090152470.png)

![image-20241016090355598](/home/yutao/.config/Typora/typora-user-images/image-20241016090355598.png)

![image-20241016090413147](/home/yutao/.config/Typora/typora-user-images/image-20241016090413147.png)

在机器学习和统计学中，**判别模型（Discriminative Model）**和**生成模型（Generative Model）**是两种常见的模型类别，它们的主要区别在于学习目标和如何建模数据的关系。

1. 判别模型（Discriminative Model）

**判别模型**的目标是直接学习**输入数据 XXX** 和 **输出标签 YYY** 之间的条件概率分布 P(Y∣X)P(Y|X)P(Y∣X)。**

- **任务：** 分类任务是常见应用，比如给定一张图片，判别模型直接学习如何将图片分类为“猫”或“狗”。

- **核心思想：** 判别模型直接学习决策边界，它不需要理解或生成数据本身的结构，只需要关注输入特征如何与目标标签相关。

- **例子：**

  - **逻辑回归（Logistic Regression）**
  - **支持向量机（SVM, Support Vector Machine）**
  - **神经网络（Neural Networks）**

  **优点：**

  - 模型复杂度较低，因为只需要直接学习输入与输出之间的关系。
  - 在分类任务中通常表现较好，尤其是当我们不关心数据本身的生成过程。

  **缺点：**

  - 无法生成新数据，只能进行分类或预测。

2. 生成模型（Generative Model）

**生成模型的目标是学习数据的联合分布 P(X,Y)P(X, Y)P(X,Y)，然后通过贝叶斯法则推导出条件概率 P(Y∣X)P(Y|X)P(Y∣X)。**

- **任务：** 它不仅能够用于分类任务，还能生成与数据分布一致的新数据。例如，给定一些样本图像，生成模型可以生成新的相似图片。

- **核心思想：** 生成模型通过建模数据的生成过程（如何从特定类别生成数据），来推导出输入与输出之间的关系。它首先建模输入数据的分布 P(X)P(X)P(X)，以及给定类别标签的条件分布 P(X∣Y)P(X|Y)P(X∣Y)，然后通过贝叶斯法则计算 P(Y∣X)P(Y|X)P(Y∣X)。

- **例子：**

  - **朴素贝叶斯（Naive Bayes）**
  - **隐马尔可夫模型（HMM, Hidden Markov Model）**
  - **生成对抗网络（GAN, Generative Adversarial Network）**
  - **变分自编码器（VAE, Variational Autoencoder）**

  **优点：**

  - 能够生成新数据。生成模型不只关注分类，还能用于数据生成（如图像生成、文本生成等）。
  - 能够处理缺失数据，因为生成模型建模了整个数据的联合分布。

  **缺点：**

  - 训练更复杂，因为需要建模整个数据分布，而不仅仅是决策边界。
  - 在纯分类任务中，可能不如判别模型有效率。

总结：

- **判别模型**：直接建模 P(Y∣X)P(Y|X)P(Y∣X)，关注输入与输出的关系，更适合分类任务，模型简单，但不能生成数据。
- **生成模型**：建模 P(X,Y)P(X, Y)P(X,Y)，通过数据生成过程理解数据结构，既能分类，也能生成数据，适用更广，但训练复杂。

两种模型的使用取决于具体的任务需求。如果你仅仅关心分类性能，判别模型可能更有效；而如果你想理解数据背后的生成过程或生成新数据，生成模型更合适。





### Types of generative models

![image-20241016090530166](/home/yutao/.config/Typora/typora-user-images/image-20241016090530166.png)























## Variational Autoencoders

### Autoencoders

![image-20241016091209348](/home/yutao/.config/Typora/typora-user-images/image-20241016091209348.png)

![image-20241016091326230](/home/yutao/.config/Typora/typora-user-images/image-20241016091326230.png)

![image-20241016091339542](/home/yutao/.config/Typora/typora-user-images/image-20241016091339542.png)

**为什么往低维空间encoder,而不是去高维空间,高维空间不是更好分别图形和噪声吗**

在降维与高维映射之间的选择上，**编码到低维空间**是自编码器和其他降维技术的核心，因为它有助于更好地**压缩信息**并**捕捉数据的本质结构**。虽然高维空间在某些情况下可能有助于将数据线性可分，但直接往高维空间编码并不一定是解决复杂问题的最优方法。让我们具体解释为什么自编码器选择低维空间，而不是高维空间来区分图形和噪声。

1. **低维空间捕捉本质特征**：

- **降维的核心目标**是去除冗余信息，保留数据中最具代表性的特征。很多高维数据（例如图像、声音、文本等）本质上存在大量的冗余和噪声。如果编码到高维空间，反而可能会引入不必要的复杂度，增加冗余性，并无法去除噪声。
- **低维空间**能够迫使模型学会只保留输入数据中最关键的模式和结构，即数据的核心特征。在低维空间中表示数据，可以去除噪声或不相关的信息。

2. **过拟合问题和泛化能力**：

- 如果直接将数据映射到更高维的空间，模型很可能会**过拟合**，即它会记住训练数据的细节，包括噪声和不重要的特征。在高维空间中，模型有更大的自由度来拟合数据，但这也意味着模型可能会将噪声作为有意义的模式去学习，从而在新数据上表现不佳。
- 低维表示强迫模型在数据之间找到共性和模式，这使得模型在应对新数据时有更强的**泛化能力**。

3. **低维空间能够简化数据结构**：

- 在很多复杂的数据中，虽然数据原始维度很高，但数据实际可以被有效地表示为更低维的**流形（manifold）**。自编码器通过将数据压缩到低维空间，能够更好地揭示这些隐藏的低维结构。比如，在图像数据中，虽然每张图像可能有数百万个像素，但这些图像通常可以由少数几个潜在因素（如颜色、形状、物体位置）来解释。
- 通过**潜在空间**（latent space）的低维表示，自编码器不仅能压缩数据，还能帮助理解数据背后的生成过程。

4. **噪声往往是高维的**：

- **噪声**通常分布在数据的高维空间中，且不具备与数据相同的内在结构。因此，编码到低维空间能有效减少噪声的影响。通过降维，自编码器可以剔除数据中与噪声相关的高维信息，保留有意义的特征。事实上，这也是**去噪自编码器（Denoising Autoencoder）**的工作原理：通过学习数据的核心结构，自编码器可以将噪声过滤掉。

5. **高维空间的诅咒（Curse of Dimensionality）**：

- **高维空间的诅咒**指的是在高维空间中，数据的稀疏性和距离计算变得不再有效。随着维度增加，数据点之间的距离差异趋向变小，使得区分不同数据类别更加困难。
- 当数据被编码到一个非常高的维度时，模型可能无法有效地区分数据中的模式和噪声，反而导致性能下降。相反，通过将数据压缩到低维空间，可以减轻高维空间带来的这些问题。

6. **高维映射和核方法**：

- 你提到的“高维空间可能更好地区分图形和噪声”的观点其实源自一些**核方法**，例如支持向量机（SVM）中的核技巧。核方法通过隐式地将数据映射到更高维空间，在这个高维空间中使数据线性可分。
- 然而，这与自编码器的目标不同。核方法使用高维映射来获得线性分离性，而自编码器的目标是通过降低维度发现数据的简洁表示并去除噪声。因此，尽管高维映射在某些情况下有优势，但对于自编码器的降维和重构任务而言，低维空间更加有效。

7. **自编码器与PCA的相似性**：

- 自编码器在本质上类似于一种非线性版本的**主成分分析（PCA）**。PCA的核心目标就是通过将数据投影到低维空间上，捕捉数据中主要的变化模式。自编码器通过引入非线性激活函数，能够捕捉更多的复杂结构，但仍然共享降维的目标——压缩数据，去除冗余信息。

总结：

- **高维空间并不总是有利于区分图形和噪声**，尤其在噪声广泛存在且数据结构复杂的情况下。相反，自编码器通过编码到低维空间，可以更有效地提取数据的核心特征，减少噪声影响，并避免过拟合问题。
- **低维空间**使模型能够更好地泛化，并简化数据中的模式，从而提高自编码器的重构能力，去除无关信息或噪声。这也是为什么自编码器选择将数据压缩到低维，而不是往高维空间编码的原因。





#### Non-linear Dimension Reduction

![image-20241016090551940](/home/yutao/.config/Typora/typora-user-images/image-20241016090551940.png)



#### Autoencoders and PCA

![image-20241016090617214](/home/yutao/.config/Typora/typora-user-images/image-20241016090617214.png)

这张图片展示了**自编码器（Autoencoder）**和**主成分分析（PCA）**之间的关系，重点解释了在某些情况下，自编码器的重构过程与PCA相似。具体解释如下：

1. **自编码器的重构**：
   - 公式 yk(x,w)y_k(x, \mathbf{w})yk(x,w) 表示自编码器对输入 xxx 的重构。
   - 自编码器包含两组权重：
     - w(1)w^{(1)}w(1)：隐藏层的权重。
     - w(2)w^{(2)}w(2)：重构层的权重。
   - 输入 xix_ixi 通过隐藏层的激活函数 σ\sigmaσ，然后结果与 w(2)w^{(2)}w(2) 结合，在输出层进行重构以近似原始输入。
2. **重构误差**：
   - 自编码器的目标是最小化重构误差 E(w)E(\mathbf{w})E(w)。这个误差表示原始输入 xnx_nxn 和它的重构 y(xn,w)y(x_n, \mathbf{w})y(xn,w) 之间的差异。
   - 通过调整网络的权重参数 w\mathbf{w}w，我们可以使误差最小化。
3. **线性自编码器与PCA**：
   - 如果自编码器的隐藏层和输出层都是线性的，自编码器的隐藏单元将学到数据的线性函数，并最小化平方误差。
   - 当自编码器的隐藏单元数为 MMM 时，它们所跨的空间与PCA前 MMM 个主成分所跨的空间相同。

换句话说，在特定的线性条件下，自编码器的行为和PCA是等价的，它们都试图通过捕捉数据中的主要变化方向来进行简化和重构。



### Deep Autoencoders

![image-20241016090811311](/home/yutao/.config/Typora/typora-user-images/image-20241016090811311.png)



#### Geometrical Interpretation

![image-20241016090905994](/home/yutao/.config/Typora/typora-user-images/image-20241016090905994.png)



#### Deep Autoencoders

![image-20241016090956712](/home/yutao/.config/Typora/typora-user-images/image-20241016090956712.png)

![image-20241016091030769](/home/yutao/.config/Typora/typora-user-images/image-20241016091030769.png)



#### Class Structure of the Data

![image-20241016091654457](/home/yutao/.config/Typora/typora-user-images/image-20241016091654457.png)



#### Autoencoders: Summary

![image-20241016091709751](/home/yutao/.config/Typora/typora-user-images/image-20241016091709751.png)



#### Issues with (deterministic) Autoencoders

![image-20241016091730259](/home/yutao/.config/Typora/typora-user-images/image-20241016091730259.png)

![image-20241016091737515](/home/yutao/.config/Typora/typora-user-images/image-20241016091737515.png)

![image-20241016091743595](/home/yutao/.config/Typora/typora-user-images/image-20241016091743595.png)





### Variational Autoencoders

![image-20241016092006048](/home/yutao/.config/Typora/typora-user-images/image-20241016092006048.png)

![image-20241016092031235](/home/yutao/.config/Typora/typora-user-images/image-20241016092031235.png)

这张图片解释了**变分自编码器（VAE, Variational Autoencoder）**的核心思想，重点阐述了VAE与标准自编码器的区别，特别是在编码方式上的差异。以下是对图片内容的详细解释：
1. 均值 μμ 和标准差 σσ：

    在变分自编码器中，编码器输出的并不是一个确定的点（如标准自编码器中的隐含表示），而是一个概率分布，具体来说是一个正态分布。
    均值 μμ 控制了输入编码在潜在空间中的位置（即表示的中心）。它表示数据在潜在空间中被映射到哪里。
    标准差 σσ 控制了这个编码的变化范围，表示从该分布中采样的编码可以有多大的偏差。

2. 随机采样：

    在变分自编码器中，编码器输出一个高斯分布的均值 μμ 和标准差 σσ，接着从这个分布中随机采样一个点作为潜在变量 zz，然后再输入到解码器进行重构。
    这种随机采样的过程使得同一个输入每次可能会生成不同的编码，但这些编码都来自于同一个高斯分布，确保了潜在空间的连续性和生成能力。

3. 与标准自编码器的区别：

    标准自编码器：直接将输入映射到潜在空间中的一个确定的点，编码是确定的。因此，标准自编码器在重构时，所有输入都会被映射到单个精确的编码。
    变分自编码器：则是通过分布进行编码。解码器从这个分布的不同点采样，能够学习到附近的点都指向相同的输入，这使得潜在空间在生成新数据时具有更好的连续性和一致性。

4. 潜在空间的平滑性：

    由于变分自编码器通过编码一个高斯分布，潜在空间中相邻的点会指向相似的输入。这意味着在生成模型中，VAE能够更平滑地生成与训练数据相似的新数据。
    这有助于生成新样本时避免突然的、不连续的跳跃，从而提高生成的质量。

总结：

    **变分自编码器（VAE）**的核心是通过学习潜在变量的概率分布（而不是确定值），为生成模型提供更好的连续性和泛化能力。通过均值 μμ 控制编码的位置，标准差 σσ 控制编码的变化范围，VAE 能够从高斯分布中随机采样编码进行数据生成，保证潜在空间的平滑性。这种随机编码的方式与标准自编码器的直接编码有所不同。



#### VAE: Specifics

![image-20241016092253642](/home/yutao/.config/Typora/typora-user-images/image-20241016092253642.png)

这张图片详细解释了**变分自编码器（VAE）**的具体细节，特别是其背后的概率模型和近似推断方法。以下是对图片内容的解释：
1. 联合分布 p(x,z)p(x,z)：

    变分自编码器基于输入数据 xx 和潜在变量 zz 之间的联合分布 p(x,z)p(x,z)，这是模型生成数据的核心方式。
    该联合分布可以分解为先验分布 p(z)p(z) 和似然函数 p(x∣z)p(x∣z) 的乘积：
    p(x,z)=p(z)p(x∣z)
    p(x,z)=p(z)p(x∣z)
        先验分布 p(z)p(z)：这是潜在变量 zz 的假设分布，通常假设为标准正态分布 N(0,1)N(0,1)。
        似然函数 p(x∣z)p(x∣z)：给定潜在变量 zz，生成输入数据 xx 的条件概率。

2. 编码器 p(z∣x)p(z∣x)：

    编码器的目标是计算后验分布 p(z∣x)p(z∣x)，即给定输入 xx 之后的潜在变量 zz 的分布。根据贝叶斯公式，后验分布可以表示为：
    p(z∣x)=p(x,z)p(x)
    p(z∣x)=p(x)p(x,z)
    计算 p(x)p(x) 需要对 p(x∣z)p(x∣z) 和 p(z)p(z) 进行积分：
    p(x)=∫p(x∣z)p(z)dz
    p(x)=∫p(x∣z)p(z)dz 但由于这个积分对所有可能的 zz 来说是不可解的，直接求解 p(z∣x)p(z∣x) 是不可行的（即不可处理的）。

3. 近似推断：

    为了克服这个问题，VAE 引入了一个近似的推断分布 qϕ(z∣x)qϕ(z∣x)，用来近似 p(z∣x)p(z∣x)。其中，ϕϕ 是需要学习的参数。
    通过优化 qϕ(z∣x)qϕ(z∣x) 使其尽量接近真实的后验分布 p(z∣x)p(z∣x)，我们可以用 qϕ(z∣x)qϕ(z∣x) 来代替后验分布进行近似推断。

4. 目标是优化 qϕ(z∣x)qϕ(z∣x)：

    变分自编码器的主要任务是通过优化 qϕ(z∣x)qϕ(z∣x) 来使其尽量接近 p(z∣x)p(z∣x)，通常使用的是变分推断方法，借助**证据下界（ELBO）**来进行优化。

总结：

    VAE的模型基于数据 xx 和潜在变量 zz 的联合分布 p(x,z)p(x,z)，该分布可以分解为先验分布和似然函数。
    由于直接计算后验分布 p(z∣x)p(z∣x) 过于复杂，VAE引入了一个可学习的近似分布 qϕ(z∣x)qϕ(z∣x)，并通过优化使其尽可能接近真实后验分布。
    这种近似推断的思想使得VAE在实践中可行，并能生成新的数据样本。



![image-20241016092703367](/home/yutao/.config/Typora/typora-user-images/image-20241016092703367.png)

ELBO = Evidence lower bound

![image-20241016092811703](/home/yutao/.config/Typora/typora-user-images/image-20241016092811703.png)

![image-20241016092820731](/home/yutao/.config/Typora/typora-user-images/image-20241016092820731.png)

#### After VAE is trained

![image-20241016092925118](/home/yutao/.config/Typora/typora-user-images/image-20241016092925118.png)

#### Example: MNIST

![image-20241016092955856](/home/yutao/.config/Typora/typora-user-images/image-20241016092955856.png)

#### The Reparametrization Trick

![image-20241016093251834](/home/yutao/.config/Typora/typora-user-images/image-20241016093251834.png)

### Recap: Standard VAE

![image-20241016093510040](/home/yutao/.config/Typora/typora-user-images/image-20241016093510040.png)

### Amortized Inference

![image-20241016093703123](/home/yutao/.config/Typora/typora-user-images/image-20241016093703123.png)

![image-20241016093717795](/home/yutao/.config/Typora/typora-user-images/image-20241016093717795.png)

### VAE vs Amortized VAE Pipeline

![image-20241016093815759](/home/yutao/.config/Typora/typora-user-images/image-20241016093815759.png)

![image-20241016093927437](/home/yutao/.config/Typora/typora-user-images/image-20241016093927437.png)

![image-20241016093941872](/home/yutao/.config/Typora/typora-user-images/image-20241016093941872.png)

### Standard vs Amortized VAE

![image-20241016094059325](/home/yutao/.config/Typora/typora-user-images/image-20241016094059325.png)

#### Example: MNIST

![image-20241016094114550](/home/yutao/.config/Typora/typora-user-images/image-20241016094114550.png)

![image-20241016094136274](/home/yutao/.config/Typora/typora-user-images/image-20241016094136274.png)

### MNIST: Autoencoder vs VAE

![image-20241016094158023](/home/yutao/.config/Typora/typora-user-images/image-20241016094158023.png)











## Generative Adversarial Networks

### Implicit Generative Models

![image-20241016094406922](/home/yutao/.config/Typora/typora-user-images/image-20241016094406922.png)

![image-20241016094632650](/home/yutao/.config/Typora/typora-user-images/image-20241016094632650.png)

![image-20241016094422766](/home/yutao/.config/Typora/typora-user-images/image-20241016094422766.png)

![image-20241016094440663](/home/yutao/.config/Typora/typora-user-images/image-20241016094440663.png)

![image-20241016094648405](/home/yutao/.config/Typora/typora-user-images/image-20241016094648405.png)

### Generative Adversarial Networks

![image-20241016094732052](/home/yutao/.config/Typora/typora-user-images/image-20241016094732052.png)

![image-20241016094827520](/home/yutao/.config/Typora/typora-user-images/image-20241016094827520.png)

![image-20241016094836755](/home/yutao/.config/Typora/typora-user-images/image-20241016094836755.png)

![image-20241016094929213](/home/yutao/.config/Typora/typora-user-images/image-20241016094929213.png)

![image-20241016094947410](/home/yutao/.config/Typora/typora-user-images/image-20241016094947410.png)

![image-20241016095136912](/home/yutao/.config/Typora/typora-user-images/image-20241016095136912.png)

![image-20241016095242006](/home/yutao/.config/Typora/typora-user-images/image-20241016095242006.png)

![image-20241016095258543](/home/yutao/.config/Typora/typora-user-images/image-20241016095258543.png)

![image-20241016095316771](/home/yutao/.config/Typora/typora-user-images/image-20241016095316771.png)

![image-20241016095333986](/home/yutao/.config/Typora/typora-user-images/image-20241016095333986.png)

### A Better Cost Function

![image-20241016095356833](/home/yutao/.config/Typora/typora-user-images/image-20241016095356833.png)

![image-20241016095631330](/home/yutao/.config/Typora/typora-user-images/image-20241016095631330.png)

![image-20241016095507208](/home/yutao/.config/Typora/typora-user-images/image-20241016095507208.png)

![image-20241016095554581](/home/yutao/.config/Typora/typora-user-images/image-20241016095554581.png)

### Generative Adversarial Networks

![image-20241016095744363](/home/yutao/.config/Typora/typora-user-images/image-20241016095744363.png)

### GAN Samples

![image-20241016095812134](/home/yutao/.config/Typora/typora-user-images/image-20241016095812134.png)

### Variant: CycleGAN

![image-20241016100324217](/home/yutao/.config/Typora/typora-user-images/image-20241016100324217.png)





## Diffusion models

![image-20241016100340595](/home/yutao/.config/Typora/typora-user-images/image-20241016100340595.png)

### Diffusion process

![image-20241016100406196](/home/yutao/.config/Typora/typora-user-images/image-20241016100406196.png)

![image-20241016100508594](/home/yutao/.config/Typora/typora-user-images/image-20241016100508594.png)

![image-20241016100519862](/home/yutao/.config/Typora/typora-user-images/image-20241016100519862.png)











