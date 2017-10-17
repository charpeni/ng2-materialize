import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzCardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MzCardComponent],
  exports: [MzCardComponent],
})
export class MzCardModule { }
