import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Advanced Care Homepage">
      <Image
        src="/images/logo.png"
        alt="Advanced Care Logo"
        width={180}
        height={40}
        priority
      />
    </a>
  );
}
