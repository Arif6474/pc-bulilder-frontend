import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import AllProduct from "@/components/UI/AllProduct";
import Banner from "@/components/UI/Banner";

const HomePage = ({ allProducts }) => {
  return (
    <>
      <Head>
        <title>PC-Builder</title>
        <meta name="description" content="This is PC-Builder website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <AllProduct allProducts={allProducts} />
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pc-builder-server-liard.vercel.app/products`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
