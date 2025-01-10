import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen h-[72px] flex fixed top-0 border-b-2 z-50 bg-white">
      <div className="w-full flex justify-between items-center max-w-[70%] m-auto">
        <Link href="/">
          <svg
            aria-label="Vercel logomark"
            height="22"
            role="img"
            viewBox="0 0 74 64"
          >
            <path
              d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
              fill="var(--geist-foreground)"
            ></path>
          </svg>
        </Link>
        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/post">Posts</Link>
        </div>
      </div>
    </div>
  );
}
