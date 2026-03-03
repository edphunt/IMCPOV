// ---- Data you can replace later (CMS, Google Sheet, Airtable, etc.) ----
const POSTS = [
  // New post template:
  // {
  //   id: "my-new-post",
  //   title: "Post title",
  //   deck: "One-line summary",
  //   topic: "Journalism",
  //   type: "article", // article | podcast | webinar
  //   format: "Essay",
  //   author: "Your Name",
  //   date: "2026-02-03",
  //   readMins: 5,
  //   content: `<p>Optional full post HTML for detail view.</p>`,
  // },
  {
    id: "genai-transforming-modern-marketing",
    title: "How Generative AI Is Transforming Modern Marketing",
    deck:
      "A synthesis of key takeaways from the 2025 Tech Summit and Kelly Cutler’s research on how generative AI is reshaping search, SEO/SEM, and marketing strategy.",
    topic: "Gen AI Search Marketing",
    format: "Essay",
    author: "Based on research by Kelly Cutler",
    date: "2026-03-03",
    readMins: 10,
    content: `
<h2>Insights from the 2025 Tech Summit</h2>
<p><strong>Session Summary</strong> — Tech Summit Oct. 9, 2025 · New York City, NY</p>
<p><strong>Transforming Marketing With Generative AI</strong></p>
<p>Presented by Kelly Cutler, Professor and Associate Director of Research, Medill School of Journalism, Media, Integrated Marketing Communications, Northwestern University.</p>
<p>This session examined the evolving digital marketing ecosystem, including the impact of large language models and how they are transforming search and information discovery. As platforms like Google Gemini and ChatGPT integrate generative AI into search experiences, consumers now encounter new options and conversational answers instead of traditional search results pages. The presentation examined the current landscape and explored the effects of AI on content visibility, SEO and paid search strategy, and performance measurement. Through case examples and research insights, participants gained a framework for adapting marketing strategy, analytics, and organizational capabilities to thrive in an AI-driven discovery environment.</p>
<p><a class="inline-link" href="#">Read more about Transforming Marketing with Generative AI.</a></p>

<h2>How Generative AI Is Transforming Modern Marketing</h2>
<p>In a recent presentation titled <em>Transforming Marketing With Generative AI: A Research-Based Approach</em>, Kelly Cutler, Associate Professor of Marketing and Communication at Northwestern University, explored how generative AI is reshaping the marketing landscape and what organizations must do to adapt.</p>
<p>She begins by noting that most marketers feel excited about AI, but many lack the training needed to use it well. Seventy percent say their employer has not offered any AI guidance, which is why AI literacy is quickly becoming one of the most important skills in the field. Contributors such as Informatica reinforce that high-quality, well-managed data is essential for any AI strategy to succeed.</p>
<p><strong>Marketers’ feelings about AI:</strong> 69% excited, 17% mixed.</p>
<p>Cutler explains that CMOs are facing a major challenge: integrating new technology into marketing while still preserving the human strengths that define effective communication. AI can improve efficiency and personalization, but it cannot replace relationship building, empathy, ethical judgment, or cultural understanding.</p>
<p>The research shows that AI is already creating value in areas such as time savings, cost reductions, stronger customer insights, and more personalized engagement. Companies are using generative AI for content development, SEO and SEM improvements, email and audience targeting, analytics, video creation, and persona development.</p>
<p>She points to four major trends shaping the future: more advanced personalization, faster content creation at scale, deeper analytics and testing, and significant changes to SEO and advertising strategies driven by AI tools.</p>
<p>To help organizations respond, Cutler shares two guiding frameworks. The first is Bain’s Five Golden Rules, which focus on consumer-led thinking, holistic AI use, long-term planning, keeping core use cases in-house, and strong CMO leadership. The second is a four-step organizational process that includes forming a cross-functional task force, prioritizing use cases, creating a roadmap, and investing in AI training.</p>
<p><strong>Five principles of responsible AI</strong></p>
<p>Cutler closes with a clear conclusion: marketing has always combined art and science, and AI strengthens both. Organizations that stay adaptable and pair human insight with AI capabilities will be positioned for the greatest success moving forward.</p>

<h2>Search Marketing: A Strategic Approach to SEO and SEM (1st Edition)</h2>
<p><strong>By Kelly Cutler (Author)</strong></p>
<p>Increase the power of your marketing budget and enhance customer reach with fundamental search marketing efforts, SEO and SEM.</p>
<p>This comprehensive guide delves into the dynamic world of both paid and organic search marketing strategies, providing an in-depth understanding of the tactics and techniques that drive successful online visibility and business growth. As the digital marketing landscape continues to evolve, this work gets more technical, time-consuming and costly. Discover how to approach both paid and organic search marketing like a digital strategist by reading this book from digital marketing expert and educator, Kelly Cutler.</p>
<p><em>Search Marketing</em> offers insights into high-level fundamentals and advanced applications. Designed to help marketers and business leaders get more from this essential digital marketing tactic, the book dives into what marketers can do today to help their companies take a more controlled, intentional, and strategic approach to SEO and SEM.</p>
<p>The book delivers techniques for increasing visibility, driving qualified traffic, measuring the success and functionality of SEO, SEM campaigns and advanced methods for campaign optimization. Readers will walk away knowing how to take a more informed approach to the business they bring from sites like Google and Bing, while gaining the insight necessary to effectively oversee search marketing at a strategic level.</p>
`,
  },
  {
    id: "food-quality-dominates-restaurant-choice",
    title: "Food Quality Dominates Restaurant Choice and Spending",
    deck:
      "Prosper’s Nov 2025 survey shows dining out is nearly universal and that food quality is the top driver of restaurant recommendations across formats.",
    topic: "Food Quality Dominates Restaurant Choice and Spending",
    format: "Research Article",
    author: "Dr. Martin Block, Professor Emeritus, Northwestern University, Retail Analytics Council",
    date: "2026-03-03",
    readMins: 10,
    content: `
<h2>Executive Summary</h2>
<p>Dining out remains a near-universal behavior among U.S. adults, with restaurant usage, spending, and preferences shaped by household composition, income, and perceptions of food quality and convenience. Findings from the November 2025 Prosper Insights &amp; Analytics survey (n=8,000) show that more than nine in ten adults have eaten at a restaurant in the past 90 days, with consumers visiting a wide range of establishments and cuisines. Spending patterns reveal sharp differences between households with and without children. At the same time, analytical modeling confirms that food quality overwhelmingly drives restaurant recommendations across both fast food and full-service formats, outweighing factors such as technology, deals, and ambiance.</p>

<ul>
  <li>90% of U.S. adults ate at a restaurant in the past 90 days, visiting an average of 4.69 different restaurants.</li>
  <li>McDonald’s is the most frequently visited restaurant, with 40.1% of adults reporting a visit in the past 90 days.</li>
  <li>American cuisine dominates restaurant choice (53.2%), followed by Mexican (30.1%), Chinese (25.1%), and Italian (22.0%).</li>
  <li>46.8% of adults used carryout or delivery, while 40.7% report regular or occasional use of third-party delivery services.</li>
  <li>Average monthly restaurant spending totals $236.45, representing 4.4% of average income.</li>
</ul>

<h2>Food Quality Dominates Restaurant Choice and Spending</h2>
<p>Dining out (eating at a restaurant) is nearly a universal activity among U.S. adults 18+. The Prosper Insights and Analytics monthly online survey for November 2025 (n=8,000) shows that 90.6% have eaten in at least one restaurant within the past 90 days. Table 1 lists the 51 most popular restaurants by the percentage reported visiting. The average number of different restaurants reported is 4.69. By far the most frequently visited is McDonald’s with 40.1% of all adults eating there at least once within the past 90 days. It should be noted that many of the named restaurants are geographically concentrated so that the visit percentages may appear to be lower than they would be within their trading areas. Consumers appear to enjoy variety in their restaurant selection.</p>

<h3>Table 1: Restaurants in the Past 90 Days</h3>
<table class="data-table">
  <thead>
    <tr>
      <th>Restaurant</th>
      <th>Percent</th>
      <th>Restaurant</th>
      <th>Percent</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>McDonald’s</td><td>40.1</td><td>Cracker Barrel</td><td>7.0</td></tr>
    <tr><td>Chick-fil-A</td><td>24.7</td><td>Papa John’s</td><td>6.9</td></tr>
    <tr><td>Burger King</td><td>23.9</td><td>In-N-Out Burger</td><td>6.6</td></tr>
    <tr><td>Taco Bell</td><td>20.8</td><td>Sonic</td><td>6.5</td></tr>
    <tr><td>Domino’s</td><td>18.9</td><td>Raising Cane’s</td><td>6.2</td></tr>
    <tr><td>Wendy’s</td><td>18.1</td><td>IHOP</td><td>5.7</td></tr>
    <tr><td>Starbucks</td><td>16.4</td><td>Five Guys Burgers and Fries</td><td>5.5</td></tr>
    <tr><td>Dunkin’ Donuts</td><td>14.7</td><td>Jack-In-The-Box</td><td>5.4</td></tr>
    <tr><td>Locally owned restaurant</td><td>14.4</td><td>Denny’s</td><td>5.4</td></tr>
    <tr><td>Subway</td><td>14.2</td><td>Jimmy John’s</td><td>4.8</td></tr>
    <tr><td>KFC</td><td>13.4</td><td>Outback Steakhouse</td><td>4.5</td></tr>
    <tr><td>Chipotle</td><td>13.2</td><td>Whataburger</td><td>4.3</td></tr>
    <tr><td>Pizza Hut</td><td>12.7</td><td>Hardee’s/Carl’s Jr.</td><td>4.2</td></tr>
    <tr><td>Arby’s</td><td>11.4</td><td>Firehouse Subs</td><td>4.1</td></tr>
    <tr><td>Applebee’s</td><td>11.3</td><td>Checkers/Rally’s</td><td>3.7</td></tr>
    <tr><td>Local pizza shop/restaurant</td><td>10.2</td><td>Waffle House</td><td>3.3</td></tr>
    <tr><td>Little Caesars</td><td>10.2</td><td>Bojangles</td><td>3.3</td></tr>
    <tr><td>Dairy Queen</td><td>9.4</td><td>Red Lobster</td><td>3.0</td></tr>
    <tr><td>Olive Garden</td><td>9.4</td><td>Shake Shack</td><td>2.6</td></tr>
    <tr><td>Popeyes</td><td>9.2</td><td>Moe’s Southwest Grill</td><td>2.6</td></tr>
    <tr><td>Chili’s</td><td>9.1</td><td>Qdoba</td><td>2.0</td></tr>
    <tr><td>Panera Bread</td><td>9.0</td><td>TGI Friday’s</td><td>1.9</td></tr>
    <tr><td>Panda Express</td><td>8.3</td><td>Smashburger</td><td>1.8</td></tr>
    <tr><td>Buffalo Wild Wings</td><td>7.3</td><td>Fatburger</td><td>1.8</td></tr>
    <tr><td>Jersey Mike’s Subs</td><td>7.2</td><td>Tim Hortons</td><td>1.6</td></tr>
    <tr><td>Culver’s</td><td>7.2</td><td></td><td></td></tr>
  </tbody>
</table>

<p>Respondents were also asked about the types of restaurants they had eaten at in the past 90 days. Table 2 shows that American cuisine is the overwhelming first choice, followed by Mexican, Chinese, and Italian. Note that the question does not distinguish between fast food (quick service) and full-service restaurants.</p>

<h3>Table 2: Restaurant Types in the Past 90 Days</h3>
<table class="data-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Percent</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>American (ranging from traditional diners to contemporary casual fare)</td><td>53.2</td></tr>
    <tr><td>Mexican</td><td>30.1</td></tr>
    <tr><td>Chinese</td><td>25.1</td></tr>
    <tr><td>Italian</td><td>22.0</td></tr>
    <tr><td>Japanese</td><td>9.0</td></tr>
    <tr><td>Indian</td><td>6.5</td></tr>
    <tr><td>Greek</td><td>6.2</td></tr>
    <tr><td>Mediterranean</td><td>6.1</td></tr>
    <tr><td>French</td><td>5.9</td></tr>
    <tr><td>Caribbean</td><td>5.5</td></tr>
    <tr><td>Cajun/Creole</td><td>5.1</td></tr>
    <tr><td>Thai</td><td>5.0</td></tr>
  </tbody>
</table>

<p>Nearly half (46.8%) report using a home-delivery or carry-out service. About a fourth (26.5%) say they use restaurants more than delivery services. Delivery through third-party services (e.g., DoorDash, Grubhub, Uber Eats) is reported to be used regularly by 13.1% and occasionally by 27.6%, leaving 59.3% who report never using them.</p>

<h2>Restaurant Spending</h2>
<p>Determining monthly spending levels requires dividing the restaurant into categories: full-service with a waiter or waitress, fast food, and pizza. Excluded are stores that may serve food, such as convenience stores, coffee shops and grocery stores. As shown in Table 3, the amount spent each time for fast food and pizza is approximately half that of full service. Fast food has the highest frequency, occurring approximately once per week. Expanding to dollars yields an overall average total of $236.45. This represents 4.4% of the average income. Full service accounts for nearly half of the spending (45.1%), as shown in Table 3.</p>

<h3>Table 3: Spend Monthly Estimates</h3>
<table class="data-table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Amount/Time</th>
      <th>Times/Month</th>
      <th>Month Total</th>
      <th>Total Percent</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Full Service</td><td>28.40</td><td>2.7</td><td>106.68</td><td>45.1</td></tr>
    <tr><td>Fast Food</td><td>15.03</td><td>4.0</td><td>74.16</td><td>31.4</td></tr>
    <tr><td>Pizza</td><td>15.46</td><td>2.5</td><td>55.61</td><td>23.5</td></tr>
    <tr><td>Total Spend</td><td></td><td></td><td>236.45</td><td></td></tr>
  </tbody>
</table>

<figure>
  <figcaption><strong>Figure 1:</strong> Total Monthly Restaurant Spending ($) Quintiles (image forthcoming)</figcaption>
</figure>

<figure>
  <figcaption><strong>Figure 2:</strong> Category of Restaurant Percentages by Overall Spending Quintiles (image forthcoming)</figcaption>
</figure>

<p>A classification regression tree (CRT) identifies the demographic characteristics of monthly restaurant spending. The first split is having children, which divides the total $236.45 into two groups: those with children at $336.74 for 36.2% and those without children at $179.51 for 63.8%. Figures 3 and 4 show the two sub-trees starting at the child divide.</p>

<figure>
  <figcaption><strong>Figure 3:</strong> CRT Total Spending Sub-Tree for Those Having Children (image forthcoming)</figcaption>
</figure>

<p>Beyond having children, the most important variable is household income. The lowest income node is under $25k, to the highest income node at over $105K. This is followed by marital status, with nodes reporting being married are generally higher. Living with an unmarried partner is combined with being married in a few nodes.</p>

<p>For those with no children, as shown in Figure 4, a similar pattern is observed, with household income being the most important variable, ranging from under $25k to over $150k. Marital status is also important, again dividing between married and single. Although marital status is slightly more complicated, with divorced and widowed becoming a node. Age is also very important, with a divide generally in the mid-forties. An exception is in the highest income group, where the divide is ten years older at 58.</p>

<figure>
  <figcaption><strong>Figure 4:</strong> CRT Total Spending Sub-Tree for Those Having No Children (image forthcoming)</figcaption>
</figure>

<h2>Predicting Restaurant Preferences</h2>
<p>The reasons for eating at a fast-food restaurant are abstracted from a list of thirty items using factor analysis to make it easier to understand. The factors are shown in Table 4; the five resulting factors account for 35.5% of the variance in the original list. It is worth noting that delivery service, being open late, and value menus did not load as factors in any of the five factors. The first factor, named Food, comprises quality, trustworthiness, portion size, price, selection, and taste, and accounts for 9.7% of the variance. This is followed by online offerings, including loyalty rewards, special offers, and mobile and online ordering. Healthy consists of clean ingredients (e.g., antibiotic-free, non-GMO, no artificial flavors, etc.), and healthy and organic menu items. Fast consists of drive-thru, fast service and location. Ambiance consists of advertising, ambiance, and décor. The last four factors explain just over 6% each.</p>

<h3>Table 4: Factor Analysis of Fast Food Reasons</h3>
<table class="data-table">
  <thead>
    <tr>
      <th>Food</th>
      <th>Online</th>
      <th>Healthy</th>
      <th>Fast</th>
      <th>Ambiance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Percent of Variance</td><td>9.66</td><td>6.70</td><td>6.61</td><td>6.31</td></tr>
    <tr><td>Quality of Food (0.72)</td><td>Loyalty Rewards (0.66)</td><td>Clean Ingredients (0.56)</td><td>Drive-thru (0.73)</td><td>Advertising (0.60)</td></tr>
    <tr><td>Trustworthy Establishment (0.63)</td><td>Mobile App Ordering (0.59)</td><td>Healthy Menu Options (0.54)</td><td>Fast Service (0.69)</td><td>Ambiance (0.59)</td></tr>
    <tr><td>Portion Size (0.58)</td><td>Coupon/Special Offer (0.59)</td><td>Organic Menu Options (0.45)</td><td>Location (0.40)</td><td>Decor of the Restaurant (0.47)</td></tr>
    <tr><td>Price (0.57)</td><td>Online Ordering (0.44)</td><td></td><td></td><td></td></tr>
    <tr><td>Menu Selection (0.46)</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Appealing Taste (0.43)</td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<p>To assess the relative importance of these factors, a simple regression was performed to predict the likelihood of recommending the restaurant to a friend. The analysis shown in Figure 5 is statistically significant with R = 0.43. Clearly, food is the most important factor, followed by speed. The remaining three, online, healthy, and ambiance, are much less important.</p>

<figure>
  <figcaption><strong>Figure 5:</strong> Fast Food Factors Predicting Recommendation – Beta Coefficients (image forthcoming)</figcaption>
</figure>

<p>The same analysis was conducted for full-service restaurants. As shown in Table 5, the five factors account for 37.3% of the variance. The first factor, which explains 12.1%, is very similar to the fast-food first factor; both are named Food. In full service, however, friendly wait staff and appealing taste have been added. The second factor, online, also includes gluten-free and organic options, delivery services, late hours, and child-friendly features, and accounts for 8.0%. Ambiance includes cleanliness as well as décor and explains 7.6%. Deals include coupons, special offers, and loyalty rewards, and explains 5.2%. Reservations are associated with trustworthiness and are relatively unimportant.</p>

<h3>Table 5: Factor Analysis of Full Service Reasons</h3>
<table class="data-table">
  <thead>
    <tr>
      <th>Food</th>
      <th>Online Ordering</th>
      <th>Ambiance</th>
      <th>Deals</th>
      <th>Reservations</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Percent of Variance</td><td>12.10</td><td>7.95</td><td>7.62</td><td>5.23</td></tr>
    <tr><td>Quality of Food (0.69)</td><td>Online Ordering (0.57)</td><td>Ambiance (0.56)</td><td>Coupon/Special Offer (0.75)</td><td>Reservations Taken (0.54)</td></tr>
    <tr><td>Price (0.63)</td><td>Mobile App Ordering (0.56)</td><td>Clean Ingredients (0.52)</td><td>Special Offers/Discounts (0.53)</td><td>Trustworthy Establishment (0.47)</td></tr>
    <tr><td>Portion Size (0.61)</td><td>Gluten Free Menu Options (0.52)</td><td>Cleanliness (0.52)</td><td>Loyalty Rewards (0.43)</td><td></td></tr>
    <tr><td>Menu Selection (0.59)</td><td>Delivery Service (0.48)</td><td>Decor of the Restaurant (0.52)</td><td></td><td></td></tr>
    <tr><td>Friendly Service (0.58)</td><td>Open Late (0.47)</td><td></td><td></td><td></td></tr>
    <tr><td>Location (0.54)</td><td>Kid Friendly (0.45)</td><td></td><td></td><td></td></tr>
    <tr><td>Friendly Wait Staff (0.52)</td><td>Organic Menu Options (0.45)</td><td></td><td></td><td></td></tr>
    <tr><td>Appealing Taste (0.49)</td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<p>Figure 6 presents a regression analysis similar to the prior Fast Service analysis. The regression is also significant with R2 = 0.55. Food is by far the most important, nearly doubling second-place ambiance. Food is also more important for full-service restaurants than for fast-food restaurants. Ambiance moves up to second place from last place in fast food.</p>

<figure>
  <figcaption><strong>Figure 6:</strong> Full-Service Factors Predicting Recommendation – Beta Coefficients (image forthcoming)</figcaption>
</figure>

<h2>Summary</h2>
<p>Dining out remains nearly universal among U.S. adults, but how and where consumers choose to eat is shaped less by technology or promotions and more by fundamentals. Data indicate that food quality is the strongest driver of restaurant recommendations across both fast-food and full-service dining, outweighing speed, convenience, deals, and digital features. Spending and usage patterns vary significantly by household structure and income, but regardless of format, consumers reward restaurants that get the food quality right.</p>
`,
  },
  {
    id: "ai-search-overviews-report",
    title: "21 Digital Marketing Experts on How AI Search Overviews are Changing Their Industry",
    deck:
      "Medill’s Spiegel Scholars interviewed 21 marketing leaders to map how AI search overviews are reshaping visibility, measurement, and strategy.",
    topic: "AI Search",
    format: "Report",
    author: "Medill Spiegel Research Center's Spiegel Scholars",
    date: "2026-03-03",
    readMins: 10,
    content: `
<p>Last summer, the Medill School of Journalism, Media Integrated Marketing Communications piloted a new program called The Spiegel Scholars Program. We invited three highly qualified master’s students—Ariel, Kristen, and Momo—to help us write a research report on how AI is changing the advertising industry. Over three months, our team interviewed 21 marketing executives, transcribed the interviews, and distilled the transcripts into meaningful themes in the final report. They worked hard and asked smart questions. They also didn’t give up despite receiving many “No’s” during outreach. They told me that “figuring out” how to reach out to people was both the most difficult and most rewarding part of the project. I hope they found the experience as rewarding as working alongside them was for me. I am incredibly proud of both their dedication and the quality of their work. I am pleased to share the final report.</p>
<p>—Ed Hunt, Director of the Spiegel Scholars Program</p>

<p>Search is no longer about what appears on the first page “above the scroll,” it’s about whether your brand shows up at all. As AI-powered search overviews increasingly answer questions before users ever visit a website, marketers see traffic decline, attribution blur, and long-held SEO assumptions break down. Based on in-depth interviews with 21 senior digital marketing leaders, this Medill Spiegel Research Center report examines how AI search is reshaping consumer behavior, redistributing influence across the funnel, and forcing brands to rethink visibility, measurement, and strategy in 2025 and beyond.</p>

<p><a class="inline-link" href="https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2026/01/Digital-Marketing-Experts-on-AI-compressed-compressed.pdf" target="_blank" rel="noopener">Read: 21 Digital Marketing Experts on How AI Search Overviews are Changing Their Industry</a></p>
`,
  },
  {
    id: "newsroom-signals",
    title: "Welcome to IMC POV, Northwestern Medill School's thought leadership hub",
    deck:
      "Jeffery Treem, Professor of integrated marketing communications at Northwestern Medill School, introduces IMC POV and discusses Medill's thought leadership goals for 2026.",
    topic: "Integrated Marketing Communications",
    format: "Note",
    thumbnail: "./assets/images/imcpovfieldnote2.png",
    author: "Jeffery Treem",
    date: "2026-02-04",
    readMins: 5,
  },
  {
    id: "how-marketers-using-ai",
    title: "How marketers are using AI",
    deck:
      "There's a lot of hype around artificial intelligence (AI). Medill has developed a framework for marketers to focus on three applications.",
    topic: "AI",
    format: "Framework",
    author: "Medill Executive Education Team",
    date: "2026-02-04",
    readMins: 5,
    content: `
<p>Marketers can simplify AI strategy by grouping tools into three practical types: <strong>predictive AI</strong>, which helps forecast customer needs and behaviors; <strong>generative AI</strong>, which helps create content and experiences; and <strong>agentic AI</strong>, which helps automate decisions and actions that drive outcomes.</p>

<p><img src="./assets/images/ai-framework.jpg" alt="AI applications framework for marketers" style="width:100%;height:auto;border-radius:12px;" /></p>
`,
  },
  {
    id: "trust-drivers",
    title: "A practical model of trust for high-knowledge audiences",
    deck:
      "Three drivers show up consistently: channel credibility, workflow fit, and language that signals rigor—plus a simple way to audit your messaging.",
    topic: "Strategic Communication",
    format: "Framework",
    author: "IMC POV Editorial Team",
    date: "2026-01-21",
    readMins: 6,
  },
  {
    id: "article2",
    title: "AI Disclosure",
    deck:
      "An AI disclosure framework for marketing and journalism teams.",
    topic: "Integrated Marketing Communication",
    format: "Research Article",
    author: "IMC POV Editorial Team",
    date: "2026-02-03",
    readMins: 6,
    content: `
<h2>What this is</h2>
<p>This is a starter post page. You can write in plain HTML here for now.</p>

<h2>The framework</h2>
<ol>
  <li><strong>Declarative disclosure</strong>: the advertiser explicitly states GenAI involvement.</li>
  <li><strong>Regulatory disclosure</strong>: platform/policy-driven disclosure labels and requirements.</li>
  <li><strong>Infrastructural disclosure</strong>: metadata, watermarks, and provenance tooling.</li>
</ol>

<h2>Practical takeaway</h2>
<p>Use the lightest disclosure that still builds trust—then add proof (process, constraints, auditability) when stakes are high.</p>
`,
  },
  {
    id: "ai-accountability",
    title: "AI can enhance work—but it can’t be accountable for it",
    deck:
      "In journalism and marketing, accountability isn’t a feature you can automate. Here’s how teams design review loops that keep humans responsible.",
    topic: "Media & Technology",
    format: "Essay",
    thumbnail: "./assets/images/imcpovarticle2.png",
    author: "IMC Faculty + Students",
    date: "2026-01-14",
    readMins: 7,
  },
  {
    id: "attention-economy",
    title: "Measurement in the attention economy: what to stop pretending you know",
    deck:
      "A guide to cleaner inference: experiments, quasi-experiments, and the limits of dashboards when channels interact.",
    topic: "Data Analytics & Measurement",
    format: "Guide",
    thumbnail: "./assets/images/imcpovguide.png",
    author: "Medill Analytics Lab",
    date: "2025-12-10",
    readMins: 8,
  },
];

const PODCASTS = [
  {
    id: "pod-episode-04",
    title: "Episode 4: Professor Vijay Viswanathan on what marketers need to know about AI",
    deck: "In this episode, Vijay Viswanathan, who is the Hamad Bin Khalifa Al-Thani Professor of Integrated Marketing Communications and Associate Dean of IMC, covers the essential AI concepts, risks, and opportunities marketers should understand right now.",
    topic: "Media & Technology",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-02-09",
    readMins: 12,
    thumbnail: "./assets/images/imcpovpod2.png",
    detailThumbnail: "./assets/images/imcpovpod2.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/4abvGifNuvA"
    title="Episode 4: Professor Vijay Viswanathan on what marketers need to know about AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
  {
    id: "pod-episode-03",
    title: "Episode 3: Spencer Ford, Sport Lead of Global Energy + Collaborations Marketing at Nike",
    deck: "In this episode, Spencer Ford explains how the best brand managers create seamless experiences by anticipating that customers shop in retail environments with mobile devices in hand and social media shaping their decisions.",
    topic: "Strategic Communication",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-01-26",
    readMins: 12,
    thumbnail: "./assets/images/imcpovpod2.png",
    detailThumbnail: "./assets/images/imcpovpod2.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/xpvOS2Pt0dc"
    title="Episode 3: Spencer Ford, Sport Lead of Global Energy + Collaborations Marketing at Nike"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
  {
    id: "pod-episode-02",
    title: "Episode 2: Srikant Gokhale, Adjunct Lecturer at Northwestern University Medill School",
    deck: "In this episode, Srikant Gokhale provides the history of how strategic thinking has evolved over time, and concludes with a simple explanation: Strategy is a dynamic, customer-centered process.",
    topic: "Strategic Communication",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-02-01",
    readMins: 2,
    thumbnail: "./assets/images/imcpovpod2.png",
    detailThumbnail: "./assets/images/imcpovpod2.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/3_xlj4xF9gs"
    title="Episode 2: Srikant Gokhale, Adjunct Lecturer at Northwestern University Medill School"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
  {
    id: "pod-episode-01",
    title: "Episode 1: Lilly Raymond, Head of MarTech & Operations at Prudential Financial",
    deck: "In this episode, we discuss how marketing leaders can evaluate AI disruption, define success metrics, and collaborate effectively with technology teams.",
    topic: "Media & Technology",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-02-04",
    readMins: 9,
    thumbnail: "./assets/images/imcpovpod2.png",
    detailThumbnail: "./assets/images/imcpovpod2.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/HyQDfZnXgWI"
    title="Episode 1: Lilly Raymond, Head of MarTech & Operations at Prudential Financial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
];

const WEBINARS = [
  {
    id: "web-ai-disclosure",
    title: "Webinar: AI disclosure that builds trust",
    deck: "A practical model for disclosure depth by risk, audience, and channel.",
    topic: "Integrated Marketing Communication",
    format: "Webinar",
    author: "Northwestern Medill Faculty",
    date: "2026-02-10",
    readMins: 60,
    content: "<p>Webinar page placeholder. Add registration or replay link here.</p>",
  },
  {
    id: "web-measurement-design",
    title: "Webinar: Measurement design beyond dashboards",
    deck: "How to pair experiments and qualitative checks to avoid false confidence.",
    topic: "Data Analytics & Measurement",
    format: "Webinar",
    author: "Medill Analytics Lab",
    date: "2026-02-18",
    readMins: 55,
    content: "<p>Webinar page placeholder. Add registration or replay link here.</p>",
  },
];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function uniqueTopics(posts) {
  return [...new Set(posts.map((p) => p.topic))].sort((a, b) => a.localeCompare(b));
}

function renderTopicOptions(topics) {
  const select = $("#topic");
  topics.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    select.appendChild(opt);
  });
}

function renderTopicChips(topics) {
  const wrap = $("#topicChips");
  if (!wrap) return;
  wrap.innerHTML = "";

  const all = document.createElement("button");
  all.className = "chip active";
  all.type = "button";
  all.dataset.topic = "all";
  all.textContent = "All";
  wrap.appendChild(all);

  topics.forEach((t) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.dataset.topic = t;
    b.textContent = t;
    wrap.appendChild(b);
  });

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button.chip");
    if (!btn) return;
    const topic = btn.dataset.topic;

    // Sync select + chips
    $("#topic").value = topic;
    setActiveChip(topic);

    applyFilters();
  });
}

function setActiveChip(topic) {
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.topic === topic));
}

function getCardCoverImage(post) {
  return post.thumbnail || (post.format === "Framework"
    ? "./assets/images/imcpovframework.png"
    : post.format === "Research Article"
      ? "./assets/images/imcpovarticle2.png"
      : post.format === "Podcast"
        ? "./assets/images/imcpovpod2.png"
        : "./assets/images/trust-abstract-nu.svg");
}

function postCard(post) {
  const el = document.createElement("article");
  const formatClass = `format-${String(post.format || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
  el.className = `post ${formatClass}`;
  const coverImage = getCardCoverImage(post);
  const coverStyle = coverImage
    ? ` style="--cover-image: url('${escapeHtml(coverImage)}');"`
    : "";
  const coverClass = coverImage ? "post-cover has-thumbnail" : "post-cover";
  const sideBySide = true;
  el.innerHTML = `
    <div class="topline">
      <span class="topline-left"></span>
    </div>

    ${sideBySide
      ? `<div class="post-main side-by-side">${coverImage ? `<img class="post-cover-image" src="${escapeHtml(coverImage)}" alt="" aria-hidden="true" />` : ""}<div class="post-copy"><h3>${escapeHtml(post.title)}</h3>${post.deck ? `<p>${escapeHtml(post.deck)}</p>` : ""}<p class="read-inline">${post.readMins} min ${post.format === "Podcast" ? "listen" : "read"} →</p></div></div>`
      : `<div class="${coverClass}" aria-hidden="true"${coverStyle}></div><h3>${escapeHtml(post.title)}</h3>${post.deck ? `<p>${escapeHtml(post.deck)}</p>` : ""}<p class="read-inline">${post.readMins} min ${post.format === "Podcast" ? "listen" : "read"} →</p>`}

    <div class="meta meta-stacked">
      <span>${escapeHtml(post.author)}</span>
      <span>${formatDate(post.date)}</span>
    </div>
  `;

  const href = `#post/${encodeURIComponent(post.id)}`;
  el.dataset.href = href;
  el.tabIndex = 0;
  el.setAttribute("role", "link");
  el.setAttribute("aria-label", `Open ${post.title}`);
  el.addEventListener("click", () => {
    window.location.hash = href;
  });
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.hash = href;
    }
  });

  return el;
}

// Very small HTML escape to avoid accidental injection when you swap data sources.
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPosts(posts) {
  const grid = $("#insightsGrid");
  grid.innerHTML = "";
  if (!posts.length) {
    grid.innerHTML = `<p>No posts yet for this selection.</p>`;
    return;
  }
  posts.forEach((p) => grid.appendChild(postCard(p)));
}

function applyFilters() {
  const q = $("#search").value.trim().toLowerCase();
  const t = $("#topic").value;

  const filtered = POSTS.filter((p) => {
    const matchesTopic = t === "all" ? true : p.topic === t;
    const blob = `${p.title} ${p.deck} ${p.topic} ${p.author} ${p.format}`.toLowerCase();
    const matchesQuery = q ? blob.includes(q) : true;
    return matchesTopic && matchesQuery;
  });

  renderPosts(filtered);
}

function initMenu() {
  const btn = $("#menuBtn");
  const mobile = $("#mobileNav");

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    mobile.hidden = open;
  });

  // close menu on link click
  mobile.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      btn.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    }
  });
}

function initNewsletter() {
  const form = $("#newsletterForm");
  if (!form) return;
  const msg = $("#formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#email").value.trim();

    // replace this with your mailing list provider (Mailchimp, Campaign Monitor, etc.)
    msg.textContent = `Thanks—you're in. (Demo) Confirmed: ${email}`;
    form.reset();
  });
}

function seedEditorPick() {
  // Use the first insight in POSTS so home matches the top of Insights.
  const pick = POSTS[0];
  const titleEl = $("#editorTitle") || $("#heroTitle");
  if (titleEl) titleEl.textContent = pick.title;
  $("#editorDesc").textContent = pick.deck;
  $("#editorByline").textContent = pick.author;
  $("#editorMeta").textContent = "";
  const type = $("#editorType");
  if (type) type.textContent = pick.format;
  const topic = $("#editorTopic");
  if (topic) topic.textContent = "";
  $("#editorTime").textContent = formatDate(pick.date);
  const href = `#post/${encodeURIComponent(pick.id)}`;
  const link = $("#editorLink");
  if (link) {
    link.href = href;
    link.textContent = `${pick.readMins} min ${pick.format === "Podcast" ? "listen" : "read"} →`;
  }
  const cover = $(".home-feature-image");
  if (cover) {
    cover.src = getCardCoverImage(pick);
  }

  const card = $("#homeInsightCard");
  if (card) {
    card.dataset.href = href;
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `Open ${pick.title}`);
    card.onclick = () => {
      window.location.hash = href;
    };
    card.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.hash = href;
      }
    };
  }
}

function syncHomeLockupWidth() {
  const lockup = $(".home-lockup");
  const left = $(".nav-left a");
  const rightLinks = $$(".nav-right a");
  const right = rightLinks[rightLinks.length - 1];
  if (!lockup || !left || !right) return;

  const width = right.getBoundingClientRect().right - left.getBoundingClientRect().left;
  const safeWidth = Math.max(280, Math.round(width));
  document.documentElement.style.setProperty("--home-lockup-width", `${safeWidth}px`);
}

function syncHomeStorySlots() {
  const image = $(".home-feature-image");
  const leftCol = $(".home-grid-left");
  const rightCol = $(".home-grid-right");
  const meta = $(".home-feature .card-meta");
  if (!image || !leftCol || !rightCol) return;

  const rect = image.getBoundingClientRect();
  if (!rect.height) return;
  const metaRect = meta ? meta.getBoundingClientRect() : null;

  const targetHeight = metaRect
    ? Math.max(0, Math.round(metaRect.bottom - rect.top))
    : rect.height;

  const gap = 12;
  const slotHeight = Math.max(120, Math.floor((targetHeight - gap) / 2));

  [leftCol, rightCol].forEach((col) => {
    col.style.height = `${targetHeight}px`;
    const slots = Array.from(col.querySelectorAll(".home-placeholder"));
    slots.forEach((slot, idx) => {
      slot.style.height = `${slotHeight}px`;
      slot.style.marginBottom = idx === slots.length - 1 ? "0" : `${gap}px`;
    });
  });
}


let HOME_HTML = "";

function renderHome() {
  const main = $("#main");
  main.innerHTML = HOME_HTML;
  seedEditorPick();
  requestAnimationFrame(syncHomeLockupWidth);
  requestAnimationFrame(syncHomeStorySlots);
}

function renderInsightsPage(filters = {}) {
  const main = $("#main");
  main.innerHTML = `
    <section class="section" id="insights" aria-label="Insights list">
      <div class="container">
        <div class="grid" id="insightsGrid" aria-live="polite"></div>
      </div>
    </section>
  `;

  const filtered = POSTS.filter((p) => {
    const matchesFormat = filters.format ? p.format === filters.format : true;
    const matchesTopic = filters.topic ? p.topic === filters.topic : true;
    return matchesFormat && matchesTopic;
  });

  renderPosts(filtered);
}

function renderSimpleListPage(id, posts) {
  const main = $("#main");
  main.innerHTML = `
    <section class="section" id="${id}" aria-label="${escapeHtml(id)} list">
      <div class="container">
        <div class="grid" id="insightsGrid" aria-live="polite"></div>
      </div>
    </section>
  `;

  renderPosts(posts);
}

function renderCollectionPage(id, title, subtitle, posts) {
  const main = $("#main");
  main.innerHTML = `
    <section class="section" id="${id}">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>${escapeHtml(title)}</h2>
            <p class="section-sub">${escapeHtml(subtitle)}</p>
          </div>
        </div>
        <div class="grid" id="insightsGrid" aria-live="polite"></div>
      </div>
    </section>
  `;
  renderPosts(posts);
}

function renderNewsletterPage() {
  const main = $("#main");
  main.innerHTML = `
    <section class="section cta" id="newsletter" aria-labelledby="newsletterTitle">
      <div class="container newsletter">
        <div>
          <h2 id="newsletterTitle">Get IMC POV in your inbox</h2>
          <p class="section-sub">
            A short, editorial digest—new frameworks, new research, and the best work across Medill.
          </p>
        </div>
        <form class="form" id="newsletterForm">
          <label class="sr-only" for="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@domain.com" required />
          <button class="btn primary" type="submit">Subscribe</button>
          <p class="fineprint" id="formMsg" role="status" aria-live="polite">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  `;
  initNewsletter();
}

function renderPostDetail(id) {
  const main = $("#main");
  const post = [...POSTS, ...PODCASTS, ...WEBINARS].find((p) => p.id === id);

  if (!post) {
    main.innerHTML = `
      <section class="section">
        <div class="container">
          <p><a class="read" href="#insights">← insights</a></p>
          <h1>Post not found</h1>
          <p>The requested post does not exist.</p>
        </div>
      </section>
    `;
    return;
  }

  const backHash = post.format === "Podcast"
    ? "#podcasts"
    : post.format === "Webinar"
      ? "#webinars"
      : "#insights";
  const backLabel = post.format === "Podcast"
    ? "podcasts"
    : post.format === "Webinar"
      ? "webinars"
      : "insights";

  const detailCoverClass = post.format === "Podcast" ? "detail-cover detail-cover-half" : "detail-cover";
  const hideDetailCover = post.id === "newsroom-signals";
  const detailCoverSrc = hideDetailCover
    ? ""
    : post.format === "Podcast"
    ? (post.detailThumbnail || "./assets/images/imcpovpod2.png")
    : post.thumbnail;
  const detailCover = detailCoverSrc
    ? `<p><img class="${detailCoverClass}" src="${escapeHtml(detailCoverSrc)}" alt="${escapeHtml(post.title)} thumbnail" /></p>`
    : "";

  main.innerHTML = `
    <section class="section">
      <div class="container">
        <p><a class="read" href="${backHash}">← ${backLabel}</a></p>
        <article>
          ${post.format === "Podcast"
            ? `<p class="topline-left"></p>
          <div>${
            post.content
              ? post.content
              : "<p>No full content yet. Check back soon for the complete article.</p>"
          }</div>
          <h1 class="podcast-detail-title">${escapeHtml(post.title).replaceAll("\n", "<br />")}</h1>
          <p class="detail-deck-with-read">
            <span>${escapeHtml(post.deck)}</span><br />
            <span class="read">${post.readMins} min listen →</span>
          </p>
          <div class="post-byline-block">
            <div>${escapeHtml(post.author)}</div>
            <div>${formatDate(post.date)}</div>
          </div>`
            : `<p class="topline-left"></p>
          ${detailCover}
          <h1>${escapeHtml(post.title).replaceAll("\n", "<br />")}</h1>
          <p class="detail-deck-with-read">
            <span>${escapeHtml(post.deck)}</span><br />
            <span class="read">${post.readMins} min read →</span>
          </p>
          <div class="post-byline-block">
            <div>${escapeHtml(post.author)}</div>
            <div>${formatDate(post.date)}</div>
          </div>
          <div>
            ${
              post.content
                ? post.content
                : "<p>No full content yet. Check back soon for the complete article.</p>"
            }
          </div>`}
        </article>
      </div>
    </section>
  `;

  if (post.format === "Podcast") primeVideoThumbnail(2);
}

function primeVideoThumbnail(seconds = 2) {
  const v = document.querySelector("video");
  if (!v) return;

  const resetStartOnFirstPlay = () => {
    try {
      v.currentTime = 0;
    } catch (_) {
      // Ignore reset failures on stricter browser policies.
    }
  };

  const seek = () => {
    try {
      v.currentTime = seconds;
      v.pause();
      v.addEventListener("play", resetStartOnFirstPlay, { once: true });
    } catch (_) {
      // Ignore seek failures for stricter browser autoplay policies.
    }
  };

  if (v.readyState >= 1) seek();
  else v.addEventListener("loadedmetadata", seek, { once: true });
}

function setActiveNav(hash) {
  let activeHash = "";
  if (hash.startsWith("#insights")) activeHash = "#insights";
  else if (hash.startsWith("#podcasts")) activeHash = "#podcasts";
  else if (hash.startsWith("#webinars")) activeHash = "#webinars";
  else if (hash.startsWith("#newsletter")) activeHash = "#newsletter";

  $$("header .nav a, #mobileNav a").forEach((a) => {
    const isActive = activeHash && a.getAttribute("href") === activeHash;
    a.classList.toggle("active", Boolean(isActive));
  });
}

function renderRoute() {
  const hash = window.location.hash || "";
  setActiveNav(hash);
  const m = hash.match(/^#post\/(.+)$/);
  if (m) {
    renderPostDetail(decodeURIComponent(m[1]));
    return;
  }
  const insightsFilterMatch = hash.match(/^#insights\/(format|topic)\/(.+)$/);
  if (insightsFilterMatch) {
    const key = insightsFilterMatch[1];
    const value = decodeURIComponent(insightsFilterMatch[2]);
    renderInsightsPage({ [key]: value });
    return;
  }
  if (hash === "#insights") {
    renderInsightsPage();
    return;
  }
  if (hash === "#podcasts") {
    renderSimpleListPage("podcasts", PODCASTS);
    return;
  }
  if (hash === "#webinars") {
    renderSimpleListPage("webinars", WEBINARS);
    return;
  }
  if (hash === "#newsletter") {
    renderNewsletterPage();
    return;
  }
  renderHome();
}

function init() {
  $("#year").textContent = String(new Date().getFullYear());
  HOME_HTML = $("#main").innerHTML;

  showLocalFileWarning();
  initMenu();
  renderRoute();
  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("resize", () => {
    syncHomeLockupWidth();
    syncHomeStorySlots();
  });
  window.addEventListener("load", syncHomeStorySlots);
}

document.addEventListener("DOMContentLoaded", init);

function showLocalFileWarning() {
  if (window.location.protocol !== "file:") return;

  const banner = document.createElement("div");
  banner.className = "local-warning";
  banner.innerHTML = `
    <div class="container local-warning-inner">
      <span>
        <strong>Local preview:</strong> Safari blocks embedded videos on file:// pages.
        Run <code>./serve.sh</code> and open <code>http://localhost:8000</code>.
      </span>
      <a href="http://localhost:8000/" target="_blank" rel="noopener">Open local server</a>
    </div>
  `;

  const skip = document.querySelector(".skip");
  if (skip && skip.parentNode) {
    skip.parentNode.insertBefore(banner, skip.nextSibling);
  } else {
    document.body.insertBefore(banner, document.body.firstChild);
  }
}
