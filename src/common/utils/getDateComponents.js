
/**
 * @param {any} year
 * @param {any} month
 * @param {any} day
 */
function getDateComponents (year, month, day) {
    const date = new Date(year, month - 1, day); // 月份从 0 开始
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1, // 月份从 0 开始
      day: date.getDate(),
    };
  }
  
  export default getDateComponents ;