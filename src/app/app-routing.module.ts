import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { MassaGordaMeioComponent } from './component/massagordameio/massagordameio.component';
import { MassaGordaFimComponent } from './component/massagordafim/massagordafim.component';
import { GraficoComponent } from './component/grafico/grafico.component';
import { DicasComponent } from './component/dicas/dicas.component';
import { AlimentacaoComponent } from './component/alimentacao/alimentacao.component';
import { ExercicioComponent } from './component/exercicio/exercicio.component';
import { BoaComponent } from './component/boa/boa.component';
import { PerdaComponent } from './component/perda/perda.component';
import { GanhoComponent } from './component/ganho/ganho.component';
import { LocalizadoComponent } from './component/localizado/localizado.component';
import { AquecimentoComponent } from './component/aquecimento/aquecimento.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'massagordainicio', component: MassaGordaInicioComponent },
  { path: 'massagordameio', component: MassaGordaMeioComponent },
  { path: 'massagordafim', component: MassaGordaFimComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'dicas', component: DicasComponent },
  { path: 'alimentacao', component: AlimentacaoComponent },
  { path: 'exercicio', component: ExercicioComponent },
  { path: 'boa', component: BoaComponent },
  { path: 'perda', component: PerdaComponent },
  { path: 'ganho', component:  GanhoComponent },
  { path: 'localizado', component: LocalizadoComponent},
  { path: 'aquecimento', component: AquecimentoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
