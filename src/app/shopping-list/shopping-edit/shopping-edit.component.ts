import { Component, OnInit,OnDestroy,ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') slForm:NgForm;

	subscription:Subscription;

  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;

	// @ViewChild("nameInput") nameInputRef :ElementRef;
	// @ViewChild("amountInput") amountInputRef:ElementRef;
	//@Output() ingredientAdded =new EventEmitter<Ingredient>();



constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startedEditing.subscribe((index:number)=>{
      this.editedItemIndex=index;

      this.editMode=true;
      this.editedItem=this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    });

  };

  ngOnDestroy(){
    this.subscription.unsubscribe();
  };

  onSubmit(form:NgForm){

    const value=form.value;


  	// const ingName=this.nameInputRef.nativeElement.value;
  	// const ingAmount=this.amountInputRef.nativeElement.value;
  	const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  	//this.ingredientAdded.emit(newIngredient);
    
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();


  }
}
