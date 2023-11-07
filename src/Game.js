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
}