import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularParcelasComponent } from './calcular-parcelas/calcular-parcelas.component';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularParcelasComponent,
    ConsultarUsuarioComponent
  ],
  imports: [
	  BrowserModule,
	  HttpClientModule,
	  FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
