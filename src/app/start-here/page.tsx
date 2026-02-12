import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import { pillars, connect } from "@/data/content";

export const metadata: Metadata = {
  title: "Start Here | Zach Davidson",
  description:
    "Magic, Memes, Meaning — three lenses for understanding reality. A living map of the territory.",
};

export default function StartHere() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* intro */}
        <h1 className="text-2xl md:text-3xl font-medium mb-4">start here</h1>
        <p className="text-foreground/70 mb-4 leading-relaxed">
          a map of the territory — not a static about page, but a living
          document that shows what i&apos;m working on, what&apos;s published,
          and what&apos;s coming next.
        </p>
        <p className="text-foreground/50 text-sm mb-12">
          three pillars:{" "}
          <span className="text-accent">magic</span> ·{" "}
          <span className="text-accent">memes</span> ·{" "}
          <span className="text-accent">meaning</span>
        </p>

        {/* pillars */}
        <div className="space-y-12">
          {pillars.map((pillar) => (
            <ContentSection key={pillar.id} pillar={pillar} />
          ))}
        </div>

        {/* connect */}
        <div className="mt-16 pt-12 border-t border-foreground/10">
          <h2 className="text-lg font-medium mb-4">connect</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${connect.email}`}>{connect.email}</a>
            <span className="text-foreground/30">·</span>
            <a
              href={connect.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              @zachtdavidson
            </a>
            <span className="text-foreground/30">·</span>
            <a
              href={connect.heliotrope}
              target="_blank"
              rel="noopener noreferrer"
            >
              heliotrope.partners ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
