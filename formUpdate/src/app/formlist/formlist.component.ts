import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { DetailServiceService } from "../detail-service.service";
import { Routes,Router } from "@angular/router";

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent implements OnInit {
  var;
  articles;
  constructor(private service: DetailServiceService,
    private router: Router,
    private http: HttpClient) { 
      this.service.getData().subscribe((details)=>{
        console.log(details);
        this.articles = details;
      });
    }

  ngOnInit(): void {
    console.log (window.history.state);
  }
detail(data){
  // console.log(data.id);
  this.router.navigateByUrl(`/detail`,{state: data});
}
edit(data, i) {
  this.router.navigateByUrl(`/edit/${data.id}`);
}
}