import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Cuando el URL  apunta al path de contac la aplicación mostrará el comoponente contactCOmponent en pantalla
  {path: 'contact', component: ContactComponent},
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: '', pathMatch: 'full', redirectTo: 'articles' },
  //** significa wildcard ruta, es cuando el router no encuentra match de un URL pedido */
  { path: '**', redirectTo: 'articles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
