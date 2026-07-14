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
    id: "tiktok-messenger-shapes-science-engagement",
    title: "On TikTok, Who Delivers the Message Shapes How It Lands",
    deck:
      "Chao Yu’s research shows that visible identity and communication style shape how audiences engage with science content on TikTok.",
    topic: "Social Media",
    format: "Research Insight",
    author: "Chao Yu",
    date: "2026-07-08",
    readMins: 4,
    thumbnail: "./assets/images/article-tiktok-messenger.svg?v=20260713-1",
    content: `
<p>On TikTok, who is on screen and how they speak shape how audiences respond to science. In a recent study, my co-authors Yuhan Li and Hang Lu (University of Michigan) and I analyzed 10,800 science videos posted in the United States and their 448,002 comments, testing how a creator’s visible identity and communication style influence public engagement.</p>

<p>Videos hosted by women, and by Black and Asian creators, generally drew fewer views, likes, and comments than those hosted by men and White creators, even after we accounted for audience size and posting history. Among women of color, Latina creators faced the most consistent disadvantage, receiving lower engagement on every metric and more toxic comments. We think fast, low-effort scrolling pushes audiences toward identity-based shortcuts, a tendency that recommendation systems can then amplify.</p>

<p>Style mattered too, often in ways that fit audience expectations. Audiences favored an affective, warm tone from women and an aggressive, authoritative tone from men. Aggressive language raised engagement overall, yet it was also the only style that drew more toxic comments, a tradeoff worth weighing. One style helped broadly: an informal, conversational tone lifted engagement across the racial groups we examined.</p>

<p>For marketers and communicators, the lesson is practical. The messenger and the manner are not neutral. Consider who fronts your content, weigh how tone will read coming from that person, and treat plain, accessible language as a dependable way to widen reach. Recognizing these hidden biases is a first step toward reaching audiences more fairly and effectively.</p>

<h2>About the Research</h2>
<p>Chao Yu (Ph.D., Cornell University) is an Assistant Professor in the Department of Integrated Marketing Communications at the Medill School at Northwestern University. His research examines the social impacts of new media, using large-scale data to uncover hidden patterns on digital platforms that can create inequality or bias. The study described here, “Navigating intersectional expectations: a computational multimodal analysis of the effects of identities and communication styles on public engagement with science on TikTok” appeared in <em>Information, Communication and Society</em> (2026).</p>
`,
  },
  {
    id: "ed-malthouse-book-of-why",
    title: "Ed Malthouse on The Book of Why",
    deck:
      "Malthouse reflects on why marketers need causal thinking, not just better prediction, to understand what works and design stronger strategies.",
    topic: "Marketing Analytics",
    format: "Book Reflection",
    author: "Ed Malthouse",
    date: "2026-07-08",
    readMins: 4,
    thumbnail: "./assets/images/article-book-of-why.svg?v=20260714-2",
    content: `
<p><strong>How did <em>The Book of Why</em> by Dana Mackenzie and Judea Pearl change the way you think or work?</strong></p>
<p>It reinforced for me that it’s not enough to know what works in marketing. You have to understand why it works. When we see that a campaign increases conversion or retention, the real value comes from unpacking the mechanism behind that effect. Is it building trust? Increasing relevance? Reducing uncertainty? Once you understand the “why,” you can design entirely new strategies that target the same underlying driver, rather than just repeating past tactics.</p>

<p><strong>Which chapter stood out most to you, and what made it memorable?</strong></p>
<p>The chapters that distinguish between correlation and causation stood out most. Pearl shows that simply observing patterns in data isn’t enough. We need a structured way to think about cause-and-effect relationships. What made it memorable is how he uses simple, intuitive examples to show how easy it is to misinterpret data without a causal framework and how much more powerful your decisions become when you get the causal story right.</p>

<p><strong>Why does this book matter for other researchers or practitioners today?</strong></p>
<p>We’re surrounded by data and increasingly sophisticated analytics, but more data doesn’t automatically lead to better decisions. This book provides a way to think clearly about cause and effect, which is essential for evaluating marketing performance and making strategic choices. For practitioners, it’s a reminder that the goal isn’t just prediction; it’s understanding. And that understanding is what allows you to innovate, adapt, and build more effective marketing programs over time.</p>
`,
  },
  {
    id: "jacqueline-babb-world-cup-brands",
    title: "Jacqueline Babb on What Brands Should Learn from the World Cup",
    deck:
      "Babb explains why the World Cup gives brands a rare chance to connect with national pride, shared belonging, and the human emotions that make sports powerful.",
    topic: "Sports Marketing",
    format: "Q&A",
    author: "Jacqueline Babb",
    date: "2026-07-08",
    readMins: 5,
    thumbnail: "./assets/images/article-world-cup-brands.svg?v=20260714-2",
    content: `
<p><strong>You were quoted in the PR Daily article, “Three PR Trends from the Upcoming World Cup” saying, “Sports fans tend to have affinity for their home teams, allowing brands to align with national pride.” Tell us more about that.</strong></p>
<p>Collective pride is a powerful force. The 2026 World Cup coincides with the semiquincentennial (250th anniversary) of the United States, offering brands a once in a generation opportunity to be a part of history. Today, the U.S. is playing Australia. Fans are wearing Nike jerseys at the game and at home to be a part of a shared community, creating a sense of belonging.</p>

<p><strong>You recently attended Jordan’s historic first World Cup game. What can brands learn from the culture of the World Cup?</strong></p>
<p>The world comes together for the World Cup in a way that we rarely see outside of sports. Humanity at its best is on display, as people come out to support athletes. In an era where data is paramount, it’s easy to become transactional with customers. The World Cup reminds us that humanity is at our core.</p>

<p><strong>Did any brands stand out to you at the game you attended?</strong></p>
<p>The Austria-Jordan game was held at Levi’s Stadium just outside of San Francisco. FIFA has a policy prohibiting non-sponsor stadium names. FIFA required Levi’s to cover their iconic logo on the stadium building. Levi’s took this as an opportunity to create buzz. They covered the logo with a white canvas cut to the exact proportions of the signs and then leaned into the redacted message across social media.</p>

<p><strong>What mistakes do brands make when they try to attach themselves to major sports or cultural events?</strong></p>
<p>Brands forget that fans watch sports to connect to the very human emotions of pride and belonging. While the World Cup sponsors garner a lot of impressions, equity is won by leveraging the emotion of the game.</p>

<p><a class="inline-link" href="https://www.nytimes.com/video/the-athletic/100000010977435/why-is-fifa-covering-up-logos-in-stadiums.html?smid=url-share" target="_blank" rel="noopener">Watch: Why Is FIFA Covering Up Logos in Stadiums?</a></p>
`,
  },
  {
    id: "what-cuteness-can-teach-marketers",
    title: "What Cuteness Can Teach Marketers",
    deck:
      "Research from Carolyn Wells Keller and Chethana Achar shows that cute design can signal values, shape audience response, and become part of marketing strategy.",
    topic: "Consumer Psychology",
    format: "Research Insight",
    author: "Carolyn Wells Keller and Chethana Achar",
    date: "2026-07-08",
    readMins: 3,
    thumbnail: "./assets/images/article-cuteness-marketers.svg?v=20260714-2",
    content: `
<p>Cuteness is easy to dismiss. It can seem unserious or childish. But cute design is everywhere: keychains, mugs, stickers, plush toys, phone cases, mascots, packaging, and social media content. When a design language shows up this often, it is probably doing more than making people smile.</p>

<p>Carolyn Wells Keller and Chethana Achar’s research shows that “cuteness” works differently depending on the audience and the product. Their studies find that political conservatives are more likely than liberals to prefer baby-like cute design: round shapes, large eyes, soft features, and other cues associated with infants. The reason is that baby-like cuteness signals innocence, purity, and wholesomeness, values that tend to matter more to conservative consumers.</p>

<p>The broader lesson is that design choices carry values. Aesthetic decisions are not neutral wrappers placed around a product after the real strategy is done. They are part of the strategy. Marketers should ask not only whether a design gets attention, but what it signals, who it resonates with, and whether it fits the product category.</p>

<p>Cute can work. But only when it means the right thing to the right audience.</p>
`,
  },
  {
    id: "ai-needs-roi-reality-check",
    title: "AI Needs an ROI Reality Check",
    deck:
      "AI adoption is widespread, but marketing leaders need to move beyond pilots and productivity gains toward measurement, governance, and business outcomes.",
    topic: "AI Strategy",
    format: "Essay",
    author: "Kelly Cutler",
    date: "2026-07-08",
    readMins: 4,
    thumbnail: "./assets/images/article-ai-roi-reality-check.svg?v=20260713-2",
    content: `
<p>For the past year, many organizations have treated AI like a race: Who is using it? Who has adopted it fastest? Who has the most pilots underway? But the more useful question is no longer whether companies are experimenting with AI. They are. The question is whether those experiments are changing anything that matters.</p>

<p>Kelly Cutler’s research from the Medill Spiegel Research Center points to a problem many marketing and communications leaders are now facing. AI adoption is widespread, but measurement has not caught up. Organizations can often point to productivity gains: faster drafts, quicker summaries, automated reports, more efficient workflows. Those benefits are real. But they are also incomplete.</p>

<p>If AI only saves time, it remains a tool. If it improves decisions, strengthens customer understanding, increases revenue, reduces risk, or changes how teams create value, then it becomes a strategy.</p>

<p>That distinction matters. Too many organizations are still in the novelty stage of AI. They are testing tools, encouraging experimentation, and celebrating efficiency. The next stage is harder. It requires integration, governance, measurement, and a clearer connection to business outcomes.</p>

<p>Marketing and communications teams should be especially careful here. AI can make content easier to produce, but more content is not automatically better communication. The real test is whether AI helps organizations understand audiences more deeply, act more intelligently, and measure impact more honestly.</p>

<p>The AI conversation needs to mature. The future will not belong to organizations that experimented first. It will belong to those that learned how to measure what AI is actually worth.</p>
`,
  },
  {
    id: "is-marketing-measurement-becoming-too-easy",
    title: "Is Marketing Measurement Becoming Too Easy?",
    deck:
      "Julian Runge’s experiment suggests generative AI and open-source modeling tools are lowering the barrier to sophisticated marketing measurement.",
    topic: "Marketing Analytics",
    format: "Research Insight",
    author: "Julian Runge",
    date: "2026-07-08",
    readMins: 4,
    thumbnail: "./assets/images/article-marketing-measurement.svg?v=20260714-2",
    content: `
<p>Marketing measurement has never been simple. For years, media and marketing mix modeling required specialized training, expensive tools, careful data preparation, and a lot of time. That difficulty created a practical barrier: many organizations wanted better measurement, but few had the people or systems to do it well.</p>

<p>That barrier may be starting to fall.</p>

<p>Julian Runge’s recent experiment points to a real shift. By combining open-source marketing analytics tools with generative AI, he was able to produce marketing mix modeling results in a fraction of the time it would normally take a skilled marketing scientist. Tools like Robyn, Meridian, and PyMC-Marketing are making sophisticated modeling more accessible. Generative AI then lowers the activation cost by helping users load data, make assumptions, run models, and explain results.</p>

<p>That does not mean marketing measurement is “solved.” Models still depend on data quality, business context, assumptions, and judgment. A technically correct model can still answer the wrong question. Institutional knowledge still matters. So does knowing when not to trust the output.</p>

<p>But the center of gravity is changing. The scarce skill may no longer be running the model. It may be knowing what to ask, what assumptions are reasonable, how to interpret uncertainty, and how to connect measurement to decisions.</p>

<p>For marketers, this is exciting and uncomfortable. Better tools can democratize measurement, but they can also create false confidence. The future of marketing analytics will not be expert versus AI. It will be experts using AI to move faster, ask better questions, and spend less time fighting the machinery.</p>
`,
  },
  {
    id: "experiential-learning-career-readiness",
    title: "Beyond Theory: How Experiential Learning Shapes Career Readiness",
    deck:
      "Katherine Lelek explains how experiential learning helps students build confidence, professional judgment, resilience, and career-ready skills.",
    topic: "Career Readiness",
    format: "Essay",
    author: "Katherine Lelek, Director of Career Management, Medill School",
    date: "2026-07-08",
    readMins: 6,
    thumbnail: "./assets/images/article-career-readiness.svg?v=20260714-3",
    content: `
<p>Experiential learning is where career development moves from theory to practice. Students can learn about networking, leadership, strategic communication, or teamwork in the classroom, but there is no substitute for actually doing the work. Experiential learning gives students the opportunity to apply concepts in authentic settings, reflect on those experiences, and adapt in real time. <a class="inline-link" href="https://learningfromexperience.com/videos/8-things-to-know-about-the-experiential-learning-cycle/" target="_blank" rel="noopener">The Kolb Experiential Learning Cycle</a> is a widely recognized and used concept in Experiential Learning Theory (ELT). The simplicity and usefulness of the four-stage cycle of experiencing, reflecting, thinking and acting.</p>

<p>After years of coaching students and leaders in their career development and teaching experiential learning courses, I see firsthand how quickly people grow when they are asked to solve real problems. Whether learners are working with clients, completing internships, participating in consulting projects, or engaging in the workplace in other ways, these experiences help them move beyond understanding concepts to developing confidence and professional judgment.</p>

<p>At Northwestern, I see this every day. Students often discover new strengths, clarify career interests, and build resilience through experiential learning. They learn how to navigate ambiguity, collaborate across differences, respond to feedback, and communicate effectively. These are skills that employers consistently identify as critical for career success. Research, for example from the National Association of Colleges and Employers (NACE), also suggests that participants in experiential learning <a class="inline-link" href="https://www.naceweb.org/talent-acquisition/trends-and-predictions/impacts-of-experiential-learning-on-the-gen-z-early-career-experience" target="_blank" rel="noopener">report stronger professional networks, greater career satisfaction, and better early career outcomes</a>.</p>

<p>One of the biggest challenges in implementing experiential learning is the misconception that a successful experience is one students enjoy at all times. In reality, some of the most meaningful learning occurs when students encounter ambiguity, receive difficult feedback, or struggle through a challenge. Discomfort and uncertainty are often essential parts of the learning process. The goal is not to ensure every experience is easy or enjoyable, but to create opportunities for reflection, growth, and skill development. Another challenge is that high-quality experiential learning requires significant time, intentional design, and strong support from faculty, staff, and external partners. Meaningful experiences do not happen by accident. They require clear learning outcomes, ongoing coaching, and opportunities for students to connect their experiences to broader academic and professional goals.</p>

<p>The strongest experiential learning experiences challenge learners to address real-world problems while providing meaningful coaching and opportunities for reflection. For Northwestern students, and particularly those in the Medill IMC graduate program, experiential learning is especially powerful because they can immediately apply new ideas to projects, organizations, communities, and beyond. That continuous cycle of learning, practice, reflection, and application is where some of the most meaningful growth occurs.</p>

<p>For readers interested in learning more, I recommend exploring <a class="inline-link" href="https://naceweb.org/research/reports/the-integration-of-career-readiness-into-experiential-learning-and-high-impact-practices" target="_blank" rel="noopener">NACE's recent report</a> on the integration of career readiness into experiential learning and high-impact practices.</p>

<h2>About Katherine Lelek</h2>
<p>Katherine Lelek is a higher education leader and career development professional who is passionate about helping learners and institutions build meaningful connections between learning and career success. Drawing on her experience in career services, teaching, and doctoral studies in learning and inquiry in practice, she is particularly interested in experiential learning, career ecosystems, and the shared responsibility model for student career development. You can connect with her through <a class="inline-link" href="https://www.linkedin.com/in/katherinelelek/" target="_blank" rel="noopener">LinkedIn</a>.</p>
`,
  },
  {
    id: "frank-dudley-turning-influence-into-profits",
    title: "Frank Dudley on Turning Influence into Profits",
    deck:
      "Dudley argues that creator marketing is becoming a decision engine, where creators, commerce media, and measurable customer behavior converge.",
    topic: "Creator Marketing",
    format: "Essay",
    author: "Frank Dudley",
    date: "2026-07-08",
    readMins: 6,
    thumbnail: "./assets/images/article-frank-dudley-influence-profits.svg?v=20260714-2",
    content: `
<p>I recently spoke at Mastercard’s Global Marketing Innovation and Optimization Summit on a topic reshaping the industry: creator marketing and commerce media. The central idea is straightforward. Marketing is shifting from campaigns to continuous systems that influence behavior and drive measurable outcomes.</p>

<h2>From Channels to Decision Engines</h2>
<p>Marketers should no longer think of creator marketing as a channel. It is a decision engine. Consumers do not move through linear funnels. They navigate a dynamic network of choices where discovery, evaluation, and purchase happen simultaneously across platforms.</p>
<p>Creators play a critical role in this system. They build trust, simplify complexity, and demonstrate real-world use. In doing so, they shape how decisions are made.</p>

<h2>The Role of The Edge</h2>
<p>In my upcoming book, <em>Creator Marketing and Commerce Media: How Creators Can Build Brands and Drive Sales</em> (Wiley, November), I introduce the concept of The Edge. The Edge is the distinct value a creator brings at a specific stage in the journey that helps a customer make progress on a job-to-be-done.</p>
<p>Not all creators play the same role. Some surface problems, others simplify choices, and others trigger action. The key is aligning the right creator to the right moment, where their Edge can influence behavior.</p>

<h2>A Better Model for Impact</h2>
<p>Consider financial services. A finance creator explaining credit card benefits may drive consideration. A travel creator showing how that card works across an actual trip is what triggers action. That action leads to card usage, transactions, and sustained spend.</p>
<p>This is the shift from awareness to behavior.</p>

<h2>Where Brands Go Wrong</h2>
<p>The most common mistake is optimizing for reach instead of outcomes. Brands treat creators like media placements rather than aligning them to specific roles across the customer journey, from acquisition to activation to ongoing usage.</p>

<h2>Where to Go Next</h2>
<p>For marketers looking to go deeper, the real opportunity lies at the intersection of creator marketing and commerce media. This is where content, data, and transactions connect, and where influence becomes measurable.</p>
<p>Ultimately, growth comes from orchestrating three things:</p>
<ul>
  <li>Who influences decisions</li>
  <li>How those decisions are activated</li>
  <li>How behavior is sustained over time</li>
</ul>

<p>For a deeper look at these ideas, watch this short conversation with CreatorIQ on how creator marketing is evolving into a system for driving measurable business outcomes:</p>
<p><a class="inline-link" href="https://www.youtube.com/watch?v=r0PWFQLY3eY" target="_blank" rel="noopener">Watch the conversation with CreatorIQ</a></p>

<h2>About the Book</h2>
<p><em>Creator Marketing and Commerce Media: How Creators Can Build Brands and Drive Sales</em> will be published in November 2026 by Wiley.</p>
<p><em>Creator Marketing and Commerce Media: How Creators Can Build Brands and Drive Sales</em> explores the powerful intersection of creator-led content, digital platforms, and commerce across a truly global landscape. Drawing on international case studies and strategic frameworks, Frank Dudley shows how brands - and creators themselves - can harness the creator economy to drive measurable growth, deepen audience engagement, and build enduring brand equity. Designed for modern marketers, this book provides a forward-looking roadmap for integrating creator partnerships, commerce media, and data-driven storytelling into a cohesive, globally informed marketing strategy.</p>
`,
  },
  {
    id: "when-cultural-marketing-misses-the-meaning",
    title: "When Cultural Marketing Misses the Meaning",
    deck:
      "Danielle Bell explains why brands need alignment between brand values, consumer identity, and cultural meaning when showing up for cultural celebrations.",
    topic: "Cultural Marketing",
    format: "Essay",
    author: "Danielle Bell",
    date: "2026-07-08",
    readMins: 3,
    thumbnail: "./assets/images/article-cultural-marketing-meaning.svg?v=20260714-4",
    content: `
<p>Danielle Bell was an in-studio <a class="inline-link" href="https://www.wbez.org/in-the-loop-with-sasha-ann-simons/2026/02/25/watching-the-baftas-while-black-were-running-out-of-cheeks-to-turn" target="_blank" rel="noopener">guest on WBEZ’s <em>In The Loop with Sasha-Ann Simons</em></a> for “Watching the BAFTAs While Black: We’re Running Out of Cheeks to Turn.”</p>

<p>In recent years, brands have grown more thoughtful about how they show up during cultural moments and celebrations.</p>

<p>There’s no shortage of advice. Articles, posts, books, and podcasts all urge marketers to involve the community being celebrated, move beyond logos and promotions, and understand the celebration's history. Yet, consumers still view some campaigns as performative and driven by business targets.</p>

<p>In 2022, Walmart faced criticism for an ice cream celebrating Juneteenth. Critics blasted the retailer for profiting from a painful chapter of Black American history: the end of slavery. Notably, others, from Ben &amp; Jerry’s to local retailers, sold products commemorating Juneteenth without incident.</p>

<p>So where did Walmart go wrong? Black people eat ice cream. Black people shop at Walmart, and Black people celebrate Juneteenth.</p>

<p>When a brand participates in a cultural celebration, three things must align: the brand’s values, consumer identity, and the cultural celebration itself. Their intersection is where meaningful participation lives, and misalignment is a setup for backlash.</p>

<p>Alongside the pillars, three questions move a brand toward this center:</p>
<ul>
  <li><strong>The Cultural Celebration:</strong> What do you understand about why this celebration matters to the people who celebrate it?</li>
  <li><strong>Consumer Identity:</strong> How would the community recognize itself in the brand the rest of the year?</li>
  <li><strong>Brand Values:</strong> If your role in the celebration were criticized tomorrow, what would change?</li>
</ul>

<p>Under pressure, Walmart pulled the ice cream, proving it wasn’t prepared to stand by its action. But for Black consumers, a group whose trust Walmart was already working to earn and retain, it was never about the ice cream. It was that Walmart seemed to misunderstand why the day mattered to them in the first place.</p>

<p><strong>Source:</strong> <a class="inline-link" href="https://www.pewresearch.org/short-reads/2025/05/29/about-two-thirds-of-lgbtq-adults-have-participated-in-pride-month-events/" target="_blank" rel="noopener">Pew Research Center</a></p>
`,
  },
  {
    id: "technology-expands-marketers-create-meaning",
    title: "Technology Expands What’s Possible. Marketers Determine What’s Meaningful.",
    deck:
      "Technology can create new capabilities, but marketers turn those possibilities into meaningful experiences, behaviors, and markets.",
    topic: "Marketing Innovation",
    format: "Essay",
    author: "Carolyn Tang Kmet",
    date: "2026-07-08",
    readMins: 5,
    thumbnail: "./assets/images/article-technology-meaning.svg?v=20260714-3",
    content: `
<p>Every successful product or service begins with understanding people and what they need. While technology continually expands what organizations are capable of creating, it doesn’t determine what should be built. That distinction is the realm of marketers, who understand market and customer needs, anticipate shifts in behavior, and identify opportunities to create value. The future of marketing isn’t about incorporating every new technology, it’s about understanding how to connect technological possibilities with meaningful human experiences.</p>

<p>We’ve lived through past examples where new technology alone isn’t enough to create a market. In 1993, Apple introduced the Newton, a handheld digital assistant featuring handwriting recognition, calendar and contact management, capabilities that were groundbreaking in an analog world. Yet the product continually struggled throughout its five-year lifespan because technological possibility and customer need were not yet aligned. Technology made the Newton possible, but it couldn’t, by itself, create a market.</p>

<p>More than a decade later, Netflix demonstrated how aligning technology with customer insight could transform human experience. High-speed internet, cloud infrastructure, and digital delivery already existed, but they were disparate technologies until Netflix saw how they could make entertainment instantly accessible and personalized. Pairing that experience with the right technology and an innovative pricing strategy, Netflix fundamentally changed how people consumed media. Technology expanded what was possible. Customer insight transformed those possibilities into a new market.</p>

<p>Marketers are more than campaign managers. They identify unmet needs, connect disciplines, and grow markets. But they can’t do it alone. The most transformative innovations emerge when marketers collaborate across disciplines, with engineering, with design, with finance, and other fields, bringing diverse perspectives together around a shared understanding of customer need. That belief inspired me to develop a collaboration among Medill IMC, Northwestern’s Office of Innovation and Emerging Technologies, Sony, and the Block Museum of Art. We introduced students to three-dimensional photogrammetry, which is the process of creating highly detailed digital models by combining hundreds of photos into an interactive 3D representation. While the technology itself is spectacular, our objective extended beyond teaching students how to create digital assets. We wanted them to go beyond the status quo and ask bigger questions, like “How can immersive experiences deepen customer engagement?”</p>

<p>Technology is always evolving. AI will certainly become more pervasive. The barrier between reality and augmented reality will soften, and new tools we can’t even fathom will certainly emerge. But the role of the marketer will hold constant. It will always be to understand people, anticipate their needs, and collaborate across disciplines to transform technological possibility into meaningful human experiences. At Medill, our goal is to develop marketers who shape the future not just by adopting new technologies, but also by recognizing how those technologies can create new experiences, new behaviors, and ultimately, new markets.</p>
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
    thumbnail: "./assets/images/article-ai-search-overviews.svg?v=20260714-1",
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
      "Jeffrey Treem, Professor of integrated marketing communications at Northwestern Medill School, introduces IMC POV and discusses Medill's thought leadership goals for 2026.",
    topic: "Integrated Marketing Communications",
    format: "Note",
    thumbnail: "./assets/images/imcpovfieldnote2.png",
    author: "Jeffrey Treem",
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
    thumbnail: "https://img.youtube.com/vi/4abvGifNuvA/maxresdefault.jpg",
    detailThumbnail: "https://img.youtube.com/vi/4abvGifNuvA/maxresdefault.jpg",
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
    thumbnail: "https://img.youtube.com/vi/xpvOS2Pt0dc/maxresdefault.jpg",
    detailThumbnail: "https://img.youtube.com/vi/xpvOS2Pt0dc/maxresdefault.jpg",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/xpvOS2Pt0dc?start=2"
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
    thumbnail: "https://img.youtube.com/vi/3_xlj4xF9gs/maxresdefault.jpg",
    detailThumbnail: "https://img.youtube.com/vi/3_xlj4xF9gs/maxresdefault.jpg",
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
    thumbnail: "https://img.youtube.com/vi/HyQDfZnXgWI/maxresdefault.jpg",
    detailThumbnail: "https://img.youtube.com/vi/HyQDfZnXgWI/maxresdefault.jpg",
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

function seedHomeStorySlots() {
  const slots = $$(".home-placeholder");
  if (!slots.length) return;

  const sideStories = POSTS.slice(1, slots.length + 1);
  slots.forEach((slot, idx) => {
    const story = sideStories[idx];
    if (!story) return;

    const href = `#post/${encodeURIComponent(story.id)}`;
    slot.classList.add("home-story-slot");
    slot.dataset.href = href;
    slot.tabIndex = 0;
    slot.setAttribute("role", "link");
    slot.setAttribute("aria-label", `Open ${story.title}`);
    slot.innerHTML = `
      <div class="home-story-kicker">${escapeHtml(story.format)} · ${escapeHtml(story.topic)}</div>
      <h2>${escapeHtml(story.title)}</h2>
      <p>${escapeHtml(story.deck || "")}</p>
      <div class="home-story-meta">${formatDate(story.date)} · ${story.readMins} min ${story.format === "Podcast" ? "listen" : "read"}</div>
    `;
    slot.onclick = () => {
      window.location.hash = href;
    };
    slot.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.hash = href;
      }
    };
  });
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
  seedHomeStorySlots();
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
