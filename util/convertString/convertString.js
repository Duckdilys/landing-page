const convertString = (string) => {
  const lowerCaseString = string.toLowerCase();
  const splitString = lowerCaseString.split(" ");
  
  const firstLetter = splitString[0][0].toUpperCase();
   splitString[0][0] = firstLetter;
  const mapString = splitString.map((item) => {
    return item;
  });
  return mapString.join(" ");
};

export { convertString };
