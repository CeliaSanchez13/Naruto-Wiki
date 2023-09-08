import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TableListComponent } from './table-list/table-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchBoxComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SearchBoxComponent,
    TableListComponent
  ]
})
export class SharedModule { }
