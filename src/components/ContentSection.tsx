import type { Pillar } from "@/data/content";

interface ContentSectionProps {
  pillar: Pillar;
}

export default function ContentSection({ pillar }: ContentSectionProps) {
  return (
    <section className="pb-12 border-b border-foreground/10 last:border-0">
      {/* header */}
      <h2 className="text-lg font-medium mb-1">{pillar.title}</h2>
      <p className="text-sm text-foreground/50 italic mb-4">{pillar.tagline}</p>

      {/* description */}
      <p className="text-foreground/70 leading-relaxed mb-6">
        {pillar.description}
      </p>

      {/* dashboard grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* published */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-3">
            published
          </h3>
          {pillar.published.length > 0 ? (
            <ul className="space-y-2">
              {pillar.published.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm"
                  >
                    {item.title}
                    {item.external && (
                      <span className="text-foreground/30">↗</span>
                    )}
                  </a>
                  {item.type && (
                    <span className="ml-2 text-xs text-foreground/30">
                      {item.type}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-foreground/30">coming soon</p>
          )}
        </div>

        {/* in progress */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-3">
            in progress
          </h3>
          {pillar.inProgress.length > 0 ? (
            <ul className="space-y-2">
              {pillar.inProgress.map((title) => (
                <li
                  key={title}
                  className="text-sm text-foreground/50 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-foreground/30">—</p>
          )}
        </div>

        {/* explore */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-3">
            explore
          </h3>
          {pillar.explore.length > 0 ? (
            <ul className="space-y-2">
              {pillar.explore.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-accent"
                  >
                    {item.label}
                    {item.external && (
                      <span className="text-foreground/30">↗</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-foreground/30">—</p>
          )}
        </div>
      </div>
    </section>
  );
}
