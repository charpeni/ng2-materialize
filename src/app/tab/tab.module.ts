import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzTabItemComponent } from './tab-item/tab-item.component';
import { MzTabComponent } from './tab.component';

@NgModule({
  declarations: [
    MzTabComponent,
    MzTabItemComponent,
  ],
  exports: [
    MzTabComponent,
    MzTabItemComponent,
  ],
})
export class MzTabModule { }
