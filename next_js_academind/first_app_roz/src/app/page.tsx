import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share</Link>
      <Link href="/community">Community</Link>
      <h1>Hello world!</h1>
    </main>
  );
}
