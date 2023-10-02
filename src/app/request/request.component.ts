import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  
  //data = {};
posts = {};

  constructor(private http: HttpClient){ }


ngOnInit(): void {
    this.http.get('blank for github, not setting up env right now')
    .subscribe(Response => {
      this.posts = Response;
      console.log(Response);
    });

  }

}