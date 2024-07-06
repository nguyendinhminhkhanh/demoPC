import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogin = localStorage.getItem('isLogin');
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.route.navigate(['../','account','auth','login']);
  }
  changPassword(){
    this.route.navigateByUrl('/pages/change-password');
  }
}
