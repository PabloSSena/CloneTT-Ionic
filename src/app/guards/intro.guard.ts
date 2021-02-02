import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const {Storage} = Plugins;

export const INTROKEY = 'intro-seen';
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  constructor(private router: Router) {}

  async canLoad(): Promise<boolean> {
      const hasSeenIntro = await Storage.get({key:INTROKEY});
      if(hasSeenIntro && (hasSeenIntro.value =='true')) return true
      else {
        this.router.navigateByUrl('/intro', {replaceUrl:true});
      }
    return true;
  }
}
