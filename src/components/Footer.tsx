export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-foreground/10">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-foreground/50">
          © {new Date().getFullYear()} zach davidson
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="https://x.com/zachtdavidson"
            target="_blank"
            rel="noopener noreferrer"
          >
            @zachtdavidson
          </a>
          <a href="mailto:zach@heliotrope.partners">
            zach@heliotrope.partners
          </a>
        </div>
      </div>
    </footer>
  );
}
