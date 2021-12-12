import { FC } from "react";
import Head from "next/head";
import styles from "../../styles/Layout.module.css";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TASI 2.0</title>
        <meta name="description" content="Aplicación de cajero automatico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <h4>TASI - 2.0</h4>
      </footer>
    </div>
  );
};

export default Layout;
