import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, /** <= lazy loading, 
    no declaration in app module, after #Hash#: module class name **/
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' /**, canLoad: [AuthGuard]**/ }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
        // preload for lazy modules
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
