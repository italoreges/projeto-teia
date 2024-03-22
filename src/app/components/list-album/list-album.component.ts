import { Component } from '@angular/core';

import { ListService } from '../../services/list.service';

import { Album } from '../../Album';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrl: './list-album.component.css',
})



export class ListAlbumComponent {

  albuns:  Album[] = [];
 
  constructor(private listService: ListService) {
    this.getAlbuns()

  }
  getAlbuns(): void{
    this.listService.getAllAlbuns().subscribe((albuns) => (this.albuns = albuns));
  }


}

