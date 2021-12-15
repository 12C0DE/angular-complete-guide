import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Test desc',
      'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg'
    ),
    new Recipe(
      '22',
      'Yopu desc',
      'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg'
    ),
    new Recipe(
      'trey wey',
      'tress',
      'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
