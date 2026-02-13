interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Testimonial placeholder — add a quote from a founder or collaborator here.",
    name: "Name Here",
    title: "Title, Company",
  },
  {
    quote: "Testimonial placeholder — add a quote from a founder or collaborator here.",
    name: "Name Here",
    title: "Title, Company",
  },
  {
    quote: "Testimonial placeholder — add a quote from a founder or collaborator here.",
    name: "Name Here",
    title: "Title, Company",
  },
  {
    quote: "Testimonial placeholder — add a quote from a founder or collaborator here.",
    name: "Name Here",
    title: "Title, Company",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 bg-foreground/[0.02]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">what people say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-background border border-foreground/10 rounded-lg"
            >
              <p className="text-foreground/70 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/30 text-xs">
                  photo
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
