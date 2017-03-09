import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard">仪表盘</a>
     <a routerLink="/heroes">英雄们</a>
   </nav>
     <router-outlet></router-outlet>
   `
})
export class AppComponent {
  title = '英雄之旅';
}