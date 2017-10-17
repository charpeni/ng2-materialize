import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import {
  MzCardModule,
  MzInputModule,
  MzSelectModule,
  MzValidationModule,

 } from 'ng2-materialize';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { ValidationBindingComponent } from './validation-binding/validation-binding.component';
import { ValidationFormStateComponent } from './validation-form-state/validation-form-state.component';
import { ValidationNgmodelComponent } from './validation-ngmodel/validation-ngmodel.component';
import { ValidationPlaygroundComponent } from './validation-playground/validation-playground.component';
import { ValidationComponent } from './validation.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CodeSnippetModule,
    CommonModule,
    FormsModule,
    MarkdownToHtmlModule.forChild(),
    MzCardModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    PropertiesTableModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ValidationBindingComponent,
    ValidationComponent,
    ValidationFormStateComponent,
    ValidationNgmodelComponent,
    ValidationPlaygroundComponent,
  ],
})
export class ValidationModule { }
