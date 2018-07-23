import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  storeRecipe(recipes: any[]) {
    return this.http.post('https://recipe-project-9c369.firebaseio.com/data.json', recipes)
  }

  getRecipes() {
    return this.http.get('https://recipe-project-9c369.firebaseio.com/data.json')
  }
}
