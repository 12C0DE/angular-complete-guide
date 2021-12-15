import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const newAmount = this.amountInputRef?.nativeElement.value;
    const newIngredientName = this.nameInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
