import React, { useEffect, useState } from "react";
import { LayoutContainer, Grid, SkeletonLoading } from "../../container";
import LayoutProduct from "./LayoutProduct";
import dataFake from "./FakeData/FakeData";
const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    // fetch data from server axios.get
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setData(dataFake);
    }, 500);
    setIsLoading(false);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <LayoutContainer>
      <h4>Sản phẩm</h4>
      <Grid>
        {!isLoading &&
          data &&
          data.map((item) => {
            return (
              <LayoutProduct
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
