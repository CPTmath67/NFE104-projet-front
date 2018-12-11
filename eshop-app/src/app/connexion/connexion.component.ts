import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  selectedCategory: string;
  category: string[] = ['Acheteur','Vendeur'];
  username: string = "toto" ;
  password: string = "toto"; 

  constructor() { }

  ngOnInit() {
  }

}
