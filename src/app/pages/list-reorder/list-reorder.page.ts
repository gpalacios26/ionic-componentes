import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  public personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];

  public toogle: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
    console.log(this.personajes);
  }

  doToogle() {
    this.toogle = !this.toogle;
  }

}
