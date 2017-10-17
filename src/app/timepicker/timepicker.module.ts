import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzTimepickerContainerComponent } from './timepicker-container/timepicker-container.component';
import { MzTimepickerDirective } from './timepicker.directive';

@NgModule({
  declarations: [
    MzTimepickerDirective,
    MzTimepickerContainerComponent,
  ],
  exports: [
    MzTimepickerDirective,
    MzTimepickerContainerComponent,
  ],
})
export class MzTimepickerModule { }
