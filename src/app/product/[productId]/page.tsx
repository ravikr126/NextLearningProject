export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product details page {params.productId}</h1>;
}

// http://localhost:3000/product/1
