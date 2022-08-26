import { serverURL } from ".";

const getHomePageById = id => `${serverURL}/home-page/${id}`;

const getHomePage = `${serverURL}/home-page/search`;

export {
    getHomePageById,
    getHomePage
}