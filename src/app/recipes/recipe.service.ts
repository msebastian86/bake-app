import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanges = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty cookie',
            'Awesome cookie with green tea inside',
            'http://budzu.com/static/image/recipe/Chewy_Chocolate_Chip_Cookie_N-300x217.png',
            [
                new Ingredient('Flower', 100),
                new Ingredient('Eggs', 3),
                new Ingredient('Green tea', 2),
                new Ingredient('Water', 100)
            ]
        ),
        new Recipe(
            // tslint:disable-next-line:max-line-length
            'Mega steak',
            'Raw meat, gives +10 to strengh',
            'https://www.simplyrecipes.com/wp-content/uploads/2015/06/grilled-marinated-flank-steak-horiz-a-1200.jpg',
            [
                new Ingredient('Beef', 1000),
                new Ingredient('Olive oil', 30),
                new Ingredient('Potatoes', 400)
            ]
        )
    ];

    constructor( private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanges.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanges.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanges.next(this.recipes.slice());
    }

}