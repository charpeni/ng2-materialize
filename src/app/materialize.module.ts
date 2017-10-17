import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzBadgeModule } from './badge';
import { MzButtonModule } from './button';
import { MzCardModule } from './card';
import { MzCheckboxModule } from './checkbox';
import { MzCollapsibleModule } from './collapsible';
import { MzCollectionModule } from './collection';
import { MzDatepickerModule } from './datepicker';
import { MzDropdownModule } from './dropdown';
import { MzIconModule } from './icon';
import { MzInputModule } from './input';
import { MzMediaModule } from './media';
import { MzModalModule } from './modal';
import { MzNavbarModule } from './navbar';
import { MzPaginationModule } from './pagination';
import { MzParallaxModule } from './parallax';
import { MzProgressModule } from './progress';
import { MzRadioButtonModule } from './radio-button';
import { MzSelectModule } from './select';
import { MzSharedModule } from './shared';
import { MzSidenavModule } from './sidenav';
import { MzSpinnerModule } from './spinner';
import { MzSwitchModule } from './switch';
import { MzTabModule } from './tab';
import { MzTextAreaModule } from './textarea';
import { MzTimepickerModule } from './timepicker';
import { MzToastModule } from './toast';
import { MzTooltipModule } from './tooltip';
import { MzValidationModule } from './validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MzBadgeModule,
    MzButtonModule,
    MzCardModule,
    MzCheckboxModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzDatepickerModule,
    MzDropdownModule,
    MzIconModule,
    MzInputModule,
    MzModalModule,
    MzNavbarModule,
    MzPaginationModule,
    MzParallaxModule,
    MzProgressModule,
    MzRadioButtonModule,
    MzSelectModule,
    MzSharedModule,
    MzSidenavModule,
    MzSpinnerModule,
    MzSwitchModule,
    MzTabModule,
    MzTextAreaModule,
    MzTimepickerModule,
    MzTooltipModule,
    MzValidationModule,
  ],
})
export class MaterializeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterializeModule,
    };
  }
}
