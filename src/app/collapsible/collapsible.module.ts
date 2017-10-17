import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  MzCollapsibleItemBodyDirective,
  MzCollapsibleItemComponent,
  MzCollapsibleItemHeaderDirective,
} from './collapsible-item/collapsible-item.component';
import { MzCollapsibleComponent } from './collapsible.component';

@NgModule({
  declarations: [
    MzCollapsibleComponent,
    MzCollapsibleItemBodyDirective,
    MzCollapsibleItemComponent,
    MzCollapsibleItemHeaderDirective,
  ],
  exports: [
    MzCollapsibleComponent,
    MzCollapsibleItemBodyDirective,
    MzCollapsibleItemComponent,
    MzCollapsibleItemHeaderDirective,
  ],
})
export class MzCollapsibleModule { }
