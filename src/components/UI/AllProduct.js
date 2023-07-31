/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const AllProduct = ({ allProducts }) => {
    // console.log(allProducts);
  // const products = Math.floor(Math.random() * allProducts?.length);
  // const randomItem = allProducts[products];
  // const [items, setItems] = useState(null)
  // console.log("🚀 ~ file: AllProduct.js:10 ~ AllProduct ~ items:", items)
  // function displayRandomItem(products) {
  //   const randomIndex = Math.floor(Math.random() * products.length);
  
  //   const randomItem = products[randomIndex];
  //   // setItems(randomItem)
  //   console.log("Random Element:", randomItem);
  // }
  
  // // Call the function to display a random element
  // displayRandomItem(allProducts);
 
  
  
  return (
    <>
      <div>
        <h2 className="text-center text-gray-700 text-3xl font-bold my-4">
          Featured Products
          <div class="flex justify-center">
            <hr class="border-t-2 border-gray-900 w-1/6 my-4" />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
        {allProducts &&
          allProducts?.map((product) => {
            const { title, img, price, status, category, rating } = product;
            return (
              <>
                <Link href={`/products/${product?._id}`}>
                  <div className="card w-96  shadow-xl mb-4">
                    <figure>
                      <img src={img} width="auto" height="250px" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <p className="text-gray-700 text-md">{status}</p>
                      <h2 className="card-title text-gray-700">
                        {title}
                        <div className="text-orange-600 p-2">{price}৳</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-start">
                        <div className="badge badge-outline text-gray-700 py-2">
                          Category: {category}
                        </div>
                        <br />
                        <div className="badge badge-outline text-gray-700 py-2">
                          Rating: {rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default AllProduct;

/* 



*/
