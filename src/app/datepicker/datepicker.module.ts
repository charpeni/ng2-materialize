import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzDatepickerContainerComponent } from './datepicker-container/datepicker-container.component';
import { MzDatepickerDirective } from './datepicker.directive';

@NgModule({
  declarations: [
    MzDatepickerDirective,
    MzDatepickerContainerComponent,
  ],
  exports: [
    MzDatepickerDirective,
    MzDatepickerContainerComponent,
  ],
})
export class MzDatepickerModule { }
