export class NewAccount {
  accountType: string;
  amount: number;

  constructor() {
    (this.accountType = ''), (this.amount = 0);
  }
}
