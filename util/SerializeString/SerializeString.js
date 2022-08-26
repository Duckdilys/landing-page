const SerializeNormal = (string) => {
    const rs = string.toLowerCase();
    const firstLetter = rs.charAt(0).toUpperCase();
    return firstLetter + rs.substring(1);
}

export {
    SerializeNormal
}