import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  @Output() onListChanged = new EventEmitter<Recipe[]>();
  @Output() onRecipeClicked= new EventEmitter<Recipe>();

  ngOnInit() {
    this.recipes = [];

    let recipeA = new Recipe("recipeA", "desc", "https://placekitten.com/100/50");
    recipeA.addIngredient(new Ingredient("AAA", 1));
    recipeA.addIngredient(new Ingredient("BBB", 2));

    let recipeB = new Recipe("recipeB", "desc2", "https://placekitten.com/100/50");
    recipeB.addIngredient(new Ingredient("CCC", 3));
    recipeB.addIngredient(new Ingredient("DDD", 4));

    this.recipes.push(recipeA);
    this.recipes.push(recipeB);

    this.onListChanged.emit(this.recipes);
  }

  recipeClicked(recipe: Recipe)
  {
    this.onRecipeClicked.emit(recipe);
  }
}
