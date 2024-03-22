import { Component } from '@angular/core';

import { ListService } from '../../services/list.service';

import { Album } from '../../Album';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrl: './list-album.component.css',
})



export class ListAlbumComponent {

  albuns:  Album[] = [];

  constructor(private listService: ListService) {
    this.getAlbuns()
    //this.getPaginaAlbuns(10);

  }
  getAlbuns(): void{
    this.listService.getAllAlbuns().subscribe((albuns) => (this.albuns = albuns));
  }
  getPaginaAlbuns(page: number): void{
    this.listService.getPageAlbuns(page).subscribe((albuns) => (this.albuns = albuns));
  }

}

