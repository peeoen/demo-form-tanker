import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BulkLiquid } from './../../models/bulk.model';
import { BulkService } from './../../services/bulk.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: BulkLiquid[] = [];
  constructor(public navCtrl: NavController,
    private bulkService: BulkService) {
    this.data = this.bulkService.data;
    console.log(this.bulkService.data)
  }

}
