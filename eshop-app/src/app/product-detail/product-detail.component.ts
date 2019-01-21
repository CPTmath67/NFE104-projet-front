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
  product: Product = { id: null, name: '', desc: '', tva: null, price: null, delivery: null };
  dataSource;
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) { 
    this.route.params.subscribe(param =>{
      this.productsService.getProductById(param.id).subscribe(data =>{
        this.dataSource = data;
        console.log(data);
      })
    }); 
  }  

  deleteProduct(){
    this.route.params.subscribe(param => {
      this.productsService.deleteProduct(param.id).subscribe(data =>{
        this.dataSource = data;
      })
    })
}

  ngOnInit() {
  }



}
