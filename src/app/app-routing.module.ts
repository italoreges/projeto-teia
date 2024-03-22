import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlbumComponent } from './components/list-album/list-album.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: ListAlbumComponent},
  {path: 'list', component: ListAlbumComponent},
  {path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
