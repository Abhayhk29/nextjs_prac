"use client"

import { notFound } from "next/navigation"

function getRandomInt(count:number){
  return Math.floor(Math.random() * count);
}
const ProductReviewDetails = ({ params }: { params : {productid: string, reviewid: string}}) => {
    console.log("in the productid")
    console.log(params.reviewid)
    const random = getRandomInt(2);

    if(random === 1){
      throw new Error("Error loading review");
    }
    if(parseInt(params.reviewid) > 1000){
        return notFound()
    }
    return (
      <div>ProductReviewDetails {params.productid} of {params.reviewid}</div>
    )
  }
  
  export default ProductReviewDetails