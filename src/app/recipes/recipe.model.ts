import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = [];
  }

  addIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
  }
}
