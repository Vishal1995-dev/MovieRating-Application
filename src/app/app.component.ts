import { Component } from '@angular/core';
import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:Movie[];
  
  constructor()
  {
  	this.movies=[
  		new Movie('Friends','http://Friends.com',100)
  	];
  }
  
  add(title:HTMLInputElement,link:HTMLInputElement):boolean
  {
  	this.movies.push(new Movie(title.value,link.value,0));
  	title.value='';
  	link.value='';
  	return false;
  }
  
  sortedMovies():Movie[]
  {
  	return this.movies.sort((a:Movie,b:Movie)=>b.votes-a.votes);
  }
}
