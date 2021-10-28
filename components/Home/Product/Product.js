import React from "react";
import { LayoutContainer, Grid, Card } from "../../container";
import LayoutProduct from "./LayoutProduct";

const Product = ({ product }) => {
  return (
    <LayoutContainer>
      <h4 data-aos='zoom-in'>Sản phẩm</h4>
      <Grid>
        {product.map((item, index) => {
          if(index % 2 == 0){
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
  );
};

export default Product;
