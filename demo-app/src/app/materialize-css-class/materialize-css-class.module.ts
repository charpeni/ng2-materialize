import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { MaterializeCssClassComponent } from './materialize-css-class.component';

@NgModule({
  imports: [
    CodeSnippetModule,
    CommonModule,
  ],
  declarations: [MaterializeCssClassComponent],
})
export class MaterializeCssClassModule { }
