import { Metadata } from "next";
type Props = {
  params:{
    product_ids: string;
  }
}

export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `Product ${params.product_ids}`
  }
}
function getRandomInt(count: number){
  return Math.floor(Math.random() * count);
}

export default function ProductDetail({params} : Props) {
  const random = getRandomInt(2);

      if(random===1){
        throw new Error("Error loading product")
      }

    return (
      <>
        <h2>Product Detail Page {params.product_ids}</h2>
      </>
    );
  }