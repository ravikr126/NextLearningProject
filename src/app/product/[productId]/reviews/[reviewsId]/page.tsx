export default function ReviewDetails({
    params,
  }: {
    params: { productId: string;
        reviewsId: string;
     };
  }) {
    return <h1>Review {params.reviewsId} for product {params.productId}</h1>;
  }
  
  // http://localhost:3000/product/1
  