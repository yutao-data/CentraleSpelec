# Exercise 1: Voting rules

### **1. Candidate Election Using Different Voting Rules**

We first analyze the provided voter preferences:

- **Preferences**:
  - 5 voters: c≻b≻a≻dc \succ b \succ a \succ dc≻b≻a≻d
  - 4 voters: b≻a≻c≻db \succ a \succ c \succ db≻a≻c≻d
  - 4 voters: d≻b≻c≻ad \succ b \succ c \succ ad≻b≻c≻a
  - 2 voters: a≻c≻b≻da \succ c \succ b \succ da≻c≻b≻d
  - 2 voters: d≻b≻a≻cd \succ b \succ a \succ cd≻b≻a≻c
- **Candidates**: X={a,b,c,d}X = \{a, b, c, d\}X={a,b,c,d}

------

#### **(a) Plurality Voting**

The **plurality rule** elects the candidate with the most first-choice votes.

- First-choice votes

  :

  - aaa: 2 votes (2 voters: a≻c≻b≻da \succ c \succ b \succ da≻c≻b≻d)
  - bbb: 4 votes (4 voters: b≻a≻c≻db \succ a \succ c \succ db≻a≻c≻d)
  - ccc: 5 votes (5 voters: c≻b≻a≻dc \succ b \succ a \succ dc≻b≻a≻d)
  - ddd: 6 votes (4 voters: d≻b≻c≻ad \succ b \succ c \succ ad≻b≻c≻a + 2 voters: d≻b≻a≻cd \succ b \succ a \succ cd≻b≻a≻c)

**Winner**: ddd with 6 votes.

------

#### **(b) Plurality Runoff Voting**

This method involves a second round between the top two candidates from the first round.

- **Top two candidates** (from first-choice votes):

  - ddd: 6 votes
  - ccc: 5 votes

- **Runoff comparison**:

  - Compare 

    ddd

     vs 

    ccc

    :

    - Prefer ddd: 4 voters (d≻b≻c≻ad \succ b \succ c \succ ad≻b≻c≻a) + 2 voters (d≻b≻a≻cd \succ b \succ a \succ cd≻b≻a≻c) = 6
    - Prefer ccc: 5 voters (c≻b≻a≻dc \succ b \succ a \succ dc≻b≻a≻d) + 4 voters (b≻a≻c≻db \succ a \succ c \succ db≻a≻c≻d) = 9

**Winner**: ccc.

------

#### **(c) Condorcet Principle**

The **Condorcet winner** is the candidate who beats every other candidate in pairwise comparisons.

- Pairwise comparisons:
  - ccc vs aaa: ccc wins (9 votes to 8)
  - ccc vs bbb: ccc wins (9 votes to 8)
  - ccc vs ddd: ccc wins (9 votes to 8)
  - aaa vs bbb: bbb wins (10 votes to 7)
  - aaa vs ddd: ddd wins (9 votes to 8)
  - bbb vs ddd: ddd wins (10 votes to 7)

answer b

------

#### **(d) Borda Principle**

Each candidate receives points based on their rank in each voter's preferences.

- **Scoring**:
  - 1st place: 3 points
  - 2nd place: 2 points
  - 3rd place: 1 point
  - 4th place: 0 points
- Calculate scores for each candidate:
  - aaa: (2×3)+(4×2)+(5×1)+(6×0)=6+8+5+0=19(2 \times 3) + (4 \times 2) + (5 \times 1) + (6 \times 0) = 6 + 8 + 5 + 0 = 19(2×3)+(4×2)+(5×1)+(6×0)=6+8+5+0=19
  - bbb: (2×1)+(4×3)+(5×2)+(6×2)=2+12+10+12=36(2 \times 1) + (4 \times 3) + (5 \times 2) + (6 \times 2) = 2 + 12 + 10 + 12 = 36(2×1)+(4×3)+(5×2)+(6×2)=2+12+10+12=36
  - ccc: (2×2)+(4×1)+(5×3)+(6×1)=4+4+15+6=29(2 \times 2) + (4 \times 1) + (5 \times 3) + (6 \times 1) = 4 + 4 + 15 + 6 = 29(2×2)+(4×1)+(5×3)+(6×1)=4+4+15+6=29
  - ddd: (2×0)+(4×0)+(5×0)+(6×3)=0+0+0+18=18(2 \times 0) + (4 \times 0) + (5 \times 0) + (6 \times 3) = 0 + 0 + 0 + 18 = 18(2×0)+(4×0)+(5×0)+(6×3)=0+0+0+18=18

**Winner**: bbb.

------

#### **(e) Copeland Principle**

The **Copeland score** is the sum of +1,−1,0+1, -1, 0+1,−1,0 for pairwise comparisons.

- Pairwise comparisons:
  - ccc wins all (vs a,b,da, b, da,b,d): +3+3+3
  - bbb wins +1+1+1, loses −2-2−2: −1-1−1
  - aaa wins +0+0+0, loses −3-3−3: −3-3−3
  - ddd wins +2+2+2, loses −1-1−1: +1+1+1

**Winner**: b.

------

#### **(f) Kramer-Simpson Principle**

The **Kramer-Simpson score** is the minimum number of voters preferring xxx over any other candidate yyy.

- Pairwise weakest support:
  - ccc: Minimum 9 voters (vs ddd)
  - bbb: Minimum 7 voters (vs ddd)
  - aaa: Minimum 7 voters (vs bbb)
  - ddd: Minimum 6 voters (vs ccc)

**Winner**: b.

------

### **2. Does Copeland Elect the Condorcet Winner?**

Yes, the Copeland principle elects the Condorcet winner when one exists because the winner must win all pairwise comparisons, leading to the highest Copeland score.

------

### **3. Does Kramer-Simpson Elect the Condorcet Winner?**

Yes, the Kramer-Simpson principle also elects the Condorcet winner if one exists. By definition, the Condorcet winner has the strongest minimum pairwise support against all others.

![image-20241125091352758](/home/yutao/.config/Typora/typora-user-images/image-20241125091352758.png)

------

### **4. Borda Principle with New Preferences**

#### **(a)(i) Original Preferences**

Calculate Borda scores:

- a:19,b:36,c:29,d:18,e:0a: 19, b: 36, c: 29, d: 18, e: 0a:19,b:36,c:29,d:18,e:0

**Winner**: a, b, c, d are all elected.

------

#### **(a)(ii) Add 3 New Voters**

Not possible

![image-20241125092605202](/home/yutao/.config/Typora/typora-user-images/image-20241125092605202.png)

只要任何一个其他candidate放到第二位, e就不可能获胜

------

#### **(a)(iii) Add 4 New Voters**

Similarly, with 4 voters, eee's win can be engineered, provided eee's rank is boosted significantly.

![image-20241125093203273](/home/yutao/.config/Typora/typora-user-images/image-20241125093203273.png)

------

#### **(b) Adding Voters for Condorcet Winner aaa**

Adding voters with preferences a≻Xa \succ Xa≻X, we can create scenarios where aaa is preferred in all pairwise comparisons.

![image-20241125093539844](/home/yutao/.config/Typora/typora-user-images/image-20241125093539844.png)



# Exercise 2: Ranking or sorting?



## Part 1: Ranking

![image-20241125095458620](/home/yutao/.config/Typora/typora-user-images/image-20241125095458620.png)

### **Part 1: Ranking**

这里必考

#### **1. Additive Model for Preferences a≻ba \succ ba≻b, c≻dc \succ dc≻d, e≻fe \succ fe≻f**

In an **additive model**, the overall utility for a student is computed as the sum of utilities across all criteria. If preferences a≻ba \succ ba≻b, c≻dc \succ dc≻d, and e≻fe \succ fe≻f can be represented, the utility of the preferred student must always be strictly greater than that of the less preferred student.

The utility for a student xxx is:

U(x)=w1u1(x)+w2u2(x)+w3u3(x)U(x) = w_1 u_1(x) + w_2 u_2(x) + w_3 u_3(x)U(x)=w1u1(x)+w2u2(x)+w3u3(x)

where:

- w1,w2,w3>0w_1, w_2, w_3 > 0w1,w2,w3>0 (weights for Mathematics, Statistics, and Language),
- u1(x),u2(x),u3(x)u_1(x), u_2(x), u_3(x)u1(x),u2(x),u3(x) are the scores on Mathematics, Statistics, and Language for xxx.
- a≻ba \succ ba≻b: The utility of aaa must be strictly greater than bbb:

w1⋅85+w2⋅90+w3⋅75>w1⋅80+w2⋅70+w3⋅70w_1 \cdot 85 + w_2 \cdot 90 + w_3 \cdot 75 > w_1 \cdot 80 + w_2 \cdot 70 + w_3 \cdot 70w1⋅85+w2⋅90+w3⋅75>w1⋅80+w2⋅70+w3⋅70

- c≻dc \succ dc≻d: The utility of ccc must be strictly greater than ddd:

w1⋅80+w2⋅65+w3⋅70>w1⋅85+w2⋅90+w3⋅60w_1 \cdot 80 + w_2 \cdot 65 + w_3 \cdot 70 > w_1 \cdot 85 + w_2 \cdot 90 + w_3 \cdot 60w1⋅80+w2⋅65+w3⋅70>w1⋅85+w2⋅90+w3⋅60

- e≻fe \succ fe≻f: The utility of eee must be strictly greater than fff:

w1⋅50+w2⋅65+w3⋅75>w1⋅50+w2⋅70+w3⋅60w_1 \cdot 50 + w_2 \cdot 65 + w_3 \cdot 75 > w_1 \cdot 50 + w_2 \cdot 70 + w_3 \cdot 60w1⋅50+w2⋅65+w3⋅75>w1⋅50+w2⋅70+w3⋅60

#### Feasibility Analysis

- For a≻ba \succ ba≻b: The inequality can be satisfied with suitable weights (e.g., assigning more importance to Mathematics and Statistics relative to Language).
- For c≻dc \succ dc≻d: The inequality cannot hold for positive weights because ddd scores strictly better than ccc in both Mathematics and Statistics. Thus, c≻dc \succ dc≻d is inconsistent with an additive model.
- For e≻fe \succ fe≻f: The inequality can be satisfied by assigning higher importance to Language relative to Statistics.

**Conclusion**: These preferences **cannot** be represented by an additive model because c≻dc \succ dc≻d contradicts the performance scores.

![image-20241125100709749](/home/yutao/.config/Typora/typora-user-images/image-20241125100709749.png)

第一个解假设u(x_1) = x_1

第二个解答直接利用u(x)赋值机制解决, 只需要满足大小排序即可

------

这里必考

#### **2. Additive Model for Preferences a≻ba \succ ba≻b, c≻dc \succ dc≻d, e∼fe \sim fe∼f**

- a≻ba \succ ba≻b: Same as above, feasible with suitable weights.
- c≻dc \succ dc≻d: Same as above, infeasible due to contradictions in scores.
- e∼fe \sim fe∼f: The utilities of eee and fff must be equal:

w1⋅50+w2⋅65+w3⋅75=w1⋅50+w2⋅70+w3⋅60w_1 \cdot 50 + w_2 \cdot 65 + w_3 \cdot 75 = w_1 \cdot 50 + w_2 \cdot 70 + w_3 \cdot 60w1⋅50+w2⋅65+w3⋅75=w1⋅50+w2⋅70+w3⋅60

Simplifies to:

5w2=15w3  ⟹  w2=3w35w_2 = 15w_3 \implies w_2 = 3w_35w2=15w3⟹w2=3w3

**Conclusion**: These preferences **cannot** be represented by an additive model because c≻dc \succ dc≻d remains inconsistent.

![image-20241125103025441](/home/yutao/.config/Typora/typora-user-images/image-20241125103025441.png)

------

### **3(a) Weighted Sum Ranking**

Using the utility function:

U(x)=w1u1(x)+w2u2(x)+w3u3(x)U(x) = w_1 u_1(x) + w_2 u_2(x) + w_3 u_3(x)U(x)=w1u1(x)+w2u2(x)+w3u3(x)

with w1=6w_1 = 6w1=6, w2=3w_2 = 3w2=3, w3=2w_3 = 2w3=2:

- Calculate utility for each student:
  - U(a)=6(85)+3(90)+2(75)=750+270+150=1170U(a) = 6(85) + 3(90) + 2(75) = 750 + 270 + 150 = 1170U(a)=6(85)+3(90)+2(75)=750+270+150=1170
  - U(b)=6(80)+3(70)+2(70)=720+210+140=1070U(b) = 6(80) + 3(70) + 2(70) = 720 + 210 + 140 = 1070U(b)=6(80)+3(70)+2(70)=720+210+140=1070
  - U(c)=6(80)+3(65)+2(70)=720+195+140=1055U(c) = 6(80) + 3(65) + 2(70) = 720 + 195 + 140 = 1055U(c)=6(80)+3(65)+2(70)=720+195+140=1055
  - U(d)=6(85)+3(90)+2(60)=750+270+120=1140U(d) = 6(85) + 3(90) + 2(60) = 750 + 270 + 120 = 1140U(d)=6(85)+3(90)+2(60)=750+270+120=1140
  - U(e)=6(50)+3(65)+2(75)=300+195+150=645U(e) = 6(50) + 3(65) + 2(75) = 300 + 195 + 150 = 645U(e)=6(50)+3(65)+2(75)=300+195+150=645
  - U(f)=6(50)+3(70)+2(60)=300+210+120=630U(f) = 6(50) + 3(70) + 2(60) = 300 + 210 + 120 = 630U(f)=6(50)+3(70)+2(60)=300+210+120=630
- Ranking:

a≻d≻b≻c≻e≻fa \succ d \succ b \succ c \succ e \succ fa≻d≻b≻c≻e≻f





------

#### **3(b) Weighted Sum Representation for Given Preferences**

- **Preference d≻cd \succ cd≻c**:

  U(d)>U(c)or6(85)+3(90)+2(60)>6(80)+3(65)+2(70)U(d) > U(c) \quad \text{or} \quad 6(85) + 3(90) + 2(60) > 6(80) + 3(65) + 2(70)U(d)>U(c)or6(85)+3(90)+2(60)>6(80)+3(65)+2(70)

  This inequality holds for w1=6,w2=3,w3=2w_1 = 6, w_2 = 3, w_3 = 2w1=6,w2=3,w3=2.

- **Preference f≻ef \succ ef≻e**:

  U(f)>U(e)or6(50)+3(70)+2(60)>6(50)+3(65)+2(75)U(f) > U(e) \quad \text{or} \quad 6(50) + 3(70) + 2(60) > 6(50) + 3(65) + 2(75)U(f)>U(e)or6(50)+3(70)+2(60)>6(50)+3(65)+2(75)

  Simplifies to:

  5w2<15w35w_2 < 15w_35w2<15w3

  This inequality does not hold with positive weights where w2w_2w2 is significantly larger than w3w_3w3.

- **Language is strictly more important than Mathematics**: Requires w3>w1w_3 > w_1w3>w1, which contradicts the current weight structure (w1=6,w3=2w_1 = 6, w_3 = 2w1=6,w3=2).

**Conclusion**: These preferences **cannot** be represented by a weighted sum model under the given conditions.

![image-20241125103532986](/home/yutao/.config/Typora/typora-user-images/image-20241125103532986.png)



## Part 2: Sorting

To determine the assignments of students b,c,d,eb, c, d, eb,c,d,e into the categories C1,C2,C3,C4C_1, C_2, C_3, C_4C1,C2,C3,C4, we use the provided **outranking relation** and the **assignment principle**:

### **Key Parameters and Definitions**

1. **Outranking relation (a%ba \% ba%b):**

   a%b  ⟺  ∑i∈N,gi(a)≥gi(b)wi≥λa \% b \iff \sum_{i \in N, g_i(a) \geq g_i(b)} w_i \geq \lambdaa%b⟺i∈N,gi(a)≥gi(b)∑wi≥λ

   - w1=0.3,w2=0.3,w3=0.4w_1 = 0.3, w_2 = 0.3, w_3 = 0.4w1=0.3,w2=0.3,w3=0.4
   - Majority threshold λ=0.7\lambda = 0.7λ=0.7

2. **Assignment Principle (Equation 2):**

   a%b  ⟹  C(a)≥C(b)a \% b \implies C(a) \geq C(b)a%b⟹C(a)≥C(b)

3. **Given Information:**

   - a∈C4a \in C_4a∈C4 (highest category)
   - f∈C1f \in C_1f∈C1 (lowest category)
   - 4 categories: C1,C2,C3,C4C_1, C_2, C_3, C_4C1,C2,C3,C4

4. **Performance Matrix (gi(x)g_i(x)gi(x)):**

   Mathematics (1)Statistics (2)Language (3)a859075b807070c806570d859060e506575f507060\begin{array}{c|ccc} & \text{Mathematics (1)} & \text{Statistics (2)} & \text{Language (3)} \\ \hline a & 85 & 90 & 75 \\ b & 80 & 70 & 70 \\ c & 80 & 65 & 70 \\ d & 85 & 90 & 60 \\ e & 50 & 65 & 75 \\ f & 50 & 70 & 60 \\ \end{array}abcdefMathematics (1)858080855050Statistics (2)907065906570Language (3)757070607560

------

### **Steps for Assignment**

#### **1. Compare each alternative to aaa:**

Since a∈C4a \in C_4a∈C4, all students outranked by aaa will belong to categories lower than or equal to C4C_4C4. Compute the outranking relation for each x∈{b,c,d,e,f}x \in \{b, c, d, e, f\}x∈{b,c,d,e,f} compared to aaa:

a%x  ⟺  ∑i∈N,gi(a)≥gi(x)wi≥λa \% x \iff \sum_{i \in N, g_i(a) \geq g_i(x)} w_i \geq \lambdaa%x⟺i∈N,gi(a)≥gi(x)∑wi≥λ

- **For bbb:**

  g1(a)≥g1(b),g2(a)≥g2(b),g3(a)≥g3(b)g_1(a) \geq g_1(b), \quad g_2(a) \geq g_2(b), \quad g_3(a) \geq g_3(b)g1(a)≥g1(b),g2(a)≥g2(b),g3(a)≥g3(b)

  w1+w2+w3=0.3+0.3+0.4=1.0≥0.7w_1 + w_2 + w_3 = 0.3 + 0.3 + 0.4 = 1.0 \geq 0.7w1+w2+w3=0.3+0.3+0.4=1.0≥0.7

  ⇒a%b\Rightarrow a \% b⇒a%b.

- **For ccc:**

  g1(a)≥g1(c),g2(a)≥g2(c),g3(a)≥g3(c)g_1(a) \geq g_1(c), \quad g_2(a) \geq g_2(c), \quad g_3(a) \geq g_3(c)g1(a)≥g1(c),g2(a)≥g2(c),g3(a)≥g3(c)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒a%c\Rightarrow a \% c⇒a%c.

- **For ddd:**

  g1(a)≥g1(d),g2(a)≥g2(d),g3(a)≥g3(d)g_1(a) \geq g_1(d), \quad g_2(a) \geq g_2(d), \quad g_3(a) \geq g_3(d)g1(a)≥g1(d),g2(a)≥g2(d),g3(a)≥g3(d)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒a%d\Rightarrow a \% d⇒a%d.

- **For eee:**

  g1(a)≥g1(e),g2(a)≥g2(e),g3(a)≥g3(e)g_1(a) \geq g_1(e), \quad g_2(a) \geq g_2(e), \quad g_3(a) \geq g_3(e)g1(a)≥g1(e),g2(a)≥g2(e),g3(a)≥g3(e)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒a%e\Rightarrow a \% e⇒a%e.

- **For fff:**

  g1(a)≥g1(f),g2(a)≥g2(f),g3(a)≥g3(f)g_1(a) \geq g_1(f), \quad g_2(a) \geq g_2(f), \quad g_3(a) \geq g_3(f)g1(a)≥g1(f),g2(a)≥g2(f),g3(a)≥g3(f)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒a%f\Rightarrow a \% f⇒a%f.

------

#### **2. Compare each alternative to fff:**

Since f∈C1f \in C_1f∈C1, all students that outrank fff will belong to categories higher than C1C_1C1. Compute the outranking relation for each x∈{a,b,c,d,e}x \in \{a, b, c, d, e\}x∈{a,b,c,d,e} compared to fff:

x%f  ⟺  ∑i∈N,gi(x)≥gi(f)wi≥λx \% f \iff \sum_{i \in N, g_i(x) \geq g_i(f)} w_i \geq \lambdax%f⟺i∈N,gi(x)≥gi(f)∑wi≥λ

- **For aaa:**

  g1(a)≥g1(f),g2(a)≥g2(f),g3(a)≥g3(f)g_1(a) \geq g_1(f), \quad g_2(a) \geq g_2(f), \quad g_3(a) \geq g_3(f)g1(a)≥g1(f),g2(a)≥g2(f),g3(a)≥g3(f)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒a%f\Rightarrow a \% f⇒a%f.

- **For bbb:**

  g1(b)≥g1(f),g2(b)≥g2(f),g3(b)≥g3(f)g_1(b) \geq g_1(f), \quad g_2(b) \geq g_2(f), \quad g_3(b) \geq g_3(f)g1(b)≥g1(f),g2(b)≥g2(f),g3(b)≥g3(f)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒b%f\Rightarrow b \% f⇒b%f.

- **For ccc:**

  g1(c)≥g1(f),g2(c)≱g2(f),g3(c)≥g3(f)g_1(c) \geq g_1(f), \quad g_2(c) \not\geq g_2(f), \quad g_3(c) \geq g_3(f)g1(c)≥g1(f),g2(c)≥g2(f),g3(c)≥g3(f)

  w1+w3=0.3+0.4=0.7≥0.7w_1 + w_3 = 0.3 + 0.4 = 0.7 \geq 0.7w1+w3=0.3+0.4=0.7≥0.7

  ⇒c%f\Rightarrow c \% f⇒c%f.

- **For ddd:**

  g1(d)≥g1(f),g2(d)≥g2(f),g3(d)≥g3(f)g_1(d) \geq g_1(f), \quad g_2(d) \geq g_2(f), \quad g_3(d) \geq g_3(f)g1(d)≥g1(f),g2(d)≥g2(f),g3(d)≥g3(f)

  w1+w2+w3=1.0≥0.7w_1 + w_2 + w_3 = 1.0 \geq 0.7w1+w2+w3=1.0≥0.7

  ⇒d%f\Rightarrow d \% f⇒d%f.

- **For eee:**

  g1(e)=g1(f),g2(e)≱g2(f),g3(e)≥g3(f)g_1(e) = g_1(f), \quad g_2(e) \not\geq g_2(f), \quad g_3(e) \geq g_3(f)g1(e)=g1(f),g2(e)≥g2(f),g3(e)≥g3(f)

  w1+w3=0.3+0.4=0.7≥0.7w_1 + w_3 = 0.3 + 0.4 = 0.7 \geq 0.7w1+w3=0.3+0.4=0.7≥0.7

  ⇒e%f\Rightarrow e \% f⇒e%f.

------

#### **3. Assign Categories**

Using the outranking relations:

- a%b,a%c,a%d,a%e,a%fa \% b, a \% c, a \% d, a \% e, a \% fa%b,a%c,a%d,a%e,a%f: b,c,d,e,f≤C4b, c, d, e, f \leq C_4b,c,d,e,f≤C4
- b%f,c%f,d%f,e%fb \% f, c \% f, d \% f, e \% fb%f,c%f,d%f,e%f: b,c,d,e>C1b, c, d, e > C_1b,c,d,e>C1

Combining these:

- a∈C4a \in C_4a∈C4
- f∈C1f \in C_1f∈C1
- b,c,d,e∈C2b, c, d, e \in C_2b,c,d,e∈C2 or C3C_3C3 based on further comparisons.

Final assignments:

a∈C4,  b,c,d∈C3,  e∈C2,  f∈C1a \in C_4, \; b, c, d \in C_3, \; e \in C_2, \; f \in C_1a∈C4,b,c,d∈C3,e∈C2,f∈C1



![image-20241125105524909](/home/yutao/.config/Typora/typora-user-images/image-20241125105524909.png)



这题不考
