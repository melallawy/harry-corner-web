---
name: customer-research
description: Use when the user provides a product to analyze. Generates a full customer research report including competitor analysis, target audience profiling, customer persona creation, and customer interview questions. Trigger with "research this product", "customer research for", or similar.
---

# Customer Research Skill

When the user provides a product (name, description, or link), generate a comprehensive customer research report following this exact structure. Use websearch to gather real data about competitors, market size, and audience demographics.

## Report Structure

### 1. COMPETITOR ANALYSIS MATRIX

Create a 3x3 analysis table:

| | PRODUCT | NEED | AUDIENCE |
|---|---|---|---|
| **DIRECT COMPETITORS** | [Same product type, same audience] | [Same need they solve] | [Same target customers] |
| **SECONDARY COMPETITORS** | [Similar product, different approach] | [Same need, different solution] | [Overlapping audience] |
| **INDIRECT COMPETITORS** | [Different product, same need] | [Same underlying need] | [Different but related audience] |

For each competitor, include:
- Brand name
- Price point
- Key differentiator
- Where they sell (Amazon, DTC, retail)

### 2. CUSTOMER DEMOGRAPHICS

Define the primary buyer persona demographics:
- **Age:** [range]
- **Income:** [range]
- **Location:** [countries/regions]
- **Education:** [level]
- **Gender:** [skew if any]
- **Marital Status:** [if relevant]
- **Occupation:** [typical jobs]

### 3. PERFECT TARGET AUDIENCE FORMULA

Score the ideal customer on three axes (1-10):

| Factor | Score | Explanation |
|---|---|---|
| **High Urgency** | [X/10] | How pressing is the problem? Do they need this NOW? |
| **High Agency** | [X/10] | Do they have the resources and decision-making power to buy? |
| **Low Ability** | [X/10] | Do they lack the skill/time/tools to solve this themselves? |

**Ideal Customer:** High Urgency + High Agency + Low Ability = Ready to buy

### 4. CUSTOMER PERSONA (Create 2-3)

For each persona, provide:

**[Persona Name]**
- **Photo description:** [What they look like]
- **Age:** 
- **Location:** 
- **Gender:** 
- **Income:** 
- **Career:** 
- **Education:** 
- **Interests:** 
- **Brands they follow:** 
- **Hobbies:** 
- **Values:** 
- **Life Goals:** 
- **Current Struggles:** [What pain point your product solves]

Write a 100-150 word narrative describing their daily life, frustrations, and how your product fits in.

### 5. CUSTOMER RESEARCH QUESTIONS

#### Problem Discovery Questions:
1. What's the problem that [product] solves for you?
2. What conditions led to this problem?
3. What are the consequences of not solving this problem?
4. What outcome are you looking for?
5. What would make you want to hire a specific product?
6. Have you tried any similar products? What did you like? How can it be improved?

#### Solution Evaluation Questions:
1. What do you like about this existing solution?
2. What don't you like about this solution?
3. Are there any improvements that would make this a better experience for you?
4. What would stop you from buying this product?

### 6. MARKET INSIGHTS

- **Search volume trends** (if available)
- **Common complaints** about competitors (from reviews)
- **Unmet needs** in the market
- **Pricing sweet spot** based on competitor analysis

## Output Format

Present the report in clean markdown with tables, bullet points, and clear sections. Use the brand colors from BRAND_GUIDELINES.md if outputting to the website. Make it actionable — every section should lead to a clear strategic decision.
