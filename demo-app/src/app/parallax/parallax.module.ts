import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzCardModule, MzParallaxModule } from 'ng2-materialize';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { ParallaxComponent } from './parallax.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CodeSnippetModule,
    CommonModule,
    MzCardModule,
    MzParallaxModule,
    PropertiesTableModule,
  ],
  declarations: [ParallaxComponent],
})
export class ParallaxModule { }
