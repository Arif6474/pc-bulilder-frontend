/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";


function Others({ allProducts }) {
  const others = allProducts?.filter(
    (p) =>
      p.category !== "ram" &&
      p.category !== "monitor" &&
      p.category !== "motherboard" &&
      p.category !== "Power Supply Unit" &&
      p.category !== "processor" &&
      p.category !== "storage-device"
  );

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
        {others &&
          others?.map((product) => {
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
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  
  const res = await fetch(`https://pc-builder-server-liard.vercel.app/products`);
  const data = await res.json();


  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
