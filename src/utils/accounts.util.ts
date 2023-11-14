/* eslint-disable prefer-const */

export class AccountsUtil {
    accountNumber(): string {
        let arrayNum: string[] = [];
        let num: number = 0;

        const max: number = 9999;
        const min: number = 1111;

        while (num < 4) {
            const rand: number = Math.floor(Math.random() * (max - min) + min);
            arrayNum.push(rand.toString());
            num++;
        }

        return arrayNum[0] + " " + arrayNum[1] + " " + arrayNum[2] + " " + arrayNum[3];
    }

    accountMoney(): number {
        return Math.floor(Math.random() * 1_000_000);
    }
}

export const AccountsUtilClass: AccountsUtil = new AccountsUtil();