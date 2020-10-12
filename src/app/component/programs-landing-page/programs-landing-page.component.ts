import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-programs-landing-page',
  templateUrl: './programs-landing-page.component.html',
  styleUrls: ['./programs-landing-page.component.scss']
})
export class ProgramsLandingPageComponent implements OnInit {

  public loading: boolean;
  public missionData: any;

  constructor(private sharedService: SharedService) {
    this.loading = true;
  }

  ngOnInit() {
      this.sharedService.launchPrgms().subscribe(response => {
      this.loading = false;
      this.missionData = response.body;
    });
  }
}
