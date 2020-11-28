import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Applies', 5),
        new Ingredient('Tomatoes', 10),
      ];

    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(addedIngredients: Ingredient[]){
        this.ingredients.push(...addedIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log('shopping-list.service: ingredients: '+ this.ingredients.slice());
    }

    getIngredients(): Ingredient[]{       
        return this.ingredients.slice();
    }
}