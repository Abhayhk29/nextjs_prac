import { notFound } from "next/navigation"


const ProductReviewDetails = ({ params }: { params : {productid: string, reviewid: string}}) => {
    console.log("in the productid")
    console.log(params.reviewid)
    if(parseInt(params.reviewid) > 1000){
        return notFound()
    }
    return (
      <div>ProductReviewDetails {params.productid} of {params.reviewid}</div>
    )
  }
  
  export default ProductReviewDetails