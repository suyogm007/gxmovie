import { Component, OnInit } from '@angular/core';
import { MoviesdataService } from '../moviesdata.service';

@Component({
  selector: 'app-assamesemovies',
  templateUrl: './assamesemovies.component.html',
  styleUrls: ['./assamesemovies.component.css']
})
export class AssamesemoviesComponent implements OnInit {
 arr= ["id","name","email"]
  constructor(public moviesdataService:MoviesdataService) { }
   movies: any;
  ngOnInit(): void {
    
    this.moviesdataService.getMovies().subscribe(data =>{
     this.movies = data;  
     
    });
  
}
}
