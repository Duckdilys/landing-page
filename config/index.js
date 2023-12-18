import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
export const serverURL =  publicRuntimeConfig.MH_SOLUTION_API_URL;
// process.env.SERVER_URL
