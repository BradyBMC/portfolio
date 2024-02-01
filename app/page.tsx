import Biography from "@/components/Biography"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Biography />
    </main>
  );
}