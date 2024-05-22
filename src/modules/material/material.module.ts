import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: [modules]
})
export class MaterialModule { }
