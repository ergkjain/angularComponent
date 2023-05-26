import { Component } from '@angular/core';

@Component({

selector: 'app-root',

templateUrl: './app.component.html',

styleUrls: ['./app.component.css']

})

export class AppComponent {

title = 'List';

listObjects : any[]= [];

listValue :{

name? : String,

index? : number

 } = {}


 public addItem(){

 this.listObjects.push({

 name : this.listValue.name,

 index : this.listObjects.length + 1
 });
 }




 public deleteItem(index: number){

 for(let i =0 ;i<this.listObjects.length;i++){
 if(this.listObjects[i].index === index){

 this.listObjects.splice(index-1, 1);

 }

 }

 }

}