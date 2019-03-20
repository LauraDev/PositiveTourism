export class FullDayProgram {

  description: string;
  note: string;
  included: Array<string>;
  excluded: Array<string>;

  constructor(fullDayProgram?: any) {
    Object.assign(this, fullDayProgram);
    if (!this.included) {
      this.included = [];
    }
    if (!this.excluded) {
      this.excluded = [];
    }
  }

}
