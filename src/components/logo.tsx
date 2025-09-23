import { Beaker } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Lifeline Life Sciences Homepage">
      <Beaker className="h-10 w-10 text-primary" />
      <span className="sm:inline-block font-headline text-xl font-bold text-foreground">Lifeline Life Sciences</span>
    </a>
  );
}
