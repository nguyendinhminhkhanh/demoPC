import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  rfContact: any;
  constructor(private fb: FormBuilder, private route: Router) {}
  public dataUser = <any>[];
  ngOnInit(): void {
    this.rfContact = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  onSignIn() {
    this.dataUser =
      (JSON.parse(localStorage.getItem('user')) as string) || <any>[];
    if (
      this.dataUser.find(
        (user: any) =>
          user.email == this.rfContact.value.email &&
          user.password == this.rfContact.value.password
      )
    ) {
      console.log('Đăng nhập thành công');
      this.route.navigate(['../','pages','general']);
      localStorage.setItem('isLogin', this.rfContact.value.email);
    } else {
      console.warn('Thông tin đăng nhập không chính xác!');
      this.rfContact.reset();
    }
  }

  onRegister() {
    this.route.navigateByUrl('/account/auth/register');
  }
}
