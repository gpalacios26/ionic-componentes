import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  public data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();

      if (this.data.length > 50) {
        this.infiniteScroll.disabled = true;
        return;
      }
      
    }, 1000);
  }

}
