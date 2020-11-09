import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
})
export class ArtistDetailsComponent implements OnChanges {
  @Input() artist: object;

  ngOnChanges() {

  }
}
