import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center" aria-label="Lifeline Life Sciences Homepage">
      <Image src="/images/logo.png" alt="Lifeline Life Sciences Logo" width={64} height={64} className="h-16 w-16" />
    </a>
  );
}
