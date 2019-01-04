import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserPage } from "./user/user";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }
  ionViewCanEnter(): boolean | Promise<void> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewCanLeave(): boolean | Promise<void>{
    console.log('ionViewCanLeave');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    });
    return promise;
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }
  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }
}
