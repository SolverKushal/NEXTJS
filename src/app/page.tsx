import Link from "next/link";

export default function Home() {
  return (
    <>
  <h2>Home Page</h2>
  <Link  href="/blog">Blog</Link>
  <Link  href="/products">Product</Link>
  </>
  )
}
