import { Component, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnChanges {
  @Input() rating: number;
  iconWidth: number;

  //transforming rating received out of 5 to an width with respect to 100px
  ngOnChanges(): void {
    this.iconWidth = this.rating * 90 / 5;
  }


}
