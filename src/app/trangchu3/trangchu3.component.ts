import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu3',
  templateUrl: './trangchu3.component.html',
  styleUrls: ['./trangchu3.component.css']
})
export class Trangchu3Component implements OnInit {

  constructor() { }

  ngOnInit() {}
  title= Trangchu3Component;
  TC=
  [
{"ID":7,"FirstName":"Laura","LastName":"Norman","EnrollDate":"2003-09-01"},  
  {"ID":8,"FirstName":"Nino","LastName":"Olivetto","EnrollDate":"2005-09-01"}

  ]

  removeTC(ID: number){
    const index =this.TC.findIndex(TC =>TC.ID ===ID);
     this.TC.splice(index,1);
     alert("ban muon xoa");
  }
}

