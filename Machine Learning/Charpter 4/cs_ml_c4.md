# Convolutional Neural Networks

## Introduction

### MLP limitations

![image-20241009083654394](/home/yutao/.config/Typora/typora-user-images/image-20241009083654394.png)

![image-20241009083705553](/home/yutao/.config/Typora/typora-user-images/image-20241009083705553.png)



### What are CNNs ?

![image-20241009083727314](/home/yutao/.config/Typora/typora-user-images/image-20241009083727314.png)

![image-20241009083736944](/home/yutao/.config/Typora/typora-user-images/image-20241009083736944.png)





## Convolutions

### Convolutions preliminaries

#### Definition

![image-20241009084010148](/home/yutao/.config/Typora/typora-user-images/image-20241009084010148.png)

#### Illustration and properties

![image-20241009084130828](/home/yutao/.config/Typora/typora-user-images/image-20241009084130828.png)

#### Cross-Correlation

![image-20241009084354119](/home/yutao/.config/Typora/typora-user-images/image-20241009084354119.png)

#### Illustration of a Convolution

![image-20241009084450839](/home/yutao/.config/Typora/typora-user-images/image-20241009084450839.png)

#### Motivation to use Convolutions

Sparse interactions

![image-20241009084920330](/home/yutao/.config/Typora/typora-user-images/image-20241009084920330.png)

Parameter sharing

![image-20241009085020479](/home/yutao/.config/Typora/typora-user-images/image-20241009085020479.png)

Equivariant translation

![image-20241009085115132](/home/yutao/.config/Typora/typora-user-images/image-20241009085115132.png)

### Convolutions for images

#### Channels

![image-20241009085316752](/home/yutao/.config/Typora/typora-user-images/image-20241009085316752.png)

#### Equivariance to zoom, rotation, ...

![image-20241009085417957](/home/yutao/.config/Typora/typora-user-images/image-20241009085417957.png)

![image-20241009090249874](/home/yutao/.config/Typora/typora-user-images/image-20241009090249874.png)



#### Convolution reduces input size

![image-20241009090312034](/home/yutao/.config/Typora/typora-user-images/image-20241009090312034.png)

#### Weights in kernels: fixed

![image-20241009090334561](/home/yutao/.config/Typora/typora-user-images/image-20241009090334561.png)

#### Weights in kernels: learned

![image-20241009090535173](/home/yutao/.config/Typora/typora-user-images/image-20241009090535173.png)

#### Learn several filters

![image-20241009090743386](/home/yutao/.config/Typora/typora-user-images/image-20241009090743386.png)

#### Receptive field

![image-20241009091316074](/home/yutao/.config/Typora/typora-user-images/image-20241009091316074.png)

#### Convolution 1x1

![image-20241009091331674](/home/yutao/.config/Typora/typora-user-images/image-20241009091331674.png)

## Padding,stride,pooling
### Padding

#### Sides problem

![image-20241009092140613](/home/yutao/.config/Typora/typora-user-images/image-20241009092140613.png)

想要解决的话, 只需要往图像周围添加pixel即可

#### Padding

![image-20241009092343144](/home/yutao/.config/Typora/typora-user-images/image-20241009092343144.png)

#### Zero Padding

![image-20241009093113229](/home/yutao/.config/Typora/typora-user-images/image-20241009093113229.png)

"same" and "half" padding are the same

#### Feature map after padding

![image-20241009093253346](/home/yutao/.config/Typora/typora-user-images/image-20241009093253346.png)

### Stride

![image-20241009093355947](/home/yutao/.config/Typora/typora-user-images/image-20241009093355947.png)

### Pooling

![image-20241009095656990](/home/yutao/.config/Typora/typora-user-images/image-20241009095656990.png)

#### Why use pooling ?

![image-20241009095854029](/home/yutao/.config/Typora/typora-user-images/image-20241009095854029.png)

#### Stride and padding for pooling layers

![image-20241009100237445](/home/yutao/.config/Typora/typora-user-images/image-20241009100237445.png)

## CNNs
### Convolution Neural Networks for classification

#### LeNet, LeCun et al. 1998

![image-20241009103836301](/home/yutao/.config/Typora/typora-user-images/image-20241009103836301.png)

#### AlexNet, Krizhevsky et al. 2012

![image-20241009103859791](/home/yutao/.config/Typora/typora-user-images/image-20241009103859791.png)

![image-20241009104053071](/home/yutao/.config/Typora/typora-user-images/image-20241009104053071.png)

#### VGG: Visual Geometry Group, Simonyan et al. 2015

![image-20241009104333573](/home/yutao/.config/Typora/typora-user-images/image-20241009104333573.png)

#### NiN: Network in Network, Lin et al. 2013

![image-20241009104358602](/home/yutao/.config/Typora/typora-user-images/image-20241009104358602.png)

#### Inception Blocks

![image-20241009104452896](/home/yutao/.config/Typora/typora-user-images/image-20241009104452896.png)

#### GoogleNet, Szegedy et al. 2015

![image-20241009104527529](/home/yutao/.config/Typora/typora-user-images/image-20241009104527529.png)

#### Residual Blocks

![image-20241009104544600](/home/yutao/.config/Typora/typora-user-images/image-20241009104544600.png)

![image-20241009104557957](/home/yutao/.config/Typora/typora-user-images/image-20241009104557957.png)

#### ResNet: Residual Neural Networks, He et al. 2016

![image-20241009104620463](/home/yutao/.config/Typora/typora-user-images/image-20241009104620463.png)

#### DenseNet, Huang et al. 2017

![image-20241009105034049](/home/yutao/.config/Typora/typora-user-images/image-20241009105034049.png)

#### More architectures

![image-20241009105111815](/home/yutao/.config/Typora/typora-user-images/image-20241009105111815.png)

### Object Detection

#### Goal of Object Detection

![image-20241009105322348](/home/yutao/.config/Typora/typora-user-images/image-20241009105322348.png)

#### How to consider the detection problem ?

![image-20241009105410283](/home/yutao/.config/Typora/typora-user-images/image-20241009105410283.png)

#### Region proposal: selective search, Uijlings et al. 2013

![image-20241009105433837](/home/yutao/.config/Typora/typora-user-images/image-20241009105433837.png)

#### Intersection over Union (IoU)

![image-20241009105509832](/home/yutao/.config/Typora/typora-user-images/image-20241009105509832.png)

#### Label region proposal

![image-20241009105630283](/home/yutao/.config/Typora/typora-user-images/image-20241009105630283.png)

#### R-CNN, Girshick et al. 2014

![image-20241009105740866](/home/yutao/.config/Typora/typora-user-images/image-20241009105740866.png)

#### Training R-CNN

![image-20241009110009794](/home/yutao/.config/Typora/typora-user-images/image-20241009110009794.png)

![image-20241009110014085](/home/yutao/.config/Typora/typora-user-images/image-20241009110014085.png)

#### Evaluation of a detection model

![image-20241009110042779](/home/yutao/.config/Typora/typora-user-images/image-20241009110042779.png)

![image-20241009110213290](/home/yutao/.config/Typora/typora-user-images/image-20241009110213290.png)

#### R-CNN limits

![image-20241009110241854](/home/yutao/.config/Typora/typora-user-images/image-20241009110241854.png)

#### Fast R-CNN, Girshick 2015

![image-20241009110306224](/home/yutao/.config/Typora/typora-user-images/image-20241009110306224.png)

#### Fast R-CNN: Region of Interest Pooling

![image-20241009110329001](/home/yutao/.config/Typora/typora-user-images/image-20241009110329001.png)

#### Speed-up thanks to Fast R-CNN

![image-20241009110345297](/home/yutao/.config/Typora/typora-user-images/image-20241009110345297.png)

#### You Only Look Once (YOLO) Redmon et al. 2016

![image-20241009110441219](/home/yutao/.config/Typora/typora-user-images/image-20241009110441219.png)

![image-20241009110455378](/home/yutao/.config/Typora/typora-user-images/image-20241009110455378.png)

### Semantic Segmentation

![image-20241009110605896](/home/yutao/.config/Typora/typora-user-images/image-20241009110605896.png)

![image-20241009110645330](/home/yutao/.config/Typora/typora-user-images/image-20241009110645330.png)



## Data and Transfer
### Data Augmentation

![image-20241009110719056](/home/yutao/.config/Typora/typora-user-images/image-20241009110719056.png)

#### Data Augmentation

![image-20241009110729987](/home/yutao/.config/Typora/typora-user-images/image-20241009110729987.png)

![image-20241009110738350](/home/yutao/.config/Typora/typora-user-images/image-20241009110738350.png)

### Transfer learning

![image-20241009110812988](/home/yutao/.config/Typora/typora-user-images/image-20241009110812988.png)

**迁移学习**是指将一个任务上训练好的模型应用到另一个不同的但相关的任务上。它的核心思想是，不同任务之间可能存在一些共性的特征，通过迁移这些特征，可以加速新任务的学习，并且在数据量较小的情况下取得更好的效果。

### ![image-20241009111153120](/home/yutao/.config/Typora/typora-user-images/image-20241009111153120.png)

这里的target是错误的,应该是predict

#### Fine tuning

![image-20241009111313716](/home/yutao/.config/Typora/typora-user-images/image-20241009111313716.png)

#### Domain adaptation

![image-20241009111328867](/home/yutao/.config/Typora/typora-user-images/image-20241009111328867.png)





## SSL

#### What is Self-supervised learning (SSL) ?

![image-20241009111619069](/home/yutao/.config/Typora/typora-user-images/image-20241009111619069.png)

#### Pretext tasks for images

![image-20241009111706226](/home/yutao/.config/Typora/typora-user-images/image-20241009111706226.png)

#### Pretext tasks for videos

![image-20241009111729008](/home/yutao/.config/Typora/typora-user-images/image-20241009111729008.png)

#### Contrastive Learning

![image-20241009111746102](/home/yutao/.config/Typora/typora-user-images/image-20241009111746102.png)

#### SimCLR, Chen et al. 2020

![image-20241009111828563](/home/yutao/.config/Typora/typora-user-images/image-20241009111828563.png)







## Conclusion

![image-20241009112018374](/home/yutao/.config/Typora/typora-user-images/image-20241009112018374.png)











### 















### 

### 