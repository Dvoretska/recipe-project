import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ConfigService } from './config.service';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    SignupComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    SharedModule.forRoot(),
    ShoppingListModule,
    FormsModule
  ],
  providers: [ConfigService, ShoppingListService, AuthService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
