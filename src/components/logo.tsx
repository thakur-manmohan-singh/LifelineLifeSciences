import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Lifeline Life Sciences Homepage">
      <Image
        src="/images/logo.png"
        alt="Advanced Care Logo"
        width={180}
        height={40}
        priority
      />
      <span className="hidden sm:inline-block font-headline text-xl font-bold text-foreground">Lifeline Life Sciences</span>
    </a>
  );
}
