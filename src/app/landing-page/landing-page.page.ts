import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  recom: boolean;

  constructor() { }

  ngOnInit() {
    this.recom=false
  }

  viewRecom(){
    this.recom=true
  }

}
