import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AttachPage } from '../attach/attach';
import { BulkLiquid } from './../../models/bulk.model';
import { BulkService } from './../../services/bulk.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: BulkLiquid[] = [];
  constructor(public navCtrl: NavController,
    private bulkService: BulkService,
    public modalCtrl: ModalController) {
    this.data = this.bulkService.data;
  }

  pressed() {

  }

  active(data, title) {
    let modal = this.modalCtrl.create(AttachPage,{
      data: data,
      title: title
    },{
      cssClass: 'attach-modal'
    });
    modal.present();
  }

  released() {

  }

  test(d) {
    console.log(d);
  }
}
