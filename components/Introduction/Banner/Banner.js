import React from "react";
import { BannerPage } from "../../container";
import styles from "./Banner.module.scss";
const Banner = () => {
  return (
    <>
      <BannerPage
        classNameBanner={styles.container}
        classNameBox={styles['box-container']}
        title="Giới thiệu về chúng tôi"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eros eu
        lacus, tincidunt nunc dui magna tempor. A nisl justo, eget mauris
        suscipit porttitor quis ut. Adipiscing non scelerisque urna at. Ultrices
        posuere pharetra sed viverra. Proin lorem nibh elementum egestas tempor
        a velit cras posuere. Nunc, molestie magnis turpis amet cras volutpat
        dui vel. At sit facilisi cursus cras turpis. Lobortis ullamcorper lectus
        risus rutrum amet, aliquet aliquet. Odio adipiscing sed velit risus.
        Velit platea diam pellentesque lacus vitae etiam neque. Leo scelerisque
        purus mi a id fames sollicitudin. Porttitor eget sapien, nam purus
        adipiscing cras. Purus, libero, egestas tellus augue tellus scelerisque
        proin ullamcorper. Vel nisl nullam ullamcorper ipsum eu. Commodo
        phasellus tortor ut sit tristique pellentesque habitasse commodo. Proin
        lectus libero quisque eu purus donec porttitor ullamcorper. Donec morbi
        turpis elit euismod tellus massa. Quisque sit et sit ac in interdum."
      />
    </>
  );
};

export default Banner;
