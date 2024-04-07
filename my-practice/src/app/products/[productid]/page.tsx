import { Metadata } from "next"
type Props = {
  params: {
    productid: string,

  }
}

// it canbe make as async
export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `products ${params.productid}`
  }
}

const ProductDetails = ({ params }: Props) => {
    return (
      <div>ProductDetails {params.productid}</div>
    )
  }
  
  export default ProductDetails