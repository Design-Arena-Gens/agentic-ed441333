import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read Your Mind by Oz | Deep-Dive & Hidden Lessons",
  description:
    "Explore the core ideas, mentalism insights, and biggest secrets revealed in Oz's book Read Your Mind.",
};

type Insight = {
  title: string;
  description: string;
};

const coreIdeas: Insight[] = [
  {
    title: "Mindset as the Real Stage",
    description:
      "Oz frames mentalism as disciplined attention. The book focuses on how noticing micro-signals, emotional cues, and context allows anyone to anticipate reactions more accurately.",
  },
  {
    title: "Preparation Beats Instinct",
    description:
      "Every routine is reverse-engineered from the desired reaction. Oz highlights meticulous scripting, stacked memory systems, and rehearsed outs that make 'thought reading' feel improvisational.",
  },
  {
    title: "Ethical Influence",
    description:
      "Rather than manipulating, Oz stresses consent, psychological safety, and using these skills to build trust. The show succeeds only when the participant feels seen, not exposed.",
  },
];

const signatureMethods: Insight[] = [
  {
    title: "Layered Forcing",
    description:
      "He combines subtle linguistic nudges, asymmetric choices, and prop design so spectators land on preselected answers while believing they were free to decide.",
  },
  {
    title: "Time-Misdirection",
    description:
      "Crucial information is gathered or encoded minutes before a reveal. By letting the audience's memory cool, the eventual 'mind read' looks impossible.",
  },
  {
    title: "Spectator-Centric Storylines",
    description:
      "Oz scripts reveals around personal milestones pulled from casual pre-show chats, converting trivia into emotionally charged climaxes.",
  },
];

const secretReveals: Insight[] = [
  {
    title: "Pre-Show Intelligence Gathering",
    description:
      "Assistants and casual lobby conversations funnel background details into a subtle briefing system. The book discloses how these intel cards are coded and passed on-stage.",
  },
  {
    title: "Stacked Memory Systems",
    description:
      "A hybrid of the Major System and the PAO (Person–Action–Object) technique lets Oz memorize long strings of numbers, names, and drawings that later appear as spontaneous hits.",
  },
  {
    title: "Dual Reality Climaxes",
    description:
      "In key finales, the volunteer experiences a different sequence than the audience. When narratives are stitched together, the gap reads as genuine clairvoyance.",
  },
];

const applications: Insight[] = [
  {
    title: "Negotiations & Sales",
    description:
      "Mirroring posture, calibrating language, and strategic silence are repurposed as tools for reading reluctance and buying signals in real-world deals.",
  },
  {
    title: "Leadership",
    description:
      "Oz argues that leaders who track team micro-behaviors can intervene early, coach with empathy, and frame messages in a way that feels bespoke.",
  },
  {
    title: "Creative Brainstorming",
    description:
      "His rehearsal diagrams double as ideation frameworks: start from the desired emotional outcome, then build an experience backwards that guarantees it.",
  },
];

const InsightSection = ({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: Insight[];
}) => (
  <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70">
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      <p className="text-base text-zinc-600 dark:text-zinc-400">{subtitle}</p>
    </div>
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.title} className="space-y-1.5">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            {item.title}
          </h3>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-6 py-12 font-sans text-zinc-900 dark:from-zinc-900 dark:via-black dark:to-zinc-900 dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="space-y-6 rounded-3xl border border-transparent bg-white/80 p-10 shadow-lg backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <p className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            Deep-Dive Overview
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Inside <em>Read Your Mind</em> by Oz: Mentalism Blueprints & Human
            Insight
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Oz pulls back the curtain on how elite mentalists engineer
            jaw-dropping predictions. The book blends memoir, rehearsal journals
            from TV specials, and step-by-step walkthroughs of signature pieces.
            Rather than mysticism, Oz highlights deliberate practice, ethics,
            and emotional intelligence as the real superpowers.
          </p>
        </header>

        <InsightSection
          title="Core Ideas the Book Hammers Home"
          subtitle="These chapters frame mind reading as a disciplined craft grounded in observation, rehearsal, and empathy."
          items={coreIdeas}
        />

        <InsightSection
          title="Signature Methods the Book Demystifies"
          subtitle="Oz dissects the mechanics behind fan-favorite routines, swapping vague anecdotes for reproducible systems."
          items={signatureMethods}
        />

        <section className="grid gap-8 lg:grid-cols-2">
          <InsightSection
            title="Biggest Secrets He Explicitly Reveals"
            subtitle="These disclosures show how the 'impossible' moments are engineered without betraying the volunteer's trust."
            items={secretReveals}
          />
          <InsightSection
            title="How Oz Recommends Translating Skills Beyond the Stage"
            subtitle="The closing chapters reframe performance tactics as tools for daily communication and leadership."
            items={applications}
          />
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Reading Roadmap
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Start with Oz&apos;s origin story to understand the why, then move
            through the toolkit chapters to pick up observation drills and
            forcing techniques. Save the dual-reality breakdown and ethics
            manifesto for last—they contextualize how these skills should be
            used responsibly in the wild.
          </p>
        </section>
      </main>
    </div>
  );
}
