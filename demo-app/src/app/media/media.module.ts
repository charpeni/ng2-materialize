import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [
    CodeSnippetModule,
    CommonModule,
  ],
  declarations: [MediaComponent],
})
export class MediaModule { }
