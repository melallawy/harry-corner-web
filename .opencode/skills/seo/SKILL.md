---
name: seo
description: Use when the user provides a product and competitors for SEO keyword research. Generates a full SEO keyword report including competitor organic keywords, keyword categorization, and scoring for inclusion in product SEO. Trigger with "seo research for", "keyword analysis for", or similar.
---

# SEO Keyword Research Skill

When the user provides a product and its competitors, generate a comprehensive SEO keyword research report. Use websearch to gather real data about competitor rankings, search volumes, and keyword positions.

## Report Structure

### 1. COMPETITOR ORGANIC KEYWORDS

For each competitor, research their top organic keywords for the specific product. Use websearch to find their ranking positions, search volumes, and traffic estimates.

#### Research Process:
1. Search for "[competitor brand] + [product name] keywords"
2. Search for "[competitor brand] + [product name] SEO ranking"
3. Search for "[competitor domain] organic keywords [product]"
4. Search for "[product name] google rankings [competitor]"
5. Use webfetch on competitor product pages to analyze meta tags, H1s, title tags

#### Data to Collect Per Competitor:
- **Keyword** — The actual search term
- **Monthly Search Volume** — Average monthly searches
- **Current Ranking Position** — Where competitor ranks (1-100)
- **Search Intent** — Informational, Commercial, Transactional, Navigational
- **Estimated Traffic** — % of clicks from that position
- **Competition Level** — Low, Medium, High
- **Trend** — Rising, Stable, Declining

### 2. KEYWORD CATEGORIZATION

Categorize every keyword into one of these types:

| Category | Definition | Example |
|---|---|---|
| **EXACT MATCH** | The exact product name or close variant | "danish dough whisk" |
| **BROAD MATCH** | Related terms that include the product concept | "dough mixing tool" |
| **PHRASE MATCH** | Contains the core keyword phrase | "best danish whisk for bread" |
| **LONG TAIL** | Specific multi-word queries with lower volume | "danish dough whisk vs balloon whisk for sourdough" |
| **BRAND COMPETITOR** | Competitor brand names | "brod and taylor dough whisk" |
| **QUESTION** | Question-based queries | "what is a danish dough whisk used for" |
| **BUYER INTENT** | Purchase-ready terms | "buy danish dough whisk" / "danish whisk amazon" |
| **COMPARISON** | vs/compare terms | "danish whisk vs wooden spoon" |
| **PROBLEM AWARE** | Pain point queries | "how to mix thick dough without sticking" |
| **BENEFIT** | Outcome-focused terms | "easy dough mixing" / "no-stick dough whisk" |

### 3. KEYWORD SCORING MATRIX

For each keyword, score on these factors:

| Factor | Score | Explanation |
|---|---|---|
| **Search Volume** | 1-10 | Higher volume = higher score |
| **Competition** | 1-10 | Lower competition = higher score (inverse) |
| **Relevance** | 1-10 | How directly related to the product |
| **Intent Match** | 1-10 | Does the searcher want to buy this type of product? |
| **Rankability** | 1-10 | Can we realistically rank for this? |
| **Traffic Potential** | 1-10 | Estimated clicks if ranking position 1-3 |
| **Conversion Potential** | 1-10 | Likelihood of converting to sale |

**Total Score = Sum of all factors (/70)**

### 4. KEYWORD RECOMMENDATION TIERS

Based on total score, classify keywords:

| Tier | Score Range | Action |
|---|---|---|
| **TIER 1 — PRIMARY** | 50-70 | Include in title tag, H1, meta description, product description |
| **TIER 2 — SECONDARY** | 35-49 | Include in product description, FAQ section, image alt text |
| **TIER 3 — SUPPORTING** | 20-34 | Include in blog content, how-to guides, supporting copy |
| **TIER 4 — LONG TAIL** | 10-19 | Use in blog posts, FAQ answers, internal linking anchor text |
| **AVOID** | 0-9 | Not worth targeting — too competitive or irrelevant |

### 5. RANKING TRACKER TEMPLATE

Track keyword position changes over time:

| Date | Keyword | Position | Change | URL |
|---|---|---|---|---|
| [date] | [keyword] | [position] | [+/- change] | [ranking URL] |

Use the format from the user's tracking data:
```
Time,danish wh keyword tracking
7/20/2025,0
7/27/2025,34
8/3/2025,0
8/10/2025,0
8/17/2025,53
8/24/2025,39
8/31/2025,29
9/7/2025,41
9/14/2025,32
```

### 6. ON-PAGE SEO RECOMMENDATIONS

For each Tier 1 and Tier 2 keyword, provide:

| Element | Recommendation |
|---|---|
| **Title Tag** | Exact placement (front-load primary keyword) |
| **Meta Description** | Include keyword naturally + CTA |
| **H1** | Primary keyword usage |
| **H2/H3** | Secondary keyword placement |
| **Product Description** | Keyword density and natural usage |
| **Image Alt Text** | Descriptive alt with keyword |
| **URL Slug** | Clean, keyword-inclusive slug |
| **Internal Links** | Anchor text recommendations |

### 7. CONTENT GAP ANALYSIS

Identify keywords competitors rank for that the user doesn't target yet:

| Keyword | Competitor Ranking | Search Volume | Content Needed |
|---|---|---|---|
| [keyword] | [competitor] at position [#] | [volume] | [blog post / product page / FAQ] |

### 8. SUMMARY & ACTION ITEMS

- **Top 5 Keywords to Target Immediately**
- **Top 5 Quick Wins** (decent volume, low competition)
- **Content Calendar Recommendations** (which keywords need new content)
- **Estimated Traffic Impact** (if ranking achieved for top keywords)

## Output Format

Present the report as a clean CSV with these columns:

```
Keyword,Category,Search Volume,Competition,Current Position,Search Intent,Relevance Score,Intent Score,Rankability Score,Traffic Potential,Conversion Potential,Total Score,Tier,Recommendation
```

Also provide a markdown summary with strategic recommendations and priority actions.

## Notes

- Always use real data from websearch — never fabricate search volumes or rankings
- If exact search volume data is unavailable, estimate based on competitor traffic and position
- Note when data is estimated vs. confirmed
- Include date of research for time-sensitive metrics
