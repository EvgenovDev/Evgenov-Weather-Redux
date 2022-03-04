const currentTime = (date: Date) => {

    const addZeroIfNeed = (num: number) => {
        if (num.toString().length <= 1) {
            return "0" + num.toString();
        } else {
            return num.toString();
        }
    }

    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();


    return `${addZeroIfNeed(hours)}:${addZeroIfNeed(minutes)}:${addZeroIfNeed(seconds)}`
}

export default currentTime;