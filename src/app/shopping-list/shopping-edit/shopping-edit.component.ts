import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren, } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Input() currentIngredient: Ingredient;
  @Output() onStateChanged = new EventEmitter<{ state: string, ingredient: Ingredient }>();
  @ViewChildren("ingredientInput") inputs: QueryList<ElementRef>;

  private emitEvent(state: string) {
    let ingredientName: string = <string>this.inputs.toArray()[0].nativeElement.value;
    let ingredientAmount: number = Number(this.inputs.toArray()[1].nativeElement.value);
    ingredientAmount = isNaN(ingredientAmount) ? 0 : ingredientAmount;
    let tempIngredient = new Ingredient(ingredientName, ingredientAmount);
    //debugger;
    this.onStateChanged.emit({ state: state, ingredient: tempIngredient });
  }

  addIngredient() { this.emitEvent("add"); }
  deleteIngredient() { this.emitEvent("delete"); }
  clearSelection() { this.emitEvent("clear") }

}
