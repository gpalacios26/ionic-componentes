import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public albums: any[] = [];
  public textoBuscado: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(
      albums => {
        this.albums = albums;
      }
    );
  }

  onSearchChange(event: any) {
    this.textoBuscado = event.detail.value;
  }

}
