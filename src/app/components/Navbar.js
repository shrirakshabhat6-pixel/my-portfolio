import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>Shriraksha</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
      </div>
    </nav>
  );
}