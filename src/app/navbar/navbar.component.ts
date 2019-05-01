import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.user.subscribe(data=>{
      
    });
  }

  Login()
  {
    this.router.navigate(['/login']);
  }

}
