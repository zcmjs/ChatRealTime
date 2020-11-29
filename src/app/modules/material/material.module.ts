import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarConfig,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule
];

const MAT_SNACKBAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 3000,
  verticalPosition: 'top'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACKBAR_GLOBAL_CONFIG}
  ],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
