import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu2',
  templateUrl: './trangchu2.component.html',
  styleUrls: ['./trangchu2.component.css']
})
export class Trangchu2Component implements OnInit {

  constructor() { }

  ngOnInit() {}
  title= Trangchu2Component;
  TC=
  [
    
    {"ID":4,"FirstName":"Gytis","LastName":"Barzdukas","EnrollDate":"2002-09-01"},   
           {"ID":5,"FirstName":"Yan","LastName":"Li","EnrollDate":"2002-09-01"},     
            {"ID":6,"FirstName":"Peggy","LastName":"Justice","EnrollDate":"2001-09-01"},  


  ]

  removeTC(ID: number){
    const index =this.TC.findIndex(TC =>TC.ID ===ID);
     this.TC.splice(index,1);
     alert("ban muon xoa");
  }
}


