import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title:string
  numberOfJobs:number

  constructor() {
    this.title = 'Remote Jobs'
    this.numberOfJobs = 0
  }

  ngOnInit() {
  }

}
