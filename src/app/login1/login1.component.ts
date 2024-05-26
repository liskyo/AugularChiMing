import { Component } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {

  //標題
  title = "新增"

  //使用者欄位 用物件管控
  user = {
    account:"",
    password:""
  };

  //顯示使用者資料 //使用=為賦值
  showUser = {
    account:"",
    password:""
  };

  //顯示使用者清單  //使用:為指定屬性類型  //很多使用者物件的集合
  showUserList : {
    account:string,
    password:string
  }[]=[];

  //帳號是否可以輸入
  isDisable = false;

  //帳號是否重複
  isDuplicate = false;

  //送出
  submit(){  //如果其中一空值false !變true
    if(!(this.user.account && this.user.password)){
      alert("必須輸入完整資訊")
      return;
    }
    //如果return則不執行這段
    this.showUser.account = this.user.account;
    this.showUser.password = this.user.password;

    if(this.showUserList.findIndex(x=>x.account===this.showUser.account) !=-1){
      this.isDuplicate = true;
    }
    else{
      this.showUserList.push({
        account:this.user.account,
        password:this.user.password
      });
      this.isDuplicate=false;
    }
  }

  //清除
  clear(){
    //如果disabled=false account可以用
    if(!this.isDisable){
      this.user.account = "";
    }
    this.user.password = "";
  }

  //切換 新增/修改
  switch(){
    this.isDisable = !this.isDisable;
    this.title = this.isDisable? "修改":"新增"
  }

  //清除帳號及密碼清單
  clearList(){
    this.showUserList=[];
  }


}
