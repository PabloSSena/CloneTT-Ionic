import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { INTROKEY } from 'src/app/guards/intro.guard';
const {Storage} = Plugins;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  async start() {
    await Storage.set({key:INTROKEY, value:"true"});
    this.router.navigateByUrl('/login', {replaceUrl:true});
  }
}
