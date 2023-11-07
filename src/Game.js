import { Random } from "@woowacourse/mission-utils";
import { CONSTANT } from "./Constants";
class Game {
    #tickets;
    #winningNumbers;
    #bonusNumber;

    constructor(numTicket,winningNum,bonusNum){
        this.#tickets = this.generateTickets(numTicket);
        this.#winningNumbers = winningNum;
        this.#bonusNumber = bonusNum;
    }

    generateTickets(numberOfTicket){
        const tickets = [];
        for(let i = 0; i < numberOfTicket; i++){
            const numbers = Random.pickUniqueNumbersInRange(CONSTANT.MIN_LOTTO_NUMBER, CONSTANT.MAX_LOTTO_NUMBER, CONSTANT.LOTTO_NUMBER_COUNT);
            tickets.push(new Lotto(numbers));
        }
        return tickets;
    }
}