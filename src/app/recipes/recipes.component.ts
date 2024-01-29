import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  currentRecipe: Recipe | null | undefined = null;

  changeRecipe(recipe: Recipe) {
    this.currentRecipe = recipe;
  }

  preventNull(recipes: Recipe[]) {
    this.currentRecipe ??= recipes[0];
  }
}
