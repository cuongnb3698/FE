import { SharedataService } from 'src/app/sharedata.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgressComponent } from 'ngx-progressbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;
  title = 'QLTTB';
  isCollapsed = true;
  constructor(private router: Router, private share: SharedataService) {
    if(!localStorage.getItem("token")){
      this.router.navigateByUrl("login");
    }
  }

  Click(){
      this.progressBar.start();
  }
}
