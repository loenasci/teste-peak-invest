import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-calcular-parcelas',
	templateUrl: './calcular-parcelas.component.html',
	styleUrls: ['./calcular-parcelas.component.css']
})
export class CalcularParcelasComponent {
	installments: number = 0;
	installmentValue: number = 0;
	totalAmount: any | null = null;

	constructor(private http: HttpClient) { }

	onSubmit() {
		const requestData = {
			installmentQuantity: this.installments,
			installmentValue: this.installmentValue
		};

		this.http.post<any>('http://localhost:5000/api/installment-calculate', requestData, {
			headers: { 'Content-Type': 'application/json' }
		})
			.subscribe({
				next: (response) => {
					this.totalAmount = response.totalAmount;
				},
				error: (error) => {
					const errorMessage = error.error || 'Erro desconhecido';
					alert(errorMessage);
				}
			});
	}

	clearForm() {
		this.installments = 0;
		this.installmentValue = 0;
		this.totalAmount = null;
	}
}
