import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('Test name', 'bla bla', 'http://budzu.com/static/image/recipe/Chewy_Chocolate_Chip_Cookie_N-300x217.png'),
		new Recipe('Testiing 2', 'om nom nom', 'https://www.simplyrecipes.com/wp-content/uploads/2015/06/grilled-marinated-flank-steak-horiz-a-1200.jpg')
	];

	constructor() { }

	ngOnInit() {
	}

}
