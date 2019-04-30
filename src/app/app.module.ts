import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { MassaGordaMeioComponent } from './component/massagordameio/massagordameio.component';
import { MassaGordaFimComponent } from './component/massagordafim/massagordafim.component';

@NgModule({
  declarations: [AppComponent, MassaGordaInicioComponent , MassaGordaMeioComponent , MassaGordaFimComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
