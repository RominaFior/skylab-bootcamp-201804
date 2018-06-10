import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }
    
  ngOnInit() {
  }

}
