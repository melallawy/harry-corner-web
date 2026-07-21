---
name: copywriting
description: Use when the user needs product copy, blog content, email sequences, social media posts, or ad copy. Pulls data from customer-research and SEO skills to generate keyword-optimized, persona-targeted copy. Trigger with "write copy for", "generate product description", "write email for", or similar.
---

# Copywriting Skill

When the user provides a product, pull data from the `customer-research` and `seo` skill outputs to generate conversion-focused copy. This skill does NOT do its own research — it uses the research already completed by the other two skills.

## Data Sources (Required Before Writing)

Before writing any copy, the following must exist in `research/`:

1. **Customer Research CSV** — `research/[product]-customer-research.csv`
   - Competitor analysis (pricing, features, differentiators)
   - Customer personas (names, pain points, goals, values)
   - Tone & voice guidelines (brand voice, competitor tone analysis)
   - Market insights (complaints, unmet needs, pricing sweet spot)

2. **SEO Keywords CSV** — `research/[product]-seo-keywords.csv`
   - Keywords by tier (Primary, Secondary, Supporting, Long Tail)
   - Keyword categories (Exact Match, Broad, Phrase, Long Tail, Question, Buyer Intent, Comparison, Problem Aware, Benefit)
   - Search intent for each keyword

3. **SEO Summary** — `research/[product]-seo-summary.md`
   - On-page SEO recommendations (title tag, meta description, H1, H2s)
   - Content gap analysis
   - Key messages

## Copy Types & Templates

### 1. PRODUCT PAGE COPY

#### A. Amazon Listing (Title + 5 Bullets + Description)

**Title Formula:**
```
[Brand] [Product Name] - [Key Feature 1] [Key Feature 2] [Key Feature 3] | [Use Case 1] [Use Case 2] [Use Case 3] | [Differentiator]
```

**Rules:**
- Max 200 characters for title
- Front-load primary keyword (Tier 1)
- Include 2-3 secondary keywords naturally
- Use pipes (|) or hyphens (-) as separators
- No all caps except brand name
- No promotional pricing or claims

**5 Bullets Formula:**
Each bullet follows: **[BENEFIT HEADLINE]** — [Feature that delivers benefit]. [Social proof or proof point]. [Address objection].

| Bullet | Focus | Keyword Type |
|--------|-------|--------------|
| 1 | Primary benefit + main use case | Tier 1 Primary |
| 2 | Durability / quality | Tier 2 Secondary (benefit) |
| 3 | Ease of use / cleaning | Tier 2 Secondary (problem aware) |
| 4 | Versatility / multiple uses | Tier 3 Supporting (broad) |
| 5 | Guarantee / social proof | Tier 2 Secondary (buyer intent) |

**Description Formula (A+ Content):**
```
Paragraph 1: Hook — Name the pain point the persona feels
Paragraph 2: Solution — How the product solves it
Paragraph 3: Proof — Social proof, reviews, guarantee
Paragraph 4: CTA — What to do next
```

#### B. DTC Product Page

**Structure:**
```
H1: [Primary Keyword] — [Emotional Benefit]
Subtitle: [Supporting Keyword Phrase]

[2-3 sentence hook addressing Persona's #1 pain point]

[Feature/Benefit blocks — 3-4 columns]
- Feature 1 → Benefit 1 → Proof point
- Feature 2 → Benefit 2 → Proof point
- Feature 3 → Benefit 3 → Proof point

[Social proof section — reviews, stars, count]

[FAQ section using Question keywords]

[CTA with urgency]
```

### 2. BLOG POST COPY

#### A. Comparison Post (vs competitors)

**Title:** [Product A] vs [Product B]: Which [Use Case] is Better in [Year]?

**Structure:**
```
H1: [Product A] vs [Product B]: [Benefit] in [Year]

Intro (150 words): Hook with persona pain point + what this comparison covers

Quick Verdict Box:
| Feature | [Product A] | [Product B] |
|---------|-------------|-------------|
| Price | | |
| Rating | | |
| Key Feature | | |
| Best For | | |

Section 1: What is [Product A]? (use Tier 2 keywords)
Section 2: What is [Product B]? (use Tier 2 keywords)
Section 3: Head-to-Head Comparison (use Comparison keywords)
Section 4: Pros & Cons (address persona objections)
Section 5: Which Should You Choose? (persona-based recommendation)
Conclusion: Final verdict + CTA

Target Keywords: Comparison + Question keywords from SEO CSV
```

#### B. How-To Post

**Title:** How to [Action]: [Step-by-Step Guide] ([Year])

**Structure:**
```
H1: How to [Action]: [Step-by-Step Guide] ([Year])

Intro (100 words): Why this matters to the persona

What You'll Need (use product as solution):
- [Product] (link to product page)
- [Other tools]

Step 1: [Action] (use Problem Aware keywords)
Step 2: [Action]
Step 3: [Action]
Step 4: [Action]
Step 5: [Action]

Pro Tips (use Long Tail keywords)

FAQ (use Question keywords from SEO CSV)

Conclusion + CTA

Target Keywords: Question + Problem Aware keywords from SEO CSV
```

#### C. List Post (Best [Product] Year)

**Title:** [Number] Best [Product] for [Use Case] ([Year] Guide)

**Structure:**
```
H1: [Number] Best [Product] for [Use Case] ([Year] Guide)

Intro (150 words): What we looked for + quick picks

Quick Picks Box:
| Rank | Product | Best For | Price |
|------|---------|----------|-------|

#1. [Our Product] — Best Overall
- Why it wins (use Tier 1 keywords)
- Key features
- Who it's for (persona match)
- Pros/Cons

#2-5: Competitors (honest comparison)

Buying Guide Section (use Broad + Long Tail keywords)

FAQ (use Question keywords)

Conclusion + CTA

Target Keywords: Phrase + Long Tail keywords from SEO CSV
```

### 3. EMAIL COPY

#### A. Welcome Sequence (5 emails)

| Email | Subject Line | Focus | Keywords |
|-------|-------------|-------|----------|
| 1 | Welcome to [Brand] — Here's What Makes Us Different | Brand story + values | Tier 1 Primary |
| 2 | The Problem With [Old Tool] (And What to Use Instead) | Pain point education | Problem Aware |
| 3 | How [Product] Changed [Persona Name]'s [Activity] | Social proof / case study | Tier 2 Secondary |
| 4 | Your [Product] Questions, Answered | FAQ + objection handling | Question keywords |
| 5 | Ready to [Desired Outcome]? (Special Offer) | Conversion / CTA | Buyer Intent |

#### B. Product Launch Email

**Subject:** [Emotional Hook] — Introducing [Product]

**Structure:**
```
Preheader: [Supporting benefit]

[Hero image]

H1: [Product Name]

[1-sentence hook addressing Persona's #1 pain point]

[3 benefit blocks with icons]

"Before [Product], I was [pain point]. Now I [desired outcome]." — [Customer Name]

[CTA button: Get Yours →]

[P.S. with urgency or bonus]
```

#### C. Abandoned Cart Email

**Subject:** You left something behind (it's still waiting)

**Structure:**
```
Hey [Name],

You were looking at [Product Name] — here's why [X,XXX] bakers love it:

✓ [Benefit 1 from Tier 2 keywords]
✓ [Benefit 2 from Tier 2 keywords]  
✓ [Benefit 3 from Tier 2 keywords]

[Social proof: "Rated 4.8/5 by [X,XXX]+ bakers"]

[CTA: Complete Your Order →]

Questions? Reply to this email — we're real people.

[Brand signature]
```

### 4. SOCIAL MEDIA COPY

#### A. Instagram/Facebook Post

**Format:**
```
[Hook — attention-grabbing first line]

[Problem statement — persona pain point]

[Solution — how product solves it]

[Social proof or benefit]

[CTA — link in bio / shop now]

[Hashtags — use keyword categories]
```

**Hashtag Strategy:**
- 3-5 Exact Match keywords
- 3-5 Broad Match keywords
- 2-3 Question/Long Tail keywords
- 2-3 community hashtags (#sourdough #breadbaking #homebaker)
- 1-2 branded hashtags

#### B. TikTok/Reels Script

**Hook (0-3 seconds):** "[Pain point] is ruining your [activity]. Watch this."

**Problem (3-8 seconds):** Show the old way failing

**Solution (8-20 seconds):** Show product solving it

**Proof (20-25 seconds):** Before/after or social proof

**CTA (25-30 seconds):** "Link in bio" or "Comment [WORD] for the link"

#### C. Twitter/X Thread

```
1/ [Hook — controversial or surprising statement about the product category]

2/ [Problem — why the old way doesn't work]

3/ [Solution — introduce the product]

4/ [Feature 1 + benefit]

5/ [Feature 2 + benefit]

6/ [Social proof — reviews, numbers]

7/ [CTA — where to buy]
```

### 5. AD COPY

#### A. Google Ads (Search)

**Headline 1 (30 chars):** [Primary Keyword] — [Benefit]
**Headline 2 (30 chars):** [Secondary Keyword] — [Proof]
**Headline 3 (30 chars):** [CTA] + [Urgency]

**Description 1 (90 chars):** [Pain point]. [Solution]. [Social proof]. Free shipping on orders $XX+.

**Description 2 (90 chars):** [Benefit 1]. [Benefit 2]. [Guarantee]. Rated [X] stars by [X,XXX]+ bakers.

**Extensions:**
- Sitelinks: Recipes | How-To Guides | Reviews | FAQ
- Callouts: Free Shipping | Lifetime Guarantee | Dishwasher Safe
- Structured Snippets: Types: Whisk, Lame, Scraper, Kit

#### B. Facebook/Instagram Ads

**Primary Text (125 chars):** [Pain point]. [Solution]. [Social proof].

**Headline (40 chars):** [Primary Keyword] — [Benefit]

**Description (30 chars):** [Supporting keyword] | [CTA]

**CTA Button:** Shop Now

**Creative:** Product in use (lifestyle) + text overlay with key benefit

#### C. Amazon PPC

**Auto Campaigns:** Let Amazon match keywords from listing

**Manual Campaigns:**
- Exact: Tier 1 Primary keywords
- Phrase: Tier 2 Secondary keywords
- Broad: Tier 3 Supporting keywords
- Negative: Brand competitor terms (don't bid on own brand)

### 6. FAQ CONTENT

**Format for each FAQ:**
```
Q: [Question keyword from SEO CSV]

A: [Direct answer in 2-3 sentences using Tier 2 keywords naturally]

[Optional: Link to related blog post or product page]
```

**Required FAQs:**
1. What is [product]? (Exact Match keyword)
2. How do you use [product]? (Question keyword)
3. What makes [product] different from [competitor]? (Comparison keyword)
4. Is [product] dishwasher safe? (Benefit keyword)
5. What's included in [product] [set/kit]? (Long Tail keyword)
6. How long does [product] last? (Problem Aware keyword)
7. Can I use [product] for [alternative use]? (Broad Match keyword)
8. What's your return policy? (Buyer Intent keyword)

## Tone of Voice Application

When writing copy, apply the tone guidelines from the customer research:

| Situation | Tone | Example |
|-----------|------|---------|
| Product Page | Confident + Benefit-led | "Powers through the thickest doughs in seconds." |
| Blog Post | Educational + Helpful | "Here's what most bakers get wrong about mixing." |
| Email | Warm + Personal | "We get it — finding the right tool shouldn't be this hard." |
| Social Media | Engaging + Relatable | "POV: Your wooden spoon just gave up on your sourdough." |
| Ads | Direct + Urgent | "Stop fighting your dough. Start mixing it." |
| FAQ | Clear + Reassuring | "Yes, it's dishwasher safe. Because we know cleanup matters." |

## Persona-Based Copy Variations

When the same product targets multiple personas, create copy variations:

| Persona | Hook Style | Proof Type | CTA Style |
|---------|-----------|------------|-----------|
| Sourdough Sarah | "Master your sourdough mixing" | Expert reviews, detailed specs | "Shop Now" |
| Gift-Giving Greg | "The gift every baker wants" | Gift wrapping, bundle options | "Buy as Gift" |
| Newbie Nora | "Your first dough whisk (the only one you'll need)" | Beginner-friendly, 2-pack value | "Start Baking" |

## Output Formats

### CSV (for bulk copy)
```
Copy Type,Headline,Body,CTA,Target Keyword,Target Persona,Platform,Character Count
```

### Markdown (for review)
Organized by copy type with clear headers, word counts, and keyword annotations.

### JSON (for CMS integration)
```json
{
  "product_page": {
    "title": "",
    "bullets": [],
    "description": "",
    "faqs": []
  },
  "blog_posts": [],
  "emails": [],
  "social": [],
  "ads": []
}
```

## Quality Checklist

Before finalizing any copy, verify:

- [ ] Primary keyword appears in first 50 words
- [ ] Secondary keywords used naturally (not stuffed)
- [ ] Copy speaks to specific persona (not generic)
- [ ] Pain point addressed before solution offered
- [ ] Social proof included (reviews, ratings, numbers)
- [ ] CTA is clear and single-action
- [ ] Tone matches platform (formal for email, casual for social)
- [ ] No competitor brand names in ad copy
- [ ] All claims are verifiable
- [ ] Character counts within platform limits
