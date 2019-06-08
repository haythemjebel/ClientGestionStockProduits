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
  crudtype = 'sample';
    
    constructor() { 
    }
  
    ngOnInit() {
    }
    dataChanged($event){
      this.data=this.data.concat($event);
    }
  

}
