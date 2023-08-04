/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { addToCategory } from "@/redux/features/pcBuilder/pcBuilderSlice";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function Monitor({ allProducts }) {
  const monitor = allProducts?.filter((p) => p.category === "monitor");
  const dispatch = useDispatch();
  const router = useRouter()
  const handleAddToBuilder = (product) => {
    dispatch(addToCategory({ category: 'monitor', product }));
    router.push('/pcBuild')
  };
  return (
    <>
      <div>
        <h2 className="text-center text-gray-700 text-3xl font-bold my-4">
        Category Products
          <div class="flex justify-center">
            <hr class="border-t-2 border-gray-900 w-1/6 my-4" />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
        {monitor &&
          monitor?.map((product) => {
            const { title, img, price, status, category, rating } = product;
            return (
              <>
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
                    <button 
                    onClick={()=>handleAddToBuilder(product)}
                     className="btn bg-gray-800 mt-4 text-white border-none"
                     >Add to Build</button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === 'undefined') {
  //   return {
  //     props: {
  //       allProducts: [],
  //     },
  //     revalidate: 10,
  //   };
  // }
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
