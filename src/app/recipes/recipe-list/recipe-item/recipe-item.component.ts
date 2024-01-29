import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() item: Recipe;
  @Output() onRecipeClicked = new EventEmitter<void>();

  selectRecipe()
  {
    this.onRecipeClicked.emit();
  }
}
