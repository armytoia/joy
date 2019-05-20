import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { MassaGordaMeioComponent } from './component/massagordameio/massagordameio.component';
import { MassaGordaFimComponent } from './component/massagordafim/massagordafim.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'massagordainicio', component: MassaGordaInicioComponent },
  { path: 'massagordameio', component: MassaGordaMeioComponent },
  { path: 'massagordafim', component: MassaGordaFimComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
