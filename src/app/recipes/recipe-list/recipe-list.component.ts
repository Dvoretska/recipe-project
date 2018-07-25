import {Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ConfigService } from '../../config.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private configService: ConfigService, private recipeService: RecipeService) { }

  ngOnInit() {
    console.log('recipeBe', this.recipes)
    this.recipes = this.recipeService.getRecipes();
    console.log('recipeAf', this.recipes)
  // this.configService.getRecipes()
  //   .subscribe(res => {
  //     console.log('res', res)
  //     for(let item in res) {
  //       for(let recipe of res[item]) {
  //         this.recipes.push(new Recipe(recipe.name, recipe.description, recipe.imagePath));
  //       }
  //     }
  //   }, err => console.log(err));
  }
  //
  // onSave() {
  //   this.configService.storeRecipe(this.recipes)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => console.log(error)
  //     )
  // }
}
