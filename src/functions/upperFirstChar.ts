const upperFirstChar = (str: string) => {
    const firstChar = str[0];
    return `${firstChar.toUpperCase()}${str.slice(1)}`
}

export default upperFirstChar;