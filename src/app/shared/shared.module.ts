import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzInjectionService } from './injection/injection.service';

@NgModule({
  providers: [MzInjectionService],
})
export class MzSharedModule { }
