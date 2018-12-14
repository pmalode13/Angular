import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  catlistPage=true;
  catNewFormPage=false;
  catEditForm=false;
  ngOnInit() {
  }
  
  viewCatNewForm()
  {
    this.catlistPage=false;
    this.catNewFormPage=true;
  }
  viewCatEditForm()
  {
    this.catEditForm=true;
    this.catlistPage=false;
   
    this.catNewFormPage=false;
  }
}
