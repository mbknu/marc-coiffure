import React from "react";
import Image from "next/image";
import styles from "./caroussel.module.css";

const Caroussel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_one}>
        <Image
          src="/assets/img/caroussel-coiffure/12.jpg"
          alt="intérieur-salon"
          width={110}
          height={148}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/19.jpg"
          alt="intérieur-salon"
          width={104}
          height={139}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/22.jpg"
          alt="intérieur-salon"
          width={82}
          height={124}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/2.jpg"
          alt="intérieur-salon"
          width={310}
          height={232}
        ></Image>
      </div>
      <div className={styles.container_two}>
        <Image
          src="/assets/img/caroussel-coiffure/20.jpg"
          alt="intérieur-salon"
          width={349}
          height={232}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/18.jpg"
          alt="intérieur-salon"
          width={248}
          height={185}
        ></Image>
      </div>
      <div className={styles.container_three}>
        <Image
          src="/assets/img/caroussel-coiffure/6.jpg"
          alt="intérieur-salon"
          width={103}
          height={155}
        ></Image>

        <Image
          src="/assets/img/caroussel-coiffure/11.jpg"
          alt="intérieur-salon"
          width={98}
          height={147}
        ></Image>
      </div>
      <div className={styles.container_four}>
        <Image
          src="/assets/img/caroussel-coiffure/7.jpg"
          alt="intérieur-salon"
          width={146}
          height={196}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/8.jpg"
          alt="intérieur-salon"
          width={123}
          height={165}
        ></Image>
      </div>
      <div className={styles.container_five}>
        <Image
          src="/assets/img/caroussel-coiffure/9.jpg"
          alt="intérieur-salon"
          width={138}
          height={207}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/10.jpg"
          alt="intérieur-salon"
          width={172}
          height={230}
        ></Image>
      </div>
      <div className={styles.container_six}>
        <Image
          src="/assets/img/caroussel-coiffure/17.jpg"
          alt="intérieur-salon"
          width={172}
          height={230}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/1.jpg"
          alt="intérieur-salon"
          width={146}
          height={196}
        ></Image>
      </div>
      <div className={styles.container_seven}>
        <Image
          src="/assets/img/caroussel-coiffure/16.jpg"
          alt="intérieur-salon"
          width={155}
          height={207}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/14.jpg"
          alt="intérieur-salon"
          width={155}
          height={207}
        ></Image>
      </div>
      <div className={styles.container_height}>
        <Image
          src="/assets/img/caroussel-coiffure/23.jpg"
          alt="intérieur-salon"
          width={147}
          height={196}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/24.jpg"
          alt="intérieur-salon"
          width={172}
          height={230}
        ></Image>
      </div>
      <div className={styles.container_nine}>
        <Image
          src="/assets/img/caroussel-coiffure/3.jpg"
          alt="intérieur-salon"
          width={146}
          height={196}
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/4.jpg"
          alt="intérieur-salon"
          width={146}
          height={196}
        ></Image>
      </div>
      <div className={styles.container_ten}>
        <Image
          src="/assets/img/caroussel-coiffure/5.jpg"
          alt="intérieur-salon"
          width={295}
          height={220}
        ></Image>

        <Image
          src="/assets/img/caroussel-coiffure/21.jpg"
          alt="intérieur-salon"
          width={310}
          height={232}
        ></Image>
      </div>
    </div>
  );
};
export default Caroussel;
