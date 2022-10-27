import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
console.log(publicRuntimeConfig)
export const serverURL = publicRuntimeConfig.MH_SOLUTION_API_URL;
// process.env.SERVER_URL
