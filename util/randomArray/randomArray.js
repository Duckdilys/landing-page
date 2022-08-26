const randomArray = (array) => {
    const position = Math.floor(Math.random() * array.length);
    return {
        position: position,
        value: array[position]
    }
}

export default randomArray;