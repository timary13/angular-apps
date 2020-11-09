import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
})
export class ArtistItemComponent{
  @Input() artist: object;

}
