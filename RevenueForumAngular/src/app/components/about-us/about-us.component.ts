import { Component, OnInit } from '@angular/core';
import { WavesModule } from 'angular-bootstrap-md'

@Component({
  moduleId: module.id,
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  panelPhotoPath:string;
  discussionPhotoPath:string;
  groupPhotoPath:string;

  constructor() { }

  ngOnInit() {

   this.panelPhotoPath='assets/images/carousel/panel.JPG';
   this.discussionPhotoPath='assets/images/carousel/discussion.JPG';
   this.groupPhotoPath='assets/images/carousel/group.JPG'
  }

}
