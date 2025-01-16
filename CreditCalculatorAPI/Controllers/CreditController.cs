using CreditCalculatorAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CreditCalculatorAPI.Controllers
{
	[ApiController]
	[Route("api")]
	public class CreditController : ControllerBase
	{
		[HttpPost("installment-calculate")]
		public IActionResult PostCalculateInstallment([FromBody] CreditRequest? request)
		{
			try
			{
				if (request == null || request.InstallmentQuantity <= 0 || request.InstallmentValue <= 0)
					return BadRequest("O valor deve ser maior que 0.");

				decimal total = request.InstallmentValue * request.InstallmentQuantity * 1.05m;

				return Ok(new CreditResponse { TotalAmount = total });
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Erro ao processar a solicitação: {ex.Message}");
			}
		}

		[HttpGet("user/{id}")]
		public IActionResult GetUserById(int? id)
		{
			try
			{
				if (id == null || id <= 0 || id > 3)
					return BadRequest("ID deve estar entre 1 e 3.");

				var list = new List<KeyValuePair<int, string>>
				{
					new KeyValuePair<int, string>(1, "João"),
					new KeyValuePair<int, string>(2, "Maria"),
					new KeyValuePair<int, string>(3, "Ana")
				};

				var result = list.FirstOrDefault(x => x.Key == id).Value.ToString();

				if (result == null)
					return NotFound("ID não encontrado.");

				return Ok(result);
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Erro ao processar a solicitação: {ex.Message}");
			}
		}
	}
}
