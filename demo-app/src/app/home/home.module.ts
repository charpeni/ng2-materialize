import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { MzButtonModule, MzIconModule, MzParallaxModule } from 'ng2-materialize';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    MarkdownToHtmlModule.forRoot(),
    MzButtonModule,
    MzIconModule,
    MzParallaxModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
