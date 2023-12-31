import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'BASEBALL: Next world Series';
  //weatherForecasts: any;
  posts: any;

  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void
  {
    this.http.get('http://localhost:5164/api/posts').subscribe(
      response => {this.posts = response; },
      error => {console.log(error)}
    );
    /*this.http.get('http://localhost:5037/weatherforecast').subscribe(
      response => {this.weatherForecasts = response; },
      error => {console.log(error)}
    );*/
  }
}
