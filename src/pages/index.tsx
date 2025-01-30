import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HeadMeta } from "../../components/HeadMeta/HeadMeta";
import { getLayout } from "../../components/Layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Home() {
  return (
    <>
      <HeadMeta title="Create Next App" />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* <Layout> </Layout> */}
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

Home.getLayout = getLayout;
export default Home;
