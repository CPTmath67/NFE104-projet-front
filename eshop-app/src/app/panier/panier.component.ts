import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']    
})
export class PanierComponent implements OnInit {


  dataSource;
  product: Product = { idArticle: null, label: '', description: '', priceHT: null, priceTTC: null, delievryTime: null, picture: null, activate: null};

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) { 
    this.route.params.subscribe(param =>{
      this.productsService.getProductById(param.idArticle).subscribe(data =>{
        this.dataSource = data;
        console.log(data);
      })
    }); 
  }  
  
  ngOnInit() {
  }

}
