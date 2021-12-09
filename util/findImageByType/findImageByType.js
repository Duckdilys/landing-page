const findImageByType = (array, property, valueArray) => {
    if(!property || !array) {
        return;
    }

    const value = array.find(item => item[property] === valueArray);
    return value;
}

export default findImageByType;