import { Component } from '@angular/core';
import { Album } from '../../Album';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  album?: Album

  constructor( private listService: ListService, private route: ActivatedRoute) {
    this.getAlbum()

  }

  getAlbum(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((album) => (this.album = album));

  }


}
