import Link from "next/link";

export default function ProductList() {
  return (
    <>
    <Link href="/">Home</Link>
      <h2>Product List Page</h2>
      <h3><Link href="/products/1">Product 1</Link></h3>
      <h3><Link href="/products/2">Product 2</Link></h3>
      <h3><Link href="/products/3">Product 3</Link></h3>
    </>
  );
}
