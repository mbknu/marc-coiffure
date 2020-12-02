import Head from "next/head";
import Informations from "../components/Informations/Informations";
import NavBar from "../Presentationals/Navbar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coiffures de Marc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>
        <Informations />
      </div>
    </div>
  );
}
