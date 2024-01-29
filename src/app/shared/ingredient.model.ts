export class Ingredient {
  constructor(public name: string, public amount: number) {}

  public isEqualTo(ingredient: Ingredient)
  {
    return this.name == ingredient.name && Number(this.amount) == Number(ingredient.amount);
  }
}
