import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCountPager?: number;
  @Input() pageSizePager?: number;
  @Output() pageChangedPagerOutputPpropertyEvent = new EventEmitter();

  onPagerChangePagerMethod(event: any) {
    this.pageChangedPagerOutputPpropertyEvent.emit(event.page);
  }
}
