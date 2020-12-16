import React from "react";
import Image from "next/image";
import styles from "./caroussel.module.css";

const Caroussel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_one}>
        <div className={styles.first_of_three}>
          <div className={styles.img_1}>
            <Image
              src="/assets/img/caroussel-coiffure/12.jpg"
              alt="intérieur-salon"
              width={110}
              height={148}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_2}>
            <Image
              src="/assets/img/caroussel-coiffure/19.jpg"
              alt="intérieur-salon"
              width={104}
              height={139}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_3}>
            <Image
              src="/assets/img/caroussel-coiffure/22.jpg"
              alt="intérieur-salon"
              width={82}
              height={124}
              loading="lazy"
            ></Image>
          </div>
        </div>
        <div className={styles.img_4}>
          <Image
            src="/assets/img/caroussel-coiffure/2.jpg"
            alt="intérieur-salon"
            width={310}
            height={232}
            loading="lazy"
          ></Image>
        </div>
      </div>
      <div className={styles.container_two}>
        <div className={styles.container_two_img}>
          <div className={styles.img_5}>
            <Image
              src="/assets/img/caroussel-coiffure/20.jpg"
              alt="intérieur-salon"
              width={349}
              height={232}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_4}>
            <Image
              src="/assets/img/caroussel-coiffure/18.jpg"
              alt="intérieur-salon"
              width={248}
              height={185}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.container_three}>
        <div className={styles.img_6}>
          <Image
            src="/assets/img/caroussel-coiffure/6.jpg"
            alt="intérieur-salon"
            width={103}
            height={155}
            loading="lazy"
          ></Image>
        </div>
        <div className={styles.img_7}>
          <Image
            src="/assets/img/caroussel-coiffure/11.jpg"
            alt="intérieur-salon"
            width={98}
            height={147}
            loading="lazy"
          ></Image>
        </div>
      </div>
      <div className={styles.container_four}>
        <div className={styles.container_four_img}>
          <div className={styles.img_8}>
            <Image
              src="/assets/img/caroussel-coiffure/8.jpg"
              alt="intérieur-salon"
              width={123}
              height={165}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_9}>
            <Image
              src="/assets/img/caroussel-coiffure/7.jpg"
              alt="intérieur-salon"
              width={146}
              height={196}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.container_five}>
        <div className={styles.container_five_img}>
          <div className={styles.img_10}>
            <Image
              src="/assets/img/caroussel-coiffure/9.jpg"
              alt="intérieur-salon"
              width={138}
              height={207}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_11}>
            <Image
              src="/assets/img/caroussel-coiffure/10.jpg"
              alt="intérieur-salon"
              width={150}
              height={230}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.container_six}>
        <div className={styles.container_six_img}>
          <div className={styles.img_12}>
            <Image
              src="/assets/img/caroussel-coiffure/17.jpg"
              alt="intérieur-salon"
              width={142}
              height={230}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_13}>
            <Image
              src="/assets/img/caroussel-coiffure/1.jpg"
              alt="intérieur-salon"
              width={146}
              height={196}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.container_seven}>
        <div className={styles.container_seven_img}>
          <div className={styles.img_14}>
            <Image
              src="/assets/img/caroussel-coiffure/23.jpg"
              alt="intérieur-salon"
              width={146}
              height={196}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_15}>
            <Image
              src="/assets/img/caroussel-coiffure/24.jpg"
              alt="intérieur-salon"
              width={142}
              height={230}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.container_height}>
        <div className={styles.container_height_img}>
          <div className={styles.img_16}>
            <Image
              src="/assets/img/caroussel-coiffure/16.jpg"
              alt="intérieur-salon"
              width={155}
              height={207}
              loading="lazy"
            ></Image>
          </div>
          <div className={styles.img_17}>
            <Image
              src="/assets/img/caroussel-coiffure/14.jpg"
              alt="intérieur-salon"
              width={155}
              height={207}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.container_nine}>
        <Image
          src="/assets/img/caroussel-coiffure/3.jpg"
          alt="intérieur-salon"
          width={146}
          height={196}
          loading="lazy"
        ></Image>
        <Image
          src="/assets/img/caroussel-coiffure/4.jpg"
          alt="intérieur-salon"
          width={146}
          height={196}
          loading="lazy"
        ></Image>
        <div className={styles.img_20}>
          <Image
            src="/assets/img/caroussel-coiffure/21.jpg"
            alt="intérieur-salon"
            width={310}
            height={232}
            loading="lazy"
          ></Image>
        </div>
      </div>
      <div className={styles.container_ten}>
        <Image
          src="/assets/img/caroussel-coiffure/5.jpg"
          alt="intérieur-salon"
          width={295}
          height={220}
          loading="lazy"
        ></Image>
      </div>
    </div>
  );
};
export default Caroussel;
