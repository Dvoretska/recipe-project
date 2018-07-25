import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatos', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredient); or
    this.ingredients.push(...ingredients);
    console.log('this.ingredients', this.ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
