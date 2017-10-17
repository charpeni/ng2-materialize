import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { MzButtonModule, MzIconModule, MzSidenavModule } from 'ng2-materialize';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    MalihuScrollbarModule.forRoot(),
    MzButtonModule,
    MzIconModule,
    MzSidenavModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
