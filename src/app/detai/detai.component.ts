import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detai',
  templateUrl: './detai.component.html',
  styleUrls: ['./detai.component.css']
})
export class DetaiComponent implements OnInit {
  	title = DetaiComponent;
  	students: any;
	sid;
	courses: any;
	cid;

	liststudents = [
		{
			"ID": 1,
			"FirstMidName": "Carson",
			"LastName": "Alexander",
			"EnrollmentDate": "2005-09-01",
			"time": "12:00:00 PM",
			"Title": "Calculus",
			"Grade": "A",
			"Credits": 4
		},
		{
			"ID": 2,
			"FirstMidName": "Meredith",
			"LastName": "Alonso",
			"EnrollmentDate": "2002-09-01",
			"time": "13:00:00 PM",
			"Title": "Literature",
			"Grade": "A",
			"Credits": 4
		},
		{
			"ID": 3,
			"FirstMidName": "Arturo",
			"LastName": "Anand",
			"EnrollmentDate": "2003-09-01",
			"time": "15:30:00 PM",
			"Title": "Composition",
			"Grade": "A",
			"Credits": 3
		},
		{
			"ID": 4,
			"FirstMidName": "Gytis",
			"LastName": "Barzdukas",
			"EnrollmentDate": "2002-09-01",
			"time": "12:00:00 PM",
			"Title": "DjAngo",
			"Grade": "F",
			"Credits": 4
		},
		{
			"ID": 5,
			"FirstMidName": "Yan",
			"LastName": "Li",
			"EnrollmentDate": "2002-09-01",
			"time": "13:00:00 PM",
			"Title": "Calculus",
			"Grade": "B",
			"Credits": 4
		},
		{
			"ID": 6,
			"FirstMidName": "Peggy",
			"LastName": "Justice",
			"EnrollmentDate": "2001-09-01",
			"Title": "Macroeconomics",
			"Grade": "B",
			"Credits": 3
		},
		{
			"ID": 7,
			"FirstMidName": "Laura",
			"LastName": "Norman",
			"EnrollmentDate": "2003-09-01",
			"time": "12:00:00 PM",
			"Title": "Python",
			"Grade": "C",
			"Credits": 3
		},
		{
			"ID": 8,
			"FirstMidName": "Nino",
			"LastName": "Olivetto",
			"EnrollmentDate": "2005-09-01",
			"time": "13:00:00 PM",
			"Title": "Chemistry",
			"Grade": "A",
			"Credits": 3
		}
	];

  constructor(private rout: ActivatedRoute) { }
  ngOnInit() {
		this.rout.paramMap.subscribe(para => { this.sid = +para.get('ID') });
		this.students = this.liststudents.find(std => std.ID === this.sid);
	}

	Back() {
		window.history.back();
	}



}
