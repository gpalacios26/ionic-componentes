import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}
