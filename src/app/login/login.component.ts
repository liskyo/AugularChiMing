import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

title ="登入首頁";

role ="主管"

account ="請輸入密碼"

password ="請輸入密碼"

comfirm(){
  alert("登入成功")
  this.title = this.title + this.role;
}

memberCnt = 0;

}
