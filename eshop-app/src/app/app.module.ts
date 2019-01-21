import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatRadioModule
} from '@angular/material';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

  const routes : Routes = [
      { path: '', component: HomeComponent },
      { path: 'connexion', component: ConnexionComponent },
      { path: 'account-creation', component: AccountCreationComponent },
      { path: 'products-list', component: ProductsComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },  
      { path: 'product-add', component: ProductAddComponent },
      { path: 'product-edit/:id', component: ProductEditComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanierComponent,
    HomeComponent, 
    ConnexionComponent, AccountCreationComponent, ProductsComponent, ItemComponent, ProductDetailComponent, ProductAddComponent, ProductEditComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
   MatRadioModule,
   RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
