import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("AAA", 5),
    new Ingredient("BBB", 10),
  ];

  private nullIngredient = new Ingredient('', 0);

  currentIngredient: Ingredient = this.nullIngredient;

  ingredientSelected(index: number) {

    if (this.currentIngredient == this.ingredients[index]) {
      this.currentIngredient = this.nullIngredient;
    }
    else {
      this.currentIngredient = this.ingredients[index];
    }
  }

  setStyle(shouldColor: Boolean) {
    return shouldColor ? "cursor: pointer; border-color: red; margin-top: 2px" : "cursor: pointer; margin-top: 2px";
  }

  private findObjectIndex(array: Ingredient[], targetValue: string): number {
    let index = array.findIndex(obj => obj.name.toUpperCase() === targetValue.toUpperCase());
    console.log('findObjectIndex ' + targetValue + ' ' + index);
    return index;
  }

  stateChange(data: { state: string, ingredient: Ingredient }) {

    console.log(data);
    //Paranoia IMPORTANT
    data.ingredient.amount = Number(data.ingredient.amount);

    let foundIndex = this.findObjectIndex(this.ingredients, data.ingredient.name);

    //console.log("foundIndex: " + foundIndex + " objects are equal? : " + (data.ingredient == this.nullIngredient));
    //console.log(data.ingredient);
    //console.log(this.nullIngredient);

    if (data.state == "add" && !data.ingredient.isEqualTo(this.nullIngredient)) {
      if (foundIndex !== -1) {
        this.ingredients[foundIndex] = data.ingredient;
        this.currentIngredient = data.ingredient;
      }
      else {
        this.ingredients.push(data.ingredient);
      }
    }
    else if (data.state == "delete" && !data.ingredient.isEqualTo(this.nullIngredient)) {
      if (foundIndex !== -1) {
        this.ingredients.splice(foundIndex, 1);
        this.currentIngredient = this.nullIngredient;
      }
    }
    else {
      this.currentIngredient = this.nullIngredient;
    }
  }
}
