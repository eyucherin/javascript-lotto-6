import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './Constants.js';

class App {
  async play() {
    try{
      const purchaseAmount = await this.validatePurchaseAmount();

    }
    catch(error){
      console.error(error.message);
    }
  }

  async validatePurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    const intAmount = parseInt(purchaseAmount, 10);

    if (isNaN(intAmount) || intAmount <= 0 || intAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.COST_NOT_DIVISIBLE);
    }

    return intAmount;
  }
}

export default App;
