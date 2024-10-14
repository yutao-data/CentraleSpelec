# Voting rules as Group Decision Making Models

## Introduction

![image-20241014114812648](/home/yutao/.config/Typora/typora-user-images/image-20241014114812648.png)

## Two hypotheses

![image-20241014114922252](/home/yutao/.config/Typora/typora-user-images/image-20241014114922252.png)

## Plurality voting

![image-20241014115015812](/home/yutao/.config/Typora/typora-user-images/image-20241014115015812.png)

![image-20241014115111767](/home/yutao/.config/Typora/typora-user-images/image-20241014115111767.png)

![image-20241014115144137](/home/yutao/.config/Typora/typora-user-images/image-20241014115144137.png)

## Plurality with runoff

![image-20241014115320829](/home/yutao/.config/Typora/typora-user-images/image-20241014115320829.png)

![image-20241014115758895](/home/yutao/.config/Typora/typora-user-images/image-20241014115758895.png)

![image-20241014120001111](/home/yutao/.config/Typora/typora-user-images/image-20241014120001111.png)

## Manipulable voting rules

![image-20241014120603639](/home/yutao/.config/Typora/typora-user-images/image-20241014120603639.png)

备注中提到**“Plurality with Runoff is manipulable”**，这说明**相对多数+决选制**也是**可操纵的**。在这种选举制度中，选民有可能采取策略性投票，影响最终结果。例如：

- **第一轮投票**：如果某个选民的首选候选人不太可能进入第二轮，那么他可能会选择支持另一个更有机会进入决选的候选人，而不是直接投给自己最喜欢的候选人，以防止他们最不喜欢的候选人进入第二轮。
- **策略性行为**：这种行为是一种典型的策略性投票，因为选民并没有诚实地表达自己的偏好，而是通过预测其他选民的行为来影响最终的结果。



## Plurality with runoff: monotonicity

![image-20241014121616778](/home/yutao/.config/Typora/typora-user-images/image-20241014121616778.png)

After change, instead a elected, b is elected! 



## Condorcet voting rule (1785)

![image-20241014092012953](/home/yutao/.config/Typora/typora-user-images/image-20241014092012953.png)

**孔多塞原则**要求选举出一个在所有两两比较中胜过其他候选人的候选人，即孔多塞获胜者。然而，**Plurality rule**和**Plurality with Runoff**制度都可能选不出这样的候选人，因而违反了这一原则。

尽管孔多塞原则在某种程度上避免了选出一个完全不受欢迎的候选人，但它仍然无法解决“多数暴政”的问题，而且孔多塞获胜者也不一定是所有选民心目中排名最高的候选人。

![image-20241014092258157](/home/yutao/.config/Typora/typora-user-images/image-20241014092258157.png)

Electing the CW
	**Attractive but not always effective!**

## Borda voting rule (1783)

![image-20241014092854890](/home/yutao/.config/Typora/typora-user-images/image-20241014092854890.png)

有序的候选人列表：在博尔达投票中，每位选民提交一张包含候选人有序列表的选票。选民按自己对候选人的偏好排序，并将其排名记录在选票上。

排名计算：每个候选人在选票中的排名将转化为得分：

    假设有N个候选人，第一名得N分，第二名得N-1分，依此类推，最后一名得1分。
    例如，如果有5个候选人，第一名得5分，第二名得4分，第三名得3分，第四名得2分，第五名得1分。

候选人得分：计算所有选票上候选人的得分总和，以确定最终结果。每个候选人根据其总得分进行排序，得分最高的候选人即为选举的获胜者。

## Summary

![image-20241014093711660](/home/yutao/.config/Typora/typora-user-images/image-20241014093711660.png)

# Arrow’s Theorem

## What are we looking for?

![image-20241014093807458](/home/yutao/.config/Typora/typora-user-images/image-20241014093807458.png)

## Arrow

![image-20241014093828022](/home/yutao/.config/Typora/typora-user-images/image-20241014093828022.png)

![image-20241014094038944](/home/yutao/.config/Typora/typora-user-images/image-20241014094038944.png)

![image-20241014094554818](/home/yutao/.config/Typora/typora-user-images/image-20241014094554818.png)

![image-20241014094543042](/home/yutao/.config/Typora/typora-user-images/image-20241014094543042.png)

## Arrow’s theorem (1951)

![image-20241014101430582](/home/yutao/.config/Typora/typora-user-images/image-20241014101430582.png)

## Exercise

![image-20241014101637797](/home/yutao/.config/Typora/typora-user-images/image-20241014101637797.png)

