import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', component: RecipesComponent},
    { path: 'recipes', 
    component: RecipesComponent, children:[
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: EditRecipeComponent
        //canDeactivate:[CanDeactiveGuard]
        }
    ]}, 
    { path: 'shopping-list', component: ShoppingListComponent}
    // {path: 'not-found', component: ErrorPageComponent, data:{message:'Page not found!-errormessage'}},
    // {path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}