import {
  ProfileOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          CPU / Processo
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Motherboard
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          RAM
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Power Supply Unit
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Storage Device
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Monitor
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Others
        </a>
      ),
    },
  ];

  return (
    <Layout>
      <Header
        className="flex justify-between bg-emerald-900"
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Hathazari Computer Center
            </Link>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button
              style={{
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "3px",
                marginLeft: "10px",
              }}
            >
              Categories
            </Button>
          </Dropdown>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className="bg-emerald-900">
          <Link href="/">
            <items className="flex  items-center justify-center gap-1 text-white ">
              <ProfileOutlined />
              All Product
            </items>
          </Link>
        </Menu>
        <Menu theme="dark" mode="vertical" className="bg-emerald-900">
          <Link href="/">
            <items className="flex  items-center justify-center gap-1 text-white ">
              <ProfileOutlined />
              PC-Builder
            </items>
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
       className="text-center bg-black text-white mt-20"
      >
        <h2
          style={{
            fontSize: "28px",
          }}
        >
            Hathazari Computer Center
        </h2>
        <div className={`flex justify-center items-center gap-4 my-5 ${styles.social_icons}`}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled style={{}}/>
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled style={{}}/>
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled style={{}}/>
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled style={{}}/>
          </Link>
        </div>
        Hathazari Computer Center ©2023 Created by Arif Islam
      </Footer>
    </Layout>
  );
};
export default RootLayout;