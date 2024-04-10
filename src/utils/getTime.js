export const getTime = (time) => {
    let result = new Date(time);
    let hours = result.getHours();
    let minutes = result.getMinutes();

    hours = hours % 12 || 12; // Use 12 if hours is 0
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}`;
};
