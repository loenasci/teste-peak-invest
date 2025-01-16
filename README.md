# Teste peak invest

# Aplicação Calculadora de Crédito

## Visão Geral

Este projeto implementa uma aplicação básica com duas camadas: o front-end utilizando Angular e o back-end como uma API construída com .NET C#. O objetivo da aplicação é realizar cálculos com base nas entradas do usuário e fornecer uma funcionalidade simples de consulta. As principais funcionalidades incluem uma tela de cadastro para cálculos de valores e uma tela de consulta para recuperar nomes com base em um ID.

## Funcionalidades

### 1. **Tela de Cadastro**

A tela de cadastro permite ao usuário inserir:
- **Número de parcelas** (short)
- **Valor da parcela** (decimal)

Ao clicar no botão "Salvar", os dados são enviados para a API back-end através de uma requisição **POST**. O back-end realiza o cálculo do valor total utilizando a fórmula: (valor * parcelas) + 5%

Após realizar o cálculo, o resultado é retornado para o front-end, que exibe o valor no **formato de moeda** (ex: R$ 99.999).

### 2. **Tela de Consulta**

A tela de consulta permite ao usuário inserir um número de ID entre 1 e 3. Ao clicar no botão "Buscar", o front-end envia uma requisição **GET** para a API com o ID fornecido.

O back-end realiza a busca pelo ID na **lista de KeyValuePair** e retorna o nome correspondente para o front-end. Exemplo de lista utilizada:

```csharp
var lista = new List<KeyValuePair<int, string>>();
lista.Add(new KeyValuePair<int, string>(1, "João"));
lista.Add(new KeyValuePair<int, string>(2, "Maria"));
lista.Add(new KeyValuePair<int, string>(3, "Ana"));
```
## Comunicação

O front-end e o back-end se comunicam através de requisições HTTP consistentes:

- Requisição POST para o cálculo na tela de Calcular Parcelas.
- Requisição GET para consulta de dados na tela de Consultar Usuário.

## Tecnologias

- Front-end: Angular 15
- Back-end: .NET 6.0 C#
- Formato de Dados: JSON e texto simples para comunicação entre a API e o front-end

#### Rotas
- O front-end: http://localhost:4200
- API do back-end: http://localhost:5000
