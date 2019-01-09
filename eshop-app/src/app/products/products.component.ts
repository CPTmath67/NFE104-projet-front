import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['Title'];
  dataSource;
  constructor( private productsService: ProductsService) { 
    this.productsService.getAll().subscribe( data =>{
      console.log(data);
      this.dataSource = data;
    });
  }

  ngOnInit() {

  }
}
