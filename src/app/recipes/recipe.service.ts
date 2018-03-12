import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import {Ingredient} from '../shared/ingredient.model';

import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
	//recipeSelected=new EventEmitter<Recipe>();
	recipesChanged=new Subject<Recipe[]>();

	private recipes:Recipe[]=[
	  	new Recipe("A Test Recipe","This is simply a test",
	  		"https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
	  		[
	  			new Ingredient('Meat',1),
	  			new Ingredient("French Fries",10)
	  		]),
	  	new Recipe("Another Test  Recipe","This is simply a test",
	  		"https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
	  		[
	  			new Ingredient('Cheese',1),
	  			new Ingredient("bread pakoda",10)
	  		])
  	];
 constructor(private shoppingListService:ShoppingListService) { }

  getRecipes(){
  	return this.recipes.slice();
  }

  getRecipe(index:number){
  	return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
  	this.shoppingListService.addIngredients(ingredients);
  }

 addRecipe(recipe:Recipe){
 	this.recipes.push(recipe);
 	this.recipesChanged.next(this.recipes.slice());
 }
  updateRecipe(index:number,newrecipe:Recipe){
  	this.recipes[index]=newrecipe;
  	this.recipesChanged.next(this.recipes.slice());
 }

	deleteRecipe(index:number){
	 this.recipes.splice(index,1);
	 this.recipesChanged.next(this.recipes.slice());
	}

}
