import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-12">
      <nav className="max-w-3xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-medium text-foreground hover:opacity-100">
          zach davidson
        </Link>
        <div className="flex gap-6">
          <Link href="/start-here" className="text-foreground/70 hover:text-foreground">
            start here
          </Link>
          <a
            href="https://heliotrope.partners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground"
          >
            heliotrope
          </a>
        </div>
      </nav>
    </header>
  );
}
