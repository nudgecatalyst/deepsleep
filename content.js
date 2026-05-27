/* ============================================================================
   FINDING DEEP SLEEP — EDITABLE CONTENT
   ============================================================================
   This file holds every word, price, image and number on the page.
   To make a change: edit the text, save this file, refresh the browser tab.

   Formatting notes:
   - Use [em]text[/em] to italicise a phrase (matches the headline accent style)
   - Keep the quotes (" or ') around every value
   - Do not change the field names on the left side of the colon
   - Lists can be reordered, shortened or extended (mind the commas between items)
   - For the founder photo: save your photo as "founder.jpg" in this folder OR
     replace founder.imageUrl below with your own URL
   ============================================================================ */

const CONTENT = {

  /* ── BRAND / NAV ────────────────────────────────────────────────────────── */
  brand: {
    name: "Finding Deep Sleep",
    locator: "India Edition",
    navLinks: [
      { label: "What You Get",   href: "#expect"  },
      { label: "Why This Works", href: "#compare" },
      { label: "Method",         href: "#why"     },
      { label: "Pricing",        href: "#pricing" },
      { label: "FAQ",            href: "#faq"     }
    ],
    navCta: { label: "Begin Now", href: "#enrol" }
  },

  /* ── HERO ───────────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: "5-Day Deep Sleep Reset Challenge · Delivered on your WhatsApp",
    headline: "Sleep that [em]finds you.[/em] Not the other way around.",
    lede: "A guided evening shutdown ritual for exhausted minds that can’t switch off. No theory. No fluff. Just a few powerful nudges over the next 5 evenings to help your nervous system finally slow down, so you wake up saying, “I finally slept like a baby today.”",
    primaryCta:   { label: "Start your reset",  href: "#enrol"  },
    secondaryCta: { label: "See what you get",  href: "#expect" },
    priceNote: "From ₹499 · No app to download · Begins 8PM IST · 1st June 2026 (Monday).",
    imageUrl: "https://images.unsplash.com/photo-1510632233616-88025944e960?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Deep sleep is not a luxury; it’s a return to ourselves.",
    imageCaption: "\"Deep sleep is not a luxury; it’s a return to ourselves.\""
  },

  /* ── TRUST STRIP (the four-item band under the hero) ────────────────────── */
  trust: [
    { strong: "15 minutes for next 5 Nights.",   text: "That’s all we ask." },
    { strong: "WhatsApp-based accountability.",  text: "No app login. Just tiny nudges. Real change." },
    { strong: "100% refund if it doesn’t help.", text: "That’s how confident we are." },
    { strong: "Backed by sleep science.",        text: "Built for exhausted urban minds." }
  ],

  /* ── COUNTDOWN BAND ─────────────────────────────────────────────────────── */
  countdown: {
    label: "Challenge begins",
    when: "1st June 2026 · 8:00 PM IST",
    // ISO format with IST offset. Change this to update the target date.
    targetISO: "2026-06-01T20:00:00+05:30",
    livePrefix: "Live now —",
    liveSuffix: "join the next batch",
    cta: { label: "Reserve my spot", href: "#enrol" }
  },

  /* ── WHAT YOU GET (tabbed module — three categories of support) ─────────── */
  expect: {
    eyebrow: "What To Expect",
    title: "Five nights. [em]A mix of nudges, not a course.[/em]",
    desc: "This is not a sleep course. It is a five-evening rebuild of the small habits that have quietly broken our sleep. Each night arrives on WhatsApp at 8:00pm IST. You read/listen/view, you do one short practice, you put your phone down. The next morning, you tell us how it went.",
    tabs: [
      {
        num: "01",
        label: "Evening Wind-Down",
        title: "Guided shutdown rituals",
        oneLiner: "Pre-sleep nudges delivered the moment your body actually needs them.",
        whatYouGet: [
          "Guided shutdown voice note (English)",
          "One calming audio per evening",
          "A 90-second breathing tool",
          "A one-line journaling prompt"
        ],
        time: "10 to 15 minutes per evening",
        frequency: "Daily across all 5 evenings",
        image: "https://images.unsplash.com/photo-1520809227329-2f94844a9635?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "A warm bedside lamp at dusk"
      },
      {
        num: "02",
        label: "Daytime Nudges",
        title: "The night begins before sundown",
        oneLiner: "Small WhatsApp cues across the day that quietly shape how the night unfolds.",
        whatYouGet: [
          "Circadian-Caffeine Protocol",
          "Bedroom reset checklist",
          "Wind-down ping at 9:30pm",
          "Sunset light-exposure cue"
        ],
        time: "Under 2 minutes per nudge",
        frequency: "Two to three nudges per day",
        image: "https://images.unsplash.com/photo-1611934180042-da791b4091e7?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Soft afternoon light through curtains"
      },
      {
        num: "03",
        label: "Accountability & Tracking",
        title: "A check-in so the work compounds",
        oneLiner: "A thoughtful morning question that turns five evenings into a real shift.",
        whatYouGet: [
          "8am morning check-in (one-tap reply)",
          "Personal sleep tracker across 5 nights",
          "Day-5 progress summary",
          "Direct WhatsApp line for questions"
        ],
        time: "300 seconds per morning",
        frequency: "Every morning of the program",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Soft morning light over a mountain landscape"
      }
    ]
  },

  /* ── WHAT'S INSIDE (four cards in a 2x2 grid) ───────────────────────────── */
  inside: {
    eyebrow: "What Arrives",
    title: "What lands on your WhatsApp [em]each evening.[/em]",
    desc: "No app. No login. No daily streaks to chase. Just few carefully built nudge a night, the same way a thoughtful friend would send it.",
    items: [
      {
        num: "01 / Audio",
        heading: "A guided practice, 7 minutes or less voice note",
        text: "Voice note (English), designed to be listened to in bed, lights low, headphones optional. Slow pace. No music swell. Nothing performative."
      },
      {
        num: "02 / Reading",
        heading: "A one-page note on tonight’s reset ritual",
        text: "No long PDFs. No homework. Just enough understanding to help you trust the process and let your body slow down naturally."
      },
      {
        num: "03 / Ritual",
        heading: "One small action to help you unwind tonight",
        text: "The smallest possible behavioural change. Warm water feet soak, breath count, written reflection, thermal cue. Each one chosen for the lowest possible friction."
      },
      {
        num: "04 / Morning",
        heading: "A single question at 8am the next morning",
        text: "One reply, one tap. We track what worked for you last night, what didn't. By night five, your personal ritual is built from your own data, not generic advice."
      }
    ]
  },

  /* ── MULTI-SENSORY (six-card grid) ──────────────────────────────────────── */
  sensory: {
    eyebrow: "Multi-Sensory Method",
    title: "Six inputs. [em]One body that learns to rest.[/em]",
    desc: "Deep sleep is not built through one channel. We cue multiple senses across the evening, each chosen for its proven effect on the nervous system.",
    items: [
      {
        num: "01",
        label: "Sound",
        text: "Slow voice notes designed for low-light bedrooms. Headphones optional. No music swell. Nothing performative."
      },
      {
        num: "02",
        label: "Light",
        text: "A sunset cue, a 9:30pm screen-dim ping, and one warm-light suggestion for the last 45 minutes."
      },
      {
        num: "03",
        label: "Temperature",
        text: "Warm feet, cool head. A simple thermal cue your body already knows, pulled from sleep medicine, not folklore."
      },
      {
        num: "04",
        label: "Breath",
        text: "Guided breath sequences that down-shift your nervous system in under two minutes. Four-count rhythms."
      },
      {
        num: "05",
        label: "Touch",
        text: "A four-minute body scan that closes the day in the muscles, not just the mind. Weighted blanket optional."
      },
      {
        num: "06",
        label: "Story",
        text: "A one-line written prompt that gives the day an ending, so the night does not have to negotiate one."
      }
    ]
  },

  /* ── COMPARISON TABLE ───────────────────────────────────────────────────── */
  compare: {
    eyebrow: "Why This Works",
    title: "Five days. WhatsApp. [em]A real outcome.[/em]",
    desc: "Most sleep tools borrow from one tradition. We picked the parts of each that actually work, removed the rest, and put it on the surface you already use.",
    // The first column header is the highlighted one (ours)
    columns: [
      "5-Day Deep Sleep Reset",
      "Meditation Apps",
      "Traditional Yog Nidra",
      "Spotify Sleep Playlist"
    ],
    // Each row: criterion label + short desc + four values (yes / no / partial)
    rows: [
      { label: "Built for the Indian evening",  desc: "Late dinners, family rhythms, summer heat",  values: ["yes", "partial", "yes", "no"] },
      { label: "Delivered on WhatsApp",         desc: "No app, no login, no streaks",                values: ["yes", "no", "no", "no"] },
      { label: "Personal accountability",       desc: "A real morning check-in",                     values: ["yes", "no", "no", "no"] },
      { label: "Behavioural change focus",      desc: "CBT-I principles, not just relaxation",       values: ["yes", "partial", "no", "no"] },
      { label: "Compounds across days",         desc: "Five nights that build on each other",        values: ["yes", "partial", "no", "no"] },
      { label: "Money-back guarantee",          desc: "14 days, no questions asked",                 values: ["yes", "no", "no", "no"] },
      { label: "One-on-one option available",   desc: "Private call before the program starts",      values: ["yes", "no", "partial", "no"] }
    ]
  },

  /* ── MANIFESTO (full-bleed image breaker with punchline + highlights) ──── */
  manifesto: {
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Mountain dusk, calm light",
    punchline: "Five evenings. A nervous system [em]that learns to rest again.[/em]",
    subtext: "What if the off-switch you have been looking for was just five WhatsApp messages away.",
    highlights: [
      "Guided",
      "Evidence-based",
      "Built in Bengaluru",
      "14-day refund"
    ]
  },

  /* ── WHY THIS WORKS (six points) ────────────────────────────────────────── */
  why: {
    eyebrow: "The Method",
    title: "Why this works when [em]apps have not.[/em]",
    desc: "Most sleep apps ask for behaviour change you have already tried and failed at. We assume you have. So we built something different, smaller, and built around the way an urban Indian evenings actually unfold.",
    items: [
      {
        num: "01",
        heading: "Smallest viable change, every night",
        text: "Behavioural science is clear: tiny actions, daily, beat big resolutions, occasionally. We design for the minimum behaviour change that produces the maximum sleep shift. No 30-day overhauls."
      },
      {
        num: "02",
        heading: "Where your attention already is",
        text: "You already check WhatsApp before sleeping. We meet you on the surface you actually use, instead of asking you to download something new and remember to open it."
      },
      {
        num: "03",
        heading: "Built for the Indian night",
        text: "Late dinners, joint family wake-times, summer heat, monsoon humidity, the 11pm work call. The program accounts for the specifics of an Indian evening. Not a translated Western product."
      },
      {
        num: "04",
        heading: "Pulled from sleep medicine, not wellness culture",
        text: "The core methods are drawn from cognitive behavioural therapy for insomnia (CBT-I), the gold-standard non-pharmaceutical treatment for sleep difficulty. Stripped of jargon, kept honest."
      },
      {
        num: "05",
        heading: "Designed by someone who could not sleep",
        text: "Built by a founder who spent two years rebuilding his own sleep from a broken state. Refined across 200+ private clients before being offered publicly. Lived, then taught."
      },
      {
        num: "06",
        heading: "What you keep, lasts",
        text: "By night five, you have a one-page SleepOS ritual built from your own week. Not a habit list. A rhythm. The kind your body learns to expect, the way it expects food at 8pm."
      }
    ]
  },

  /* ── BUILT FOR (audience list with right-side image) ────────────────────── */
  builtFor: {
    eyebrow: "Built For",
    title: "If your nights look [em]like this.[/em]",
    imageUrl: "https://images.unsplash.com/photo-1626856909794-6edb639cb8ed?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Quiet bedroom scene at dusk",
    items: [
      { who: "Founders",     what: "The mind that ran the company all day still runs it at 1AM. You need the off-switch you have not been given." },
      { who: "Parents",      what: "You finally have the house quiet at 11pm and now cannot fall asleep. Tomorrow starts at 6:30am regardless." },
      { who: "Professionals",what: "The 9:30pm laptop close. The 10:45pm bed. The 12:18am still-awake with Claude Code. The 6am alarm. You know this loop." },
      { who: "Caregivers",   what: "You sleep on a single thread of vigilance. We will not break it. We will help the rest of you rest." },
      { who: "Students",     what: "Exam season has scrambled your rhythm and you cannot afford a foggy week ahead. Five nights is what you have." }
    ]
  },

  /* ── FOUNDER STORY (with photo) ─────────────────────────────────────────── */
  founder: {
    eyebrow: "Built By Someone Who Needed It",
    title: "Why I built [em]Finding Deep Sleep.[/em]",
    name: "SBD - Your Deep Rest Coach",
    role: "Day-job at a defence deep-tech startup",
    // To use your own photo: either (a) save your photo as "founder.jpg" in
    // this folder and change the URL below to "./founder.jpg", or (b) replace
    // this URL with a link to your photo hosted online.
    imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLmaate-9J0g00TA3s3jbC8Pvl9HLACh6jQoKtJHcCvdABjQNAZQQ=s576-c-no",
    imageAlt: "SBD, founder of Finding Deep Sleep",
    paragraphs: [
      "Two years ago, I began noticing something deeply unsettling at home. My spouse struggled to sleep night after night. My father would wake up repeatedly in the middle of the night. My mother-in-law silently battled chronic insomnia that slowly affected her energy, mood, and quality of life.",
      "Over time, I realized sleep deprivation had quietly become the background noise of modern life. Everyone looked functional on the outside. Very few were truly rested.",
      "That realization turned into an obsession.",
      "Over the last two years, I studied sleep behaviour, nervous system regulation, evening rituals, environmental cues, breathing patterns, digital overstimulation, and the psychology of modern exhaustion. More importantly, I tested small, practical interventions at home, tiny changes that could help the body feel safe enough to slow down again. Some worked. Many didn’t. Slowly, patterns began to emerge.",
      "Recently, things became more real when my wife underwent a Level 1 Sleep Study at a hospital. What shocked me wasn’t just the findings, it was discovering that most hospital sleep labs had waiting periods stretching close to two months. That’s when it hit me. We are in the middle of a silent sleep crisis. People are exhausted, overstimulated, anxious, and mentally “on” all the time. Yet most solutions available are either clinical, intimidating, expensive, or impossible to sustain consistently in everyday life.",
      "That is why I created the 5-Day Deep Sleep Reset. Not as a medical solution. Not as another wellness trend. But as a simple, human, guided evening shutdown ritual designed to help exhausted minds finally slow down. Everything in this program has been inspired by real struggles, tested in real homes, and shaped by one belief."
    ],
    pullQuote: "Sometimes the body already knows how to sleep. The mind just needs help finding the doorway back to rest."
  },

  /* ── PRICING (two plans) ────────────────────────────────────────────────── */
  pricing: {
    eyebrow: "Begin Now",
    title: "Two ways in. [em]Same five nights.[/em]",
    desc: "Choose self-paced if you want the full program on WhatsApp. Choose guided if you also want a 45-minute private call to walk through your sleep history and tailor the week to you.",
    plans: [
      {
        featured: false,
        badge: "",
        name: "Self-Paced",
        subtitle: "The full five-night program on WhatsApp.",
        currency: "Rs.",
        amount: "499",
        includes: [
          "5 evening sessions on WhatsApp at 8:00pm",
          "Audio/Visual notes in English",
          "Daily morning check-in question",
          "Your personal one-page SleepOS at night five",
          "Program yours forever, replay anytime",
          "You enroll today, program starts Monday at 8PM"
        ],
        cta: { label: "Begin self-paced", href: "#enrol" }
      },
      {
        featured: true,
        badge: "Recommended",
        name: "Guided",
        subtitle: "Self-paced Program + a 45-minute private call before night one.",
        currency: "Rs.",
        amount: "1,499",
        includes: [
          "Everything in Self-Paced",
          "45-minute 1:1 sleep history call before start",
          "Program tailored to your specific sleep pattern",
          "Direct WhatsApp access for questions across the week",
          "15-minute closing call after night five",
          "Most chosen by founders and caregivers"
        ],
        cta: { label: "Begin guided", href: "#enrol" }
      }
    ]
  },

  /* ── TESTIMONIALS (three cards) ─────────────────────────────────────────── */
  testimonials: {
    eyebrow: "From the First 200",
    title: "What people said [em]after night five.[/em]",
    desc: "A small sample from the private cohort the program was built with. Names abbreviated for privacy. Full reviews available on request.",
    items: [
      {
        quote: "I went into this not believing five nights could move anything. By night three I was asleep before 11. By night five I had stopped checking my phone in bed. I have not paid for sleep advice that worked before.",
        name: "A.M.",
        role: "Founder, B2B SaaS · Bengaluru"
      },
      {
        quote: "The morning check-in was the thing. Knowing someone would ask me how the night went made me actually do the practice. By the third evening it was the part of the day I looked forward to.",
        name: "R.K.",
        role: "Product Lead · Gurugram"
      },
      {
        quote: "I have tried Calm, Headspace and three Indian sleep apps. The reason this worked is the small size of the ask. Ten minutes. WhatsApp. Done. No streak guilt, no app open.",
        name: "P.S.",
        role: "Investment Associate · Mumbai"
      }
    ]
  },

  /* ── FAQ ────────────────────────────────────────────────────────────────── */
  faq: {
    eyebrow: "Honest Answers",
    title: "What you may be [em]wondering.[/em]",
    desc: "If you have a question that is not answered here, write to us before you enroll for the reset program. We would rather talk you out of it than disappoint you.",
    items: [
      {
        q: "Do I need to download an app?",
        a: "No. The entire program runs on WhatsApp. The audio notes play inline. The reading is in the chat. The morning check-in is a single reply. We chose WhatsApp specifically so there is nothing between you and beginning tonight."
      },
      {
        q: "What if I miss a night?",
        a: "Pick up the next evening. The five nights work as a sequence but the gaps do not undo the work. You also keep the messages forever, so you can replay any night, anytime."
      },
      {
        q: "Is this a substitute for treating insomnia?",
        a: "No. If you have been diagnosed with clinical insomnia, sleep apnoea, or another sleep disorder, this is a complement to your treatment, not a replacement. We say so in plain language in the welcome message."
      },
      {
        q: "What language is it in?",
        a: "Audio notes and visual cues are available in English only. The written content is in English. We are working on other languages for the next cohort. Tell us your preference at enrollment."
      },
      {
        q: "What if it does not work for me?",
        a: "Full refund within 14 days of starting if the program has not measurably moved your sleep. No questions, no friction, no form. One WhatsApp message and the money is back."
      },
      {
        q: "Why charge so low?",
        a: "Deep rest should not feel like a luxury available only to a few people paying premium wellness prices. The ₹499 is not the value of the transformation. It is the commitment fee to help you actually show up for the next 5 nights. And honestly, if this reset program genuinely helps you wake up calmer, lighter, and deeply rested again, you can pay it forward for someone who you think needs it."
      }
    ],
    closingNote: "We would rather talk you out of it than disappoint you.",
    cta: { label: "Send us your query", href: "#enrol" }
  },

  /* ── FINAL CTA (light grey band before the form) ────────────────────────── */
  finalCta: {
    eyebrow: "Begin tonight",
    title: "Your next deep sleep night is [em]five evenings away.[/em]",
    lede: "Enroll for the next upcoming batch. The first message lands on your WhatsApp at 8:00pm on a Monday.",
    cta: { label: "Start your reset", href: "#enrol" }
  },

  /* ── ENROLMENT FORM (last section before the footer) ────────────────────── */
  enrol: {
    eyebrow: "Reserve Your Spot",
    title: "Help us help you [em]sleep.[/em]",
    desc: "Share a few details. We respond on WhatsApp within 24 hours with a starter plan and the payment link for your chosen batch. You only pay after the spot is confirmed.",
    // When the form is submitted, the user is taken to WhatsApp with a pre-filled
    // message to this number, in international format without the + sign.
    whatsappNumber: "917406226789",
    messagePrefix: "*New Query: 5-Day Deep Sleep Reset*",
    submitLabel: "Help me Reset my Sleep",
    fields: {
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      whatsappLabel: "WhatsApp Number",
      whatsappPlaceholder: "+91 98XXX XXXXX",
      emailLabel: "Email (optional)",
      emailPlaceholder: "you@email.com",
      cityLabel: "City",
      cityPlaceholder: "Bengaluru, Mumbai, Delhi…",
      occupationLabel: "What do you do?",
      occupations: [
        "Salaried Professional",
        "Founder / Entrepreneur",
        "Business Owner",
        "Consultant / Freelancer",
        "Homemaker",
        "Student",
        "Retired",
        "Other"
      ],
      planLabel: "Choose your plan",
      plans: [
        { value: "Self-Paced (Rs. 499)", label: "Self-Paced · Rs. 499" },
        { value: "Guided (Rs. 1,499)",   label: "Guided · Rs. 1,499 (Recommended)" }
      ],
      batchLabel: "Choose your batch",
      batches: [
        "1st June (Monday) – 5th June (Friday) 2026",
        "15th June (Monday) – 19th June (Friday) 2026",
        "29th June (Monday) – 3rd July (Friday) 2026",
        "13th July (Monday) – 17th July (Friday) 2026"
      ],
      challengeLabel: "Your current sleep challenge",
      challengeHint: "Select up to 3 that describe you most",
      challenges: [
        "Racing thoughts at night",
        "Waking at 3am",
        "Can’t fall asleep",
        "Wake up exhausted",
        "Phone-before-bed loop",
        "Late-night anxiety"
      ]
    },
    nudges: [
      "You will receive a payment link over WhatsApp to join the batch",
      "Limited spots available",
      "Filling fast",
      "No signup required",
      "100% money-back guarantee",
      "No questions asked"
    ]
  },

  /* ── FOOTER ─────────────────────────────────────────────────────────────── */
  footer: {
    blurb: "A small, careful sleep program built to help you rest better. Delivered on WhatsApp. Five nights to your deepest sleep, or your money back.",
    columns: [
      {
        heading: "Program",
        links: [
          { label: "What you get",   href: "#expect" },
          { label: "Why this works", href: "#compare" },
          { label: "Method",         href: "#why" },
          { label: "Pricing",        href: "#pricing" },
          { label: "FAQ",            href: "#faq" }
        ]
      },
      {
        heading: "Company",
        links: [
          { label: "About",          href: "#founder" },
          { label: "Research notes", href: "#" },
          { label: "Contact",        href: "#enrol" }
        ]
      },
      {
        heading: "Legal",
        links: [
          { label: "Terms",          href: "#" },
          { label: "Privacy",        href: "#" },
          { label: "Refund policy",  href: "#" }
        ]
      }
    ],
    copyright: "© Finding Deep Sleep · 2026",
    locator: "Made with ❤️ in Bengaluru"
  }

};
