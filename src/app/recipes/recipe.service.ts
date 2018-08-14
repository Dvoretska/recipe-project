import {EventEmitter, Injectable} from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe(
      'Spicy Mexican Hot Chocolate Cookies',
      'These cookies are the best of 2 worlds. The sweetness of chocolate with a kick from cayenne.',
      'https://images.media-allrecipes.com/userphotos/560x315/793265.jpg',
      [
        new Ingredient('egg', 5),
        new Ingredient('French Fries', 10),
      ]
    ),
    new Recipe(
      'Almond-Raspberry Meringue Bars',
      'These chewy, delicious bars also have a touch of coconut.',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('sugar', 3),
        new Ingredient('paste', 7),
      ]
    )
  ]
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index]
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
}
