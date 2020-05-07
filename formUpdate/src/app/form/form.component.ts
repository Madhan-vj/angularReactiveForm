import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validators} from "@angular/forms";
import { DetailServiceService } from "../detail-service.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Routes,Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm:FormGroup;
  id;
  name : string;
  email: string;
  Gender: any;
  constructor(
    private service: DetailServiceService,
    private http: HttpClient,
    public route: ActivatedRoute,
  ) {
    this.userForm = new FormGroup({
      'name':new FormControl("",Validators.required),
      'email':new FormControl("",[Validators.required,Validators.email]),
      'Gender':new FormControl("male",Validators.required),
      'favfood':new FormArray([
        new FormGroup({
          'indian': new FormControl(true,Validators.required)
        }),
        new FormGroup({
          'chinese': new FormControl(false,Validators.required)
        }),
      ]),
      'addresses': new FormArray([
        this.createAddress()
      ])
    });
   }
   createAddress(){
    return new FormGroup({
      'line1' : new FormControl('', Validators.required),
      'line2' : new FormControl('', Validators.required),
      'country' : new FormControl('', Validators.required),
      'state' : new FormControl('', Validators.required),
      'city' : new FormControl('', Validators.required)
      })
   }
   addAddress(){
    let addressArray = this.userForm.get('addresses') as FormArray;
    addressArray.push(this.createAddress())  
   }
   removeAddress(index){
     let address = this.userForm.get('addresses') as FormArray;
     address.removeAt(index);
   }
   ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
      if (this.id) {
          console.log(name);
          this.userForm.patchValue({
            name: this.name,
            email: this.email,
            gender: this.Gender,
          });
      }
    });
   }
   submitForm(){
     if(this.userForm.valid){
      if(this.id)
      {
       this.service.updateUser(this.userForm.value,this.id).subscribe(()=>{
        alert("success");
      });
      }
      else{
      //  console.log(this.userForm.value);
       this.service.putData(this.userForm.value).subscribe(()=>{
         alert("success");
       });
      }
     }
   }

}

