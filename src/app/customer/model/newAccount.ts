export class NewAccount {
  accountType: string;
  amount: number;

  constructor(accountType: string, amount: number) {
    (this.accountType = accountType), (this.amount = amount);
  }
}
