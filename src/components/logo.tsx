import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center" aria-label="Lifeline Life Sciences Homepage">
      <Image src="/images/logo.png" alt="Lifeline Life Sciences Logo" width={160} height={80} className="h-20 w-40" />
    </a>
  );
}
