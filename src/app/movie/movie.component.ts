import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @HostBinding('attr.class') cssClass='row';
  @Input() movie:Movie;
  
  constructor() {
  }

  voteUp():boolean
  {
  	this.movie.voteUp();
  	return false;
  }

  voteDown():boolean
  {
  	this.movie.voteDown();
  	return false;
  }
  
  ngOnInit(): void {
  }

}
