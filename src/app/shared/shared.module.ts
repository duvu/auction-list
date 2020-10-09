import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
      MatTableModule,
      MatPaginatorModule
  ],
  exports: [
      MatToolbarModule,
      MatTableModule,
      MatPaginatorModule
  ]
})
export class SharedModule { }
