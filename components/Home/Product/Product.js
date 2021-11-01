import React from "react";
import { LayoutContainer, Grid } from "../../container";
import LayoutProduct from "./LayoutProduct";

const Product = ({ product, title, className, classNameContainer, classNameGrid }) => {
  return (
    <div className={`${className}`}>
      <LayoutContainer className={classNameContainer}>
        <h4>{title ? title : "Sản Phẩm"}</h4>
        <Grid className={classNameGrid}>
          {product.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <LayoutProduct
                  aos="fade-up"
                  key={item.title}
                  src={item.src}
                  title={item.title}
                  content={item.content}
                />
              );
            }
            return (
              <LayoutProduct
                aos="fade-down"
                key={item.title}
                src={item.src}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </Grid>
      </LayoutContainer>
    </div>
  );
};

export default Product;
