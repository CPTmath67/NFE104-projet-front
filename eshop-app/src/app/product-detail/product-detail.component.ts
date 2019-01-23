import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = { idArticle: null, label: '', description: '', priceHT: null, priceTTC: null, delievryTime: null, picture: null, activate: null};
  dataSource;
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) { 
    this.route.params.subscribe(param =>{
      this.productsService.getProductById(param.idArticle).subscribe(data =>{
        this.dataSource = data;
        console.log(data);
      })
    }); 
  }  

  deleteProduct(){
    this.route.params.subscribe(param => {
      this.productsService.deleteProduct(param.idArticle).subscribe(data =>{
        this.dataSource = data;
      })
    })
}

  ngOnInit() {
  }



}
