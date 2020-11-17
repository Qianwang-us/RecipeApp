import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Applies', 5),
        new Ingredient('Tomatoes', 10),
      ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(): Ingredient[]{
        
        return this.ingredients.slice();
    }
}