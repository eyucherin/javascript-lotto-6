import { Random } from "@woowacourse/mission-utils";
import { CONSTANT,ERROR_MESSAGE } from "./Constants";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.ERROR_MSG_DUPLICATE_NUMBER);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.ERROR_MSG_DUPLICATE_NUMBER);
    }
    numberSet.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.ERROR_MSG_NUMBER_OUT_OF_RANGE);
      }
    });
  }

  static generateRandomNumbers(){
    const numbers = new Set();
    while(numbers.size < CONSTANT.LOTTO_NUMBER_COUNT){
      numbers.add(Random.pickNumberInRange(CONSTANT.MIN_LOTTO_NUMBER,CONSTANT.MAX_LOTTO_NUMBER))
    };
    return[...numbers];
  }

}

export default Lotto;
