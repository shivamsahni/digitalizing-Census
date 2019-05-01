import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { register } from 'src/app/Models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private register:RegisterService,private route:Router) { }
  

  ngOnInit() {
  }

OnSubmit(formData:NgForm){
  console.log(formData.value);
  var ObjData = new register(1,
    formData.value.Email,
    formData.value.Password,
    formData.value.FirstName,
    formData.value.LastName,
    formData.value.Address,
    null,
    formData.value.Aadhar,
    false,
    0
    )

this.register.RegisterUser(ObjData).subscribe((data:any)=>{
  console.log(data);
  if(data==null){
    window.alert("user already exist, please login");
      window.location.reload();
  }
  else{
    if(data.isApprover==true){
      this.route.navigateByUrl('approver');
    }
    else{
      this.route.navigateByUrl('');
    }
 
  }
},
(error)=>{
  console.log("Err...err..:"+error);
}
);
}
}