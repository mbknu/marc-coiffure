import Head from "next/head";
import Caroussel from "../components/Caroussel/Caroussel";
import Informations from "../components/Informations/Informations";
import Footer from "../Presentationals/Footer/Footer";
import NavBar from "../Presentationals/Navbar/NavBar";
import PricesList from "../Presentationals/Prices/PricesList";
import ShopList from "../Presentationals/Shop/ShopList";
import Timetable from "../Presentationals/Timetable/Timetable";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coiffures de Marc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Informations />
      <Caroussel />
      <Timetable />
      <PricesList />
      <ShopList />
      <Footer />
    </div>
  );
}
