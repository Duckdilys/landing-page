import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
export const serverURL =  publicRuntimeConfig.MH_SOLUTION_API_URL;
// process.env.SERVER_URL
export const VERSATICA_APP = {
    link: 'https://versatica.io',
    seo_id: 'nen-tang-phan-tich-du-lieu-versatica-data-mining-platform-5'
}