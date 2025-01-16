import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-consultar-usuario',
	templateUrl: './consultar-usuario.component.html',
	styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent {
	id: number = 0;
	name: string = '';

	constructor(private http: HttpClient) { }

	onConsult() {
		this.http.get<string>(`http://localhost:5000/api/user/${this.id}`, { responseType: 'text' as any })
			.subscribe({
				next: (response) => {
					this.name = response;
				},
				error: (error) => {
					const errorMessage = error.error || 'Erro desconhecido';
					alert(errorMessage);
				}
			});
	}

	clearForm() {
		this.id = 0;
		this.name = '';
	}
}
