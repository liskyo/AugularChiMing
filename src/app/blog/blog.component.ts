import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  //ngStyle 改變字體大小
  fontSize = 30;

  //ngClass 引用css
  isRed = true;

  //ngSwitch 使用case分類
  score = 100;

  //改變大小及顏色
  add() {
    this.fontSize++;
    this.isRed = !this.isRed;
  }

  //ngIf 如為false會從畫面移除
  isPopular = true;
  changePopular() {
    this.isPopular = true;
  }
  changeNormal() {
    this.isPopular = false;
  }

  //ngFor  //創立Class Array
  popularArticles = [{
    title: '熱門1', content: '熱門內容1'
  }, { title: '熱門2', content: '熱門內容2' }];
  normalArticles = [{
    title: '一般1', content: '一般內容1'
  }, { title: '一般2', content: '一般內容2' }];
  addNewArticle() {
    this.popularArticles.push({
      title: '熱門NEW', content: '熱門內容NEW'
    });
    this.normalArticles.push({
      title: '一般NEW', content: '一般內容NEW'
    });
  }
}



