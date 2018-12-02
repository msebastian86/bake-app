// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { map, catchError } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-fdfe1.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get('https://ng-recipe-book-fdfe1.firebaseio.com/recipes.json?auth=' + token)
            .pipe(map((recipes: Recipe[]) => {
                console.log(recipes);
                return recipes.map((recipe) => {
                    if (!recipe['ingredients']) {
                        recipe.ingredients = [{amount: 1000, name: 'Bylo puste- test data storage'}];
                    }
                    return recipe;
                });
            }))
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
