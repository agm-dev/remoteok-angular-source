import { Component, OnInit } from '@angular/core';
import { Job } from './job'
import { JobsService } from '../jobs.service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs:Array<Job>

  constructor(private jobsService: JobsService) {
  }

  getJobs():void {
    this.jobsService.getJobs()
      .subscribe(jobs => this.jobs = jobs.slice(1))
  }

  ngOnInit() {
    this.getJobs()
  }

}
