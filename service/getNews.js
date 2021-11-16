import { getNewsApi } from "../config/ApiNews";
import axiosConfig from "./base";
const getNewsByCondition = async (page, page_size, keyword) => {
    const response = await axiosConfig({
        url: getNewsApi,
        method: "POST",
        data: {
            page: page || 1,
            page_size: page_size || 4,
            keyword: keyword || ""
        }
    });
    return response;
}

export default getNewsByCondition;