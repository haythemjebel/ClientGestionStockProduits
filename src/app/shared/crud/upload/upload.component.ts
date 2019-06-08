import { CrudService } from './../../crud.service';
import { DataModel } from './../../data.model';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild("fileUploadInput")
  fileUploadInput:any;
  @Input()
  dataModel:DataModel[];
  @Input()
  service: CrudService;

  fileName: string = '';

  dataSentToServer: boolean = false;

  @Output()
  updateData: EventEmitter<any> = new EventEmitter<any>();

  dataFromServer : any = null;

  currentStep =1 ;

  dataArray : any = null;

  dataModelFiltred: any ;

  constructor() { }

  ngOnInit() {
    this.dataModelFiltred=this.dataModel.filter(Modeldata=>!Modeldata.readonly);
  }
  getBindHeadersDataModelListArray(headers){
    let bindArray = [];
    let index = 0;
    let getDataType = (header) => {
      let dataType = '';
      this.dataModel.forEach(Modeldata => {
        if(Modeldata.columnName == header){
          dataType = Modeldata.dataType;
        }
      });
      return dataType;
    };
    headers.forEach(header =>{
      const binditem={
        columnName:header,
        dataType :getDataType(header),
        index : index
      }
      index ++;
      bindArray.push(binditem);
    });
    return bindArray ;
  }
  bindDataArray(bindArray,csvRecordsArray){
    let dataArray = [];
    
    if(csvRecordsArray && csvRecordsArray.length>2){
      for(let i =1 ; i<csvRecordsArray.length ; i++){
        const dataCrud = {};
        const datacsv = csvRecordsArray[i].split(";");
        bindArray.forEach(bindItem =>{
          dataCrud[bindItem.columnName]=bindItem.dataType == 'number '? Number(datacsv[bindItem.index]):datacsv[bindItem.index];
  
        });
        dataArray.push(dataCrud)
      }
     
    }
    return dataArray;
  }

  selectFile($event){
    let fileList = $event.srcElement.files;
    let file=fileList[0]
    if(file && file.name.endsWith(".csv")){
      this.fileName = file.name;
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data)=>{
        let csvData = reader.result;
        let csvRecordsArray = (csvData as string).split(/\r\n|\n/);
        let headers = csvRecordsArray && csvRecordsArray.length>0 ? csvRecordsArray[0].split(";") : [];
        //bing headers with dataModel
        let bindArray = this.getBindHeadersDataModelListArray(headers);

        // CREATE data bindArray
        this.dataArray = this.bindDataArray(bindArray,csvRecordsArray);
        this.currentStep++
      }
    }
  }
  sendDataToServer(){
    this.service.addAll(this.dataArray).subscribe((data)=>{
      this.dataFromServer = data;
      this.dataSentToServer=true;
      this.updateData.emit(data);
      this.currentStep = 3;
    });
  }

}
