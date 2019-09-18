import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  title= TrangchuComponent;
  TC=
  [
    {"ID":1,"FirstName":"Carson","LastName":"Alexander","EnrollDate":  "2005-09-01"},    
    {"ID":2,"FirstName":"Meredith","LastName":"Alonso","EnrollDate" : "2002-09-01"},         
    {"ID":3,"FirstName":"Arturo","LastName":"Anand","EnrollDate":  "2003-09-01"}, 
    
  ]

  removeTC(ID: number){
    const index =this.TC.findIndex(TC =>TC.ID ===ID);
     this.TC.splice(index,1);
     alert("ban muon xoa");
  }
}
