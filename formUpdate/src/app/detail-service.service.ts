import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { observable} from "rxjs";
import { Routes,Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  constructor(private http: HttpClient,
    private router: Router,) { }
  putData(data){
    console.log(data);
    return this.http.post<any>(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`,data);
  }
  getData=()=>{
    return this.http.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`);
  }
  edit(data) {
    let httpParams = new HttpParams().set("id", data.id);
    let options = { params: httpParams };
    this.router.navigateByUrl(`/edit/${data.id}`);
  }
  updateUser(user,id) {
    return this.http.put("https://5cdd0a92b22718001417c19d.mockapi.io/api/users/" +id,user)
  }
}
