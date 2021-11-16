import { apiGetProducts } from "../config/ApiProducts";
import axiosConfig from "./base";

const getProductsByCondition = async (page, page_size) => {
    const response = await axiosConfig({
        url: apiGetProducts,
        method: "POST",
        data: {
            page: page || 1,
            page_size: page_size || 4
        }
    })
    return response;
}

export {
    getProductsByCondition
}