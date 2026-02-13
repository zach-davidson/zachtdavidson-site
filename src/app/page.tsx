import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* headshot placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-foreground/10 flex-shrink-0 flex items-center justify-center text-foreground/30 text-sm">
            photo
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-medium mb-4">
              zach davidson
            </h1>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              founder of{" "}
              <a
                href="https://heliotrope.partners"
                target="_blank"
                rel="noopener noreferrer"
              >
                heliotrope
              </a>
              . previously a magician, then started a venture-backed company.
              now i coach founders building conscious companies in the
              intelligence age.
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://x.com/zachtdavidson"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zachtdavidson
              </a>
              <span className="text-foreground/30">·</span>
              <a
                href="https://heliotrope.partners"
                target="_blank"
                rel="noopener noreferrer"
              >
                heliotrope.partners
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <Testimonials />

      {/* about */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-medium mb-6">about</h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              i believe we&apos;re at a turning point in human history. AI will
              reshape everything — work, creativity, consciousness itself. the
              founders who understand this and build with intention will shape
              what comes next.
            </p>
            <p>
              my work sits at the intersection of technology and perception.
              from performing magic (the original attention technology) to
              building companies to coaching founders, i&apos;ve always been
              fascinated by how we construct reality through what we choose to
              see.
            </p>
            <p>
              at{" "}
              <a
                href="https://heliotrope.partners"
                target="_blank"
                rel="noopener noreferrer"
              >
                heliotrope
              </a>
              , i work with founders who are building the future — not just
              chasing exits, but creating something worth existing. conscious
              companies in the intelligence age.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:zach@heliotrope.partners"
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
