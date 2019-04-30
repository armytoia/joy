import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MassaGordaInicio } from './component/massagordainicio/massagordainicio.component';
import { MassaGordaMeio } from './component/massagordameio/massagordameio.component';
import { MassaGordaFim } from './component/massagordafim/massagordafim.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'massagordainicio', component: MassaGordaInicioComponent },
  { path: 'massagordameio', component: MassaGordaMeiooComponent },
  { path: 'massagordafim', component: MassaGordaFimComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
