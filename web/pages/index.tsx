import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Read <Link href="/posts/first-post">this page!</Link>fd
    </div>
  );
};

export default Home;
