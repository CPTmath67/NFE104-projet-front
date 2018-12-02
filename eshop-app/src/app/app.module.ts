import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { PanierComponent } from './panier/panier.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
import { ListAchatsComponent } from './list-achats/list-achats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeProduitsComponent,
    PanierComponent,
    ListCommandesComponent,
    ListAchatsComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
