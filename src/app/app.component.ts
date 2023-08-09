import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } 'rxjs';

@Component ({
  selector: 'my-app',
  templateURL: './app.component.html',
  styleUrls: ['./app.component.css']
    
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    of(2, 4, 6, 8).subscribe(item => console.log(item));  
  }
}