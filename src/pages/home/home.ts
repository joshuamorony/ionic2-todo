import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page'
import { ItemDetailPage } from '../item-detail-page/item-detail-page';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  	this.dataService.getData().then((todos) => {

  		if(todos){
	  		this.items = JSON.parse(todos);	
  		}

  	});

  }

  ionViewDidLoad(){

  }

  addItem(){

  	let addModal = this.modalCtrl.create(AddItemPage);
  	
  	addModal.onDidDismiss((item) => {

          if(item){
      	    this.saveItem(item);
          }

  	});

  	addModal.present();

  }

  saveItem(item){
  	this.items.push(item);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}