import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  dataSource;
  addArticle;
  
  productForm: FormGroup;
  label:string='';
  description:string='';
  priceHT:number=null;
  priceTTC:number=null;
  delievryTime:number=null;
  picture:string='';
  activate:boolean=false;
  isLoadingResults = false; 
    
  constructor(private router: ActivatedRoute, private productsService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'label' : [null, Validators.required],
      'description' : [null, Validators.required],
      'priceHT' : [null, Validators.required],
      'priceTTC' : [null, Validators.required],
      'delievryTime' : [null, Validators.required],
      'activate' : [null, Validators.required],
      // 'picture' : [null, Validators.required]
    });
  }


  onFormSubmit(form:NgForm) {
    this.productsService.addProduct(form)
       .subscribe(res => {
          let idArticle = res['idArticle'];
           this.router.navigate(['/product-details', idArticle]);
        }, (err) => {
           console.log(err);
           this.isLoadingResults = false;
           });
  }


}
