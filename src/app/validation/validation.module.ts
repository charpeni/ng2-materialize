import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzErrorMessageComponent } from './error-message/error-message.component';
import { MzValidationComponent } from './validation.component';

@NgModule({
  declarations: [
    MzErrorMessageComponent,
    MzValidationComponent,
  ],
  entryComponents: [MzErrorMessageComponent],
  exports: [
    MzErrorMessageComponent,
    MzValidationComponent,
  ],
})
export class MzValidationModule { }
