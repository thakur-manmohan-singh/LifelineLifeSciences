import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-4" aria-label="Lifeline Life Sciences Homepage">
      <Image src="/images/logo.png" alt="Lifeline Life Sciences Logo" width={160} height={80} className="h-20 w-auto" />
      <span className="hidden text-xl font-bold font-headline text-foreground sm:inline">
        Lifeline Life Sciences
      </span>
    </a>
  );
}
