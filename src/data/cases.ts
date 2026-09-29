export type CaseId = 'edu' | 'gamedev' | 'farmers' | 'career'
export type MenuId = CaseId | 'medical'

export type CaseTab = {
  id: CaseId
  label: string
}

export type CaseMenuItem = {
  id: MenuId
  lines: string[]
  hasPage: boolean
}

export type SlideBlock =
  | { type: 'heading'; text: string; gold?: boolean }
  | { type: 'scriptTitle'; lead: string; script: string }
  | { type: 'body'; text: string }
  | { type: 'rich'; html: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'stat'; label: string; value: string }
  | { type: 'label'; text: string }

export type CaseSlide = {
  id: string
  layout: 'intro' | 'split' | 'carousel' | 'heroImage' | 'metrics' | 'gallery'
  showHighlights?: boolean
  blocks: SlideBlock[]
  sideBlocks?: SlideBlock[]
  images: string[]
}

export const caseTabs: CaseTab[] = [
  { id: 'edu', label: 'educational platform' },
  { id: 'gamedev', label: 'Gamedev in edtech' },
  { id: 'farmers', label: 'APP FOR FARMERS' },
  { id: 'career', label: 'career guidance' },
]

export const caseMenu: CaseMenuItem[] = [
  { id: 'edu', lines: ['Case 1: AI-driven educational platform'], hasPage: true },
  { id: 'gamedev', lines: ['Case 2:', 'gamified platform'], hasPage: true },
  { id: 'farmers', lines: ['Case 3:', 'FROM FIELD TO SCREEN'], hasPage: true },
  { id: 'career', lines: ['Case 4: Career', 'guidance for teens'], hasPage: true },
  { id: 'medical', lines: ['Case 5: Medical presentations'], hasPage: false },
]

export const cases: Record<CaseId, CaseSlide[]> = {
  edu: [
    {
      id: '03',
      layout: 'intro',
      showHighlights: true,
      blocks: [
        { type: 'heading', text: 'Case 1: AI-driven educational platform', gold: true },
        {
          type: 'rich',
          html: 'Many educational platforms still rely on static learning experiences, while students already use AI tools like ChatGPT outside the learning environment.<br/>Students already use AI to learn — just <u>outside the learning experience.</u><br/><br/>I work across several learning scenarios, but one of the most interesting was goal setting and personalized learning trajectories.',
        },
        { type: 'label', text: 'The challenge:' },
        {
          type: 'list',
          items: [
            'Students struggled to see the value of goal setting',
            'Traditional planners and trackers had low engagement',
            'We needed to make goal setting actionable rather than turning it into another standalone planning tool',
          ],
        },
        { type: 'label', text: 'My contribution:' },
        {
          type: 'rich',
          html: 'End-to-end Product Designer<br/><br/>I designed:<br/>— goal-setting flow<br/>— personalized learning trajectory<br/>— AI tutor interactions within assignments',
        },
      ],
      images: ['c1-laptop-outdoor'],
    },
    {
      id: '04',
      layout: 'carousel',
      blocks: [
        { type: 'label', text: 'How it works' },
        {
          type: 'rich',
          html: 'The experience connects AI directly to the learning journey:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'AI helps students formulate a SMART goal directly within the product',
            'A personalized learning trajectory is generated based on that goal',
            'The system automatically populates the trajectory with relevant activities',
            'An AI tutor supports students inside each activity — guiding them through the task without simply giving away the answer',
          ],
        },
      ],
      sideBlocks: [
        {
          type: 'body',
          text: 'The key design challenge was to make AI feel like part of the learning experience rather than another chatbot layered on top of the product',
        },
      ],
      images: ['c1-screen-1', 'c1-screen-2', 'c1-screen-3', 'c1-screen-4'],
    },
    {
      id: '05',
      layout: 'heroImage',
      blocks: [
        { type: 'label', text: 'How it works' },
        {
          type: 'rich',
          html: 'The experience connects AI directly to the learning journey:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'AI helps students formulate a SMART goal directly within the product',
            'A personalized learning trajectory is generated based on that goal',
            'The system automatically populates the trajectory with relevant activities',
            'An AI tutor supports students inside each activity — guiding them through the task without simply giving away the answer',
          ],
        },
      ],
      images: ['c1-slide05'],
    },
    {
      id: '06',
      layout: 'heroImage',
      blocks: [
        { type: 'label', text: 'Outcome (Early impact)' },
        { type: 'body', text: 'Within the first two months:' },
        { type: 'stat', label: '', value: '60K registrations\n35K MAU' },
        {
          type: 'body',
          text: 'We worked under tight deadlines and a high level of uncertainty, so the approach was deliberately MVP-driven: we tested hypotheses quickly, learned from early signals, and iterated rather than trying to design the entire system upfront.',
        },
      ],
      images: ['c1-outcome'],
    },
    {
      id: '15',
      layout: 'split',
      blocks: [
        {
          type: 'heading',
          text: '+ most recent task: Homepage — from content grid to personalized workspace',
        },
        {
          type: 'body',
          text: '2 months after launch, users were struggling to understand what they could do on the platform – on the click maps and analysing scroll behavior I’ve noticed crusial loss of users',
        },
        {
          type: 'body',
          text: 'The homepage was trying to serve everyone with the same hierarchy',
        },
        { type: 'label', text: 'My contribution' },
        {
          type: 'body',
          text: "Trying to make the homepage adapted to each teacher's workflow",
        },
        {
          type: 'list',
          items: [
            'Discover — Clearer learning scenarios',
            'Engage — Widgets that encourage exploration',
            'Personalize — A configurable homepage for teachers',
          ],
        },
      ],
      images: ['c1-homepage'],
    },
    {
      id: '16',
      layout: 'heroImage',
      blocks: [
        { type: 'label', text: 'Key product decisions' },
        {
          type: 'list',
          items: [
            '1. Increase engagement — I proposed adding lightweight widgets and adjacent content to give teachers more reasons to return to the platform and spend more time exploring it.',
            '2. Connect the platform to the Sber ecosystem — I introduced integrations with relevant Sber products to expand the homepage beyond the core learning experience and create additional value for users.',
            '3. Make the homepage adaptable — Instead of a fixed Bento Grid, I proposed a personalized workspace where teachers can add, hide and rearrange content blocks based on their workflow.',
          ],
        },
      ],
      images: ['c1-decisions'],
    },
    {
      id: '20',
      layout: 'gallery',
      blocks: [],
      images: ['c1-gallery-1', 'c1-gallery-2', 'c1-gallery-3'],
    },
  ],
  gamedev: [
    {
      id: '07',
      layout: 'intro',
      blocks: [
        { type: 'heading', text: 'Case 2: Creating gamified educational platform', gold: true },
        { type: 'heading', text: 'Functional Literacy Marathon', gold: true },
        {
          type: 'body',
          text: 'How we created a cool looking interesting online course, using old-style boring materials on the last platform',
        },
        { type: 'label', text: 'My contribution:' },
        {
          type: 'body',
          text: 'End-to-end: from researching till concepts and final realisation user interfaces and main flow',
        },
        { type: 'label', text: 'Tasks:' },
        {
          type: 'list',
          items: [
            'Test the hypothesis: Can we increase learner engagement and improve learning outcomes by redesigning the format and user experience?',
            'Validate the hypothesis: Can changes to the content format and user experience improve user engagement and learning effectiveness?',
          ],
        },
        {
          type: 'body',
          text: "Extra tight deadlines, a legacy monolithic platform, and existing content that couldn't be fully redesigned",
        },
      ],
      images: ['c2-devices'],
    },
    {
      id: '11',
      layout: 'split',
      blocks: [
        {
          type: 'body',
          text: 'I proposed a 3D world concept where each building represented a specific course topic',
        },
        {
          type: 'body',
          text: 'In one month we went through all stages of forming a product:',
        },
        {
          type: 'body',
          text: 'Early launch enables faster improvements. The Friends & Family stage helped us collect real user feedback and identify 82 critical bugs before scaling the product.',
        },
        {
          type: 'body',
          text: 'Build flexibility into the product from the start. The 3D map and expandable panels allowed us to quickly adapt the interface for different states and devices without major redesigns.',
        },
      ],
      images: ['c2-3d-1', 'c2-3d-2'],
    },
    {
      id: '13',
      layout: 'metrics',
      blocks: [
        { type: 'label', text: 'Real market benchmarks' },
        { type: 'stat', label: 'Entering the content', value: '30–50%' },
        { type: 'stat', label: 'Completion depth', value: '15–25%' },
        { type: 'stat', label: 'Completion rate', value: '5–10%' },
        { type: 'label', text: 'Our metrics after 3 months' },
        { type: 'stat', label: 'Entering the content', value: '63–67%' },
        { type: 'stat', label: 'Mid of the course', value: '26–32%' },
        { type: 'stat', label: 'Got a final certificate (CR)', value: '12–15%' },
      ],
      images: ['c2-metrics'],
    },
    {
      id: '14',
      layout: 'gallery',
      blocks: [
        {
          type: 'label',
          text: 'Transforming a linear learning experience into an interactive user journey',
        },
        {
          type: 'body',
          text: 'I was responsible for key user entry points: authentication, user profile, and the main marketing landing page. I designed core platform experiences, including task completion flows, the leaderboard, and teacher tools.',
        },
      ],
      images: ['c2-journey-1', 'c2-journey-2', 'c2-journey-3'],
    },
  ],
  farmers: [
    {
      id: '09',
      layout: 'intro',
      blocks: [
        { type: 'heading', text: 'Case 3: Mobile App for farmers in Spain', gold: true },
        {
          type: 'body',
          text: 'Adapting the interface to real-world usage condition',
        },
        { type: 'label', text: 'My contribution:' },
        {
          type: 'body',
          text: 'End-to-end: from researching till concepts and final realisation user interfaces and main flow',
        },
        { type: 'label', text: 'Tasks:' },
        {
          type: 'list',
          items: [
            'Test the hypothesis: Can we increase learner engagement and improve learning outcomes by redesigning the format and user experience?',
            'Validate the hypothesis: Can changes to the content format and user experience improve user engagement and learning effectiveness?',
          ],
        },
        {
          type: 'body',
          text: "Extra tight deadlines, a legacy monolithic platform, and existing content that couldn't be fully redesigned",
        },
      ],
      images: ['c3-phones'],
    },
    {
      id: '10',
      layout: 'split',
      blocks: [
        { type: 'label', text: 'FUN FACT: no guidelines are better than real life' },
        {
          type: 'list',
          items: [
            'Test the hypothesis: Can we increase learner engagement and improve learning outcomes by redesigning the format and user experience?',
            'Validate the hypothesis: Can changes to the content format and user experience improve user engagement and learning effectiveness?',
          ],
        },
        {
          type: 'body',
          text: "Extra tight deadlines, a legacy monolithic platform, and existing content that couldn't be fully redesigned",
        },
        { type: 'label', text: 'My contribution:' },
        {
          type: 'body',
          text: 'End-to-end: from researching till concepts and final realisation user interfaces and main flow',
        },
      ],
      images: ['c3-field'],
    },
  ],
  career: [
    {
      id: '08',
      layout: 'intro',
      blocks: [
        { type: 'heading', text: 'Case 4: Career guidance for teens', gold: true },
        { type: 'label', text: 'Tasks:' },
        {
          type: 'body',
          text: 'On the old platform, we tested a "Big Challenges" format — 6 courses in different fields where students could pick and complete one or several as a mix of soft skills and subject knowledge, plus a connected metaverse. However, we faced platform limitations and low conversions.',
        },
        {
          type: 'body',
          text: 'Despite this, some teens completed the courses, gave positive feedback, and even switched their challenge paths, which revealed a clear interest in career exploration and self-discovery.',
        },
        { type: 'label', text: 'THE OPPORTUNITY' },
        {
          type: 'body',
          text: 'Turning free education into a paid career guidance product',
        },
        { type: 'label', text: 'My contribution:' },
        {
          type: 'body',
          text: 'Competitor research, user problem mapping, job stories, hypothesis building, user interviews, UX flows, visual concepts, component design, and delivery supervision',
        },
      ],
      images: ['c4-hero'],
    },
    {
      id: '12',
      layout: 'heroImage',
      blocks: [
        { type: 'label', text: 'Our initial hypothesis:' },
        {
          type: 'body',
          text: 'The more we learn about a student, the more accurate their career recommendations will be',
        },
        { type: 'body', text: 'Our first low-fidelity prototypes' },
        {
          type: 'body',
          text: 'Interests → Exams → Careers → Universities → Programs → Study format → Consultation',
        },
      ],
      images: ['c4-proto'],
    },
    {
      id: '17',
      layout: 'split',
      blocks: [
        { type: 'label', text: "Users didn't want another career test." },
        { type: 'body', text: 'Prototype interviews revealed three important things:' },
        {
          type: 'list',
          items: [
            '01 — Too much effort. Teens quickly lost focus during long tests and complex flows',
            "02 — Low trust. Parents didn't trust anonymous automated recommendations with such an important decision",
            '03 — Human guidance mattered most. The most valuable part was talking to a specialist who could interpret the results and recommend realistic options',
          ],
        },
      ],
      images: ['c4-interviews-1', 'c4-interviews-2'],
    },
    {
      id: '18',
      layout: 'split',
      blocks: [
        { type: 'label', text: 'KEY DESIGN DECISIONS:' },
        {
          type: 'rich',
          html: '1. Assess — Short test built with career counselors.<br/>2. Prepare — Counselor sees the results before the session.<br/>3. Guide — Structured consultation with recommendations.<br/>4. Recommend — Test + expert feedback → final recommendation.',
        },
        {
          type: 'stat',
          label: 'In 2 months:',
          value:
            '— 16 000 users with no marketing\n— 1 160 consultation requests\n— 58% request → payment conversion\n— 350 000 ₽ revenue',
        },
      ],
      images: ['c4-decisions'],
    },
    {
      id: '19',
      layout: 'gallery',
      blocks: [
        {
          type: 'heading',
          text: 'The product turned career uncertainty into a paid expert-guidance experience.',
        },
        {
          type: 'body',
          text: 'Don’t be afraid to cut back on features for the MVP and refine them later—at first, the product seemed more interesting with a complex use case, but users needed a single, clear, and valuable result right here and now. Simplicity led to higher conversion rates and speed. Live interviews with users and experts are essential both before and after launch—they helped us weed out unworkable hypotheses, refine the visuals before launch, and quickly adjust the user flow.',
        },
      ],
      images: ['c4-outcome-1', 'c4-outcome-2', 'c4-outcome-3'],
    },
  ],
}
