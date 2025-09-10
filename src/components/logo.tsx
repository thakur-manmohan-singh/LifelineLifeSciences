import { FlaskRound } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Lifeline Life Sciences Homepage">
      <FlaskRound className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-semibold text-foreground">
        Lifeline Life Sciences
      </span>
    </a>
  );
}
