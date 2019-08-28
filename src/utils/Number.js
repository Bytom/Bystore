import BigNumber from "bignumber.js"

export class Number {
  /***
   * format num to BTM
   * @returns number
   */
  static formatNue(num, dec) {
    let n = new BigNumber(num);
    let base = new BigNumber(10).exponentiatedBy(dec)

    let result = n.dividedBy(base)

    return result.toFormat(dec);
  }

  /***
   * format num to percent
   * @returns percentage
   */
  static fractionalNum(upper, lower) {
    let n = new BigNumber(upper).div(lower);

    let result = n.shiftedBy(2).decimalPlaces(2)
    return result+'%';
  }

  /***
   * format num to currency value
   * @returns percentage
   */
  static formatCurrency(num, type) {
    let n = new BigNumber(num);
    switch(type){
      case "in_cny":
        return `¥ ${n.toFormat()}`
      case "in_usd":
        return `$ ${n.toFormat()}`
      case "in_btc":
        return `₿ ${n.toFormat()}`
      default:
        return `¥ ${n.toFormat()}`
    }
  }

}

export default Number;
