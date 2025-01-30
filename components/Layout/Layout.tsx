import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";

import { NavBar } from "../NavBar/NavBar";

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <main className={styles.main}>
      <NavBar />
      {children}
    </main>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
