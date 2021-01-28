import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public superHeroes: Observable<any>;
  public textoBuscar: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'todos') {
      return this.textoBuscar = '';
    }

    this.textoBuscar = event.detail.value;
  }

}
