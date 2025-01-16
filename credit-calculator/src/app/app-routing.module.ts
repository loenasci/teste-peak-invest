import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularParcelasComponent } from './calcular-parcelas/calcular-parcelas.component';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';

const routes: Routes = [
	{ path: 'calcular-parcelas', component: CalcularParcelasComponent },
	{ path: 'consultar-usuario', component: ConsultarUsuarioComponent },
	{ path: '', redirectTo: '/calcular-parcelas', pathMatch: 'full' },
	{ path: '**', redirectTo: '/calcular-parcelas' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
