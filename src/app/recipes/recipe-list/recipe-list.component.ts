import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('A test recipe', 'Test description', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ]
  constructor(private configService: ConfigService) { }

  ngOnInit() {
  this.configService.getRecipes()
    .subscribe(res => {
      console.log('res', res)
      for(let item in res) {
        for(let recipe of res[item]) {
          this.recipes.push(new Recipe(recipe.name, recipe.description, recipe.imagePath));
        }
      }
    });
  }

  onSave() {
    this.configService.storeRecipe(this.recipes)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
  }
  onGet() {

  }
}
