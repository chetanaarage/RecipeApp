import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';



const recipeRoutes:Routes=[
	{path:'',component:RecipesComponent, children:[
		{	path:'',component:RecipeStartComponent },
		{ path:'new',component:RecipeEditComponent},
		{	path:':id',component:RecipeDetailComponent },
		{ path:':id/edit',component:RecipeEditComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports:[RouterModule]
})

export class RecipesRoutingModule { }