import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './RecipeBook/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './Header/header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipesComponent } from './RecipeBook/recipes/recipes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
