import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
