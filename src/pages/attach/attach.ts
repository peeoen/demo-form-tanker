import { Component, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController, FabContainer, NavParams, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-attach',
  templateUrl: 'attach.html',
})
export class AttachPage {
  @ViewChild('fab') fab: FabContainer;
  character;
  data;
  title;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public camera: Camera,
    private alertCtrl: AlertController
  ) {
    // this.character = characters[this.params.get('charNum')];
    console.log(this.params.data);
    this.data = this.params.data.data;
    this.title = this.params.data.title;
    console.log(this.data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  takePhoto() {
    this.fab.close();
    if (this.data.payload == null) {
      this.data.payload = [];
    }

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      const img = 'data:image/jpeg;base64,' + imageData;
      this.data.payload.push(img);
    }, (err) => {
     this.presentAlert('Take a photo error', err)
    });

  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  
}
