import { Ingredient } from '../shared/ingredient.model';
import { Observable, Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatos', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredient); or
    this.ingredients.push(...ingredients);
    console.log('this.ingredients', this.ingredients)
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
