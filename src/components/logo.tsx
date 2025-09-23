import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Lifeline Life Sciences Homepage">
      <Image
        src="/images/logo.png"
        alt="Advanced Care Logo"
        width={40}
        height={40}
        priority
      />
      <span className="sm:inline-block font-headline text-xl font-bold text-foreground hidden">Lifeline Life Sciences</span>
    </a>
  );
}
