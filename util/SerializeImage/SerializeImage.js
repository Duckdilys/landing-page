const SerializeImage = (url, size) => {
    const splitUrl = url.split('.');
    let lastUrl = splitUrl[splitUrl.length - 2];
    lastUrl += `_${size || 256}`;

    const joinFirstUrl = splitUrl.slice(0, splitUrl.length - 2).join('.');
    const joinLastUrl = splitUrl.slice(splitUrl.length - 1).join('.');
    return url;
}

export default SerializeImage;
