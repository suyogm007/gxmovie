import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MoviesdataService  {

   
  constructor(private httpClient:HttpClient ) { }
  
  getMovies(){
   return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
