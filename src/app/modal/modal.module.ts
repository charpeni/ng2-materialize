import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzModalCloseDirective } from './modal-close/modal-close.directive';
import { MzModalComponent } from './modal.component';
import { MzModalService } from './services/modal.service';

@NgModule({
  declarations: [
    MzModalCloseDirective,
    MzModalComponent,
  ],
  exports: [
    MzModalCloseDirective,
    MzModalComponent,
  ],
  providers: [MzModalService],
})
export class MzModalModule { }
