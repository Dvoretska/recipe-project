import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service'
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  };

  storeRecipes() {
    return this.http.put('https://recipe-project-9c369.firebaseio.com/recipes.json', this.recipeService.getRecipes())
  }

  getRecipes() {
     return this.http.get('https://recipe-project-9c369.firebaseio.com/recipes.json').pipe(
       map(
         (response) => {
           let recipes: any = response;
           for(let recipe of recipes) {
             if(!recipe['ingredients']) {
               recipe['ingredients'] = [];
             }
           }
           return recipes;
         }
       ))
       .subscribe(
         (recipes: Recipe[]) => {
           this.recipeService.setRecipes(recipes);
         }
       )
  }

}
