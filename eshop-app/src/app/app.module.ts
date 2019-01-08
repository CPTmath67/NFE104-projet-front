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
import { FormsModule } from '@angular/forms';
import { AccountCreationComponent } from './account-creation/account-creation.component';

  const routes : Routes = [
      { path: '', component: HomeComponent },
      { path: 'connexion', component: ConnexionComponent },
      { path: 'account-creation', component: AccountCreationComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanierComponent,
    HomeComponent, 
    ConnexionComponent, AccountCreationComponent
  ],

  imports: [
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
   MatRadioModule,
   RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
