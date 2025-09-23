import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Lifeline Life Sciences Homepage">
      <Image
        src="https://picsum.photos/seed/lifeline-logo/40/40"
        alt="Lifeline Life Sciences Logo"
        width={40}
        height={40}
        priority
        className="rounded-full"
        data-ai-hint="abstract science"
      />
      <span className="sm:inline-block font-headline text-xl font-bold text-foreground">Lifeline Life Sciences</span>
    </a>
  );
}
