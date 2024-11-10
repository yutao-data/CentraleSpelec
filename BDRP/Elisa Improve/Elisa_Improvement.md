# GCR

[WSDM '22: Proceedings of the Fifteenth ACM International Conference on Web Search and Data Mining](https://dl.acm.org/doi/proceedings/10.1145/3488560)

Citation: 42

## Contributions of the paper

The GCR model introduces a novel approach to **link prediction** by transforming it into a **logical reasoning** problem, enabling the use of both associative learning and logical connections between links. This offers a fresh perspective on leveraging neighboring link information and could strengthen Elisa’s work by providing a logical, collaborative framework that refines relational reasoning tasks within KGs.

Logical Connections Among Triplets: (x, capitalOf, y) → (x, locatedIn, y)

Triplets as Predicate Expressions: `capitalOf(x, y) → locatedIn(x, y)

## Strengths 

GCR’s ability to handle uncertainty in logical reasoning, and its use of soft-logic constraints, aligns well with the goals of Elisa’s TransHySeCo method. By incorporating neighbor link information without predefined logic rules, GCR’s approach would allow Elisa’s model to better handle cases with sparse or noisy data, ultimately leading to richer and more reliable embeddings.

soft-logic constraints: Soft logic allows rules to have flexibility by assigning probabilities, so rules can occasionally be violated without strict consequences.

In GCR, for example, if a user bought a phone, it likely—but not certainly—implies they might buy a phone case. Soft logic handles this uncertainty by treating the rule as probable rather than absolute.



## Overview of the method

GCR employs **Graph Neural Networks (GNNs)** and **modularized neural logic networks**, translating link prediction tasks into **logical expressions**. These expressions allow for efficient learning by applying logical constraints across neighboring links, which Elisa’s work could incorporate to enhance both prediction accuracy and training efficiency

![image-20241102145858893](/home/yutao/.config/Typora/typora-user-images/image-20241102145858893.png)

![image-20241102150709518](/home/yutao/.config/Typora/typora-user-images/image-20241102150709518.png)

## Weaknesses 

GCR, however, may face scalability issues with very large datasets, particularly if high-order logical implications are necessary. This could limit its use in broader datasets like those Elisa may intend to apply her methods on. Addressing computational overheads would be crucial in combining these methodologies.







## Areas of improvement / adjustments

Integrating GCR’s collaborative reasoning approach with TransHySeCo could benefit from exploring multi-hop logic reasoning. This would improve predictions by capturing more complex, indirect relationships between entities, a potential enhancement to Elisa’s ontology-based framework. Additionally, adjusting the regularization settings for sparsity (as seen in GCR) might optimize performance for sparse datasets







## Code

Code is not available!!





# KALE

## Contributions of the paper

**Unified Framework for Embedding**: KALE proposes a framework that jointly embeds knowledge triples and logical rules. It treats triples as atomic formulae and logical rules as complex formulae, creating a unified embedding space that accommodates both

**Incorporation of t-norm Fuzzy Logic**: To handle the truth values of complex logical rules, KALE uses t-norm fuzzy logic, allowing a continuous range of truth values rather than binary outcomes. This is particularly useful for managing partial rule satisfaction

**Enhanced Prediction for New Facts**: By embedding triples and rules together, KALE improves its ability to predict new facts that might not be directly inferable through logical rules alone. This capability is crucial for knowledge graph completion

<img src="/home/yutao/.config/Typora/typora-user-images/image-20241102153922009.png" alt="image-20241102153922009" style="zoom:67%;" />

## Strengths 

**Joint Modeling of Knowledge and Logic**: KALE’s ability to embed both triples and rules in a single framework allows it to better capture the relational structure of knowledge graphs, leading to more semantically meaningful embeddings



## Overview of the method

**Triple Modeling**: KALE follows the translation-based approach used in TransE, where each relation is represented as a translation between entities. A triple’s truth value is computed by measuring the distance between the head and tail entity embeddings after translation

**Rule Modeling with t-norm Fuzzy Logic**: Logical rules are represented as complex formulae. KALE uses t-norm fuzzy logic to calculate truth values of logical rules, combining atomic truth values (from triples) with logical operations like conjunction and implication

**Joint Loss Function**: KALE minimizes a global loss function over both triples and rules. Positive samples include observed triples and ground rules, while negative samples are gen	erated by corrupting entities or relations. This loss function ensures that the embeddings are compatible with both observed facts and logical rules

![image-20241102154713866](/home/yutao/.config/Typora/typora-user-images/image-20241102154713866.png)

t-norm fuzzy logics:

<img src="/home/yutao/.config/Typora/typora-user-images/image-20241102154841649.png" alt="image-20241102154841649" style="zoom:67%;" />



Joint Learning:

<img src="/home/yutao/.config/Typora/typora-user-images/image-20241102155148778.png" alt="image-20241102155148778" style="zoom:80%;" />

<img src="/home/yutao/.config/Typora/typora-user-images/image-20241102155311012.png" alt="image-20241102155311012" style="zoom:80%;" />

## Weaknesses 

**Complexity in Rule Grounding**: KALE requires grounding of universally quantified rules, which can be computationally intensive, especially with large datasets

**Dependency on Rule Quality**: Since KALE relies on logical rules for embedding, its performance depends heavily on the quality of these rules. Poorly defined or incomplete rules may lead to suboptimal embeddings





## Areas of improvement / adjustments

KALE’s main innovation over Elisa’s approach lies in its unified framework for embedding both knowledge triples and logical rules, its use of t-norm fuzzy logic for flexible truth value handling, and a joint loss function that enhances predictive capabilities even for complex, non-directly inferable facts. These innovations allow KALE to generate embeddings that are more robust and semantically informed than those from methods that rely solely on triples or on strict ontological consistency.





## Code