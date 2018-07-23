import { Component, OnInit } from '@angular/core';
import { WavesModule } from 'angular-bootstrap-md';

@Component({
  moduleId: module.id,
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  imagePath1:string;
  imagePathArray:string[];
  constructor() {
   this.imagePathArray=[];}

  ngOnInit() {
    this.imagePath="'assets/images/carousel/'";

    for(var i=0;i<20;i++){
    this.imagePathArray[i]='assets/images/carousel/'+i+'.JPG';
    console.log(this.imagePathArray[i]);
    }
    }
  }
}
