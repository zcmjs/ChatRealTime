import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatDialogModule,
  MatFormField,
  MatIconModule,
  MatInputModule, MatSnackBarConfig,
  MatSnackBarModule,
  MatToolbar,
  MatTooltip
} from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatFormField,
  MatInputModule,
  MatToolbar,
  MatTooltip,
  MatDialogModule
];

const MAT_SNACKBAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 3000,
  verticalPosition: 'top'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACKBAR_GLOBAL_CONFIG}
  ],
  exports: [...this.MATERIAL_MODULES]
})
export class MaterialModule { }
