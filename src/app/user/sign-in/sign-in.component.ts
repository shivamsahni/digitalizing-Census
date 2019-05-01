import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { login } from 'src/app/Models/login.model';
import { LViewFlags } from '@angular/core/src/render3/interfaces/view';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('loginForm')f;
  constructor(private accountService: AccountService,private loginService:LoginService,private route:Router) { }

  public user:login;

  ngOnInit() {
    this.accountService.user.emit();
  }

  OnSubmit(){
    this.user=new login(this.f.value.UserName,this.f.value.Password);
    this.loginService.CheckUser(this.user).subscribe(
      (data:any)=>{
        if(data==null){
          window.alert("Invalid username or password");
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
