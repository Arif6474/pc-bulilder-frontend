// import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layouts/RootLayout";
import styles from "@/styles/Home.module.css";
const LoginPage = () => {
  return (
    <div className="bg-gray-700 max-w-[400px] mx-auto mt-20 rounded-lg shadow-md">
      <Head>
        <title>Next Login</title>
      </Head>
      <div className="p-4 text-center">
        <h3 className="text-white font-bold">LOGIN</h3>
        <div
          className={`flex justify-center items-center gap-4 my-5 ${styles.social_icons}`}
        >
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: 'http://localhost:3000/'
              })
            }
          />
        </div>
        <hr />
        <form className={`${styles.form}`}>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <button className="btn bg-slate-900 text-white mx-auto w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
