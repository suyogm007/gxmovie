import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nameSearch:string=""
  movieArr =[
    { year:2020,
      name:'Dear Comrade'},
    { year:2020,
      name:'Xmen'},
    { year:2020,
     name:'Avengers'},
    { year:2020,
      name:'Kabirsingh'},  
    { year:2020,
     name:''},
    { year:2020,
      name:'Godzilla'},
    { year:2020,
      name:'Antman'},
    { year:2020,
      name:'Spiderman'}
    ]


}
