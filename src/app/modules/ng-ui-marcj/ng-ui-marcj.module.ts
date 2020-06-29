import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DuiButtonModule,
  DuiCheckboxModule,
  DuiFormComponent,
  DuiInputModule,
  DuiRadioboxModule,
  DuiSelectModule,
  DuiWindowModule,
  DuiIconModule,
  DuiListModule,
  DuiTableModule,
  DuiAppModule,
  DuiDialogModule,
  DuiSliderModule,
  DuiEmojiModule,
} from '@marcj/angular-desktop-ui';

@NgModule({

  exports: [
    CommonModule,
    DuiWindowModule,
    DuiAppModule,
    DuiCheckboxModule,
    DuiButtonModule,
    DuiInputModule,
    DuiFormComponent,
    DuiRadioboxModule,
    DuiSelectModule,
    DuiIconModule,
    DuiListModule,
    DuiTableModule,
    DuiButtonModule,
    DuiDialogModule,
    DuiEmojiModule,
    DuiSliderModule,
  ]
})
export class NgUiMarcjModule { }
