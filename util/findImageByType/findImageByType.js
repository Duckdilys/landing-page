const findImageByType = (array, property, valueArray) => {
    if(!property || !array) {
        return;
    }

    const value = array.find(item => item[property] === valueArray);
    if(value === 'null' || !value) {
        return null;
    }
    return value;
}

export default findImageByType;