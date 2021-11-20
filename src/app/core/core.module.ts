
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    //Hay que importar routerModule para usarlo
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
