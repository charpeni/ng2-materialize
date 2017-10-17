import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzMediaService } from './media.service';

@NgModule({
  declarations: [
    MzMediaService,
  ],
  providers: [MzMediaService],
})
export class MzMediaModule { }
