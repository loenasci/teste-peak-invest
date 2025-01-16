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

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Submits the installment calculation request to the backend API.
 * It sends the installment quantity and value as a POST request,
 * and updates the totalAmount with the calculated value received
 * from the API. In case of an error, it displays an alert with the
 * error message.
 */

/******  5382371c-80c1-4d36-9383-c95c50785ab1  *******/	onSubmit() {
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
