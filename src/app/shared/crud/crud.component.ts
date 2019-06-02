import { DataModel } from './../data.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @Input()
  data:any;

  @Input()
  title:string; 

  @Input()
  dataModel:DataModel[];

  @Input()
  initForm:FormGroup;

  @Input()
  service:CrudService;

  @Input()
  initItem:any;

  crudForm:FormGroup;

  operation:string ='add';
   
  selectedItem:any;
    
    constructor(private fb:FormBuilder) { 
      this.createFrom();
    }
  
    ngOnInit() {
      this.init();
      }
     createFrom(){
       if(this.initForm){
         this.crudForm= this.initForm;
       }else{
        this.crudForm=this.fb.group({});
       }
     }
    loaddata(){
      this.service.getAll().subscribe(
        d => {this.data = d}
        );
    }
    add(){
      const p =this.crudForm.value;
      this.service.add(p).subscribe(
        res=>{
          this.init();
          this.loaddata();
        }
      );
    }
    update(){
      this.service.update(this.selectedItem).subscribe(
        res=>{
          this.init();
          this.loaddata();
        }
      );
    }
    init(){
      this.selectedItem= this.initItem;
      this.createFrom();
    }
    delete(){
      this.service.delete(this.selectedItem.id).subscribe(
        res=>{
          this.selectedItem=this.initItem;
          this.loaddata();
        }
      );
    }
  

}
