"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random() * count);
}

export default function Review({params} : {params: {
    product_ids:string,
    review_ids:string}}) {

      const random = getRandomInt(2);

      if(random===1){
        throw new Error("Error loading review")
      }

        if(parseInt(params.review_ids) > 1000){
            notFound();
        }
    return (
      <>
        <h2>Review of product {params.product_ids} - {params.review_ids}</h2>
      </>
    );
  }