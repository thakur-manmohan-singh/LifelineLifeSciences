import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Lifeline Life Sciences Homepage">
      <Image src="/images/logo.png" alt="Lifeline Life Sciences Logo" width={40} height={40} className="h-10 w-10" />
      <span className="sm:inline-block font-headline text-xl font-bold text-foreground">Lifeline Life Sciences</span>
    </a>
  );
}
