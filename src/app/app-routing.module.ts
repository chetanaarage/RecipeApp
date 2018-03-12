import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { HeaderComponent } from './header/header.component';
// import { DropdownDirective }  from './shared/dropdown.directive';
// import {RecipeService} from './recipes/recipe.service';
// import {ShoppingListService} from './shopping-list/shopping-list.service';

const appRoutes:Routes=[
	{path:'',component:HomeComponent},
	{path:'recipes',loadChildren:"./recipes/recipe.module#RecipeModule"},
	{path:'shopping-list',component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }