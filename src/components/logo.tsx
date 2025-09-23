import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center" aria-label="Lifeline Life Sciences Homepage">
      <Image src="/images/logo.png" alt="Lifeline Life Sciences Logo" width={56} height={56} className="h-14 w-14" />
    </a>
  );
}
