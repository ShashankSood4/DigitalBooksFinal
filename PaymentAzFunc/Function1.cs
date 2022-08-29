using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Data.SqlClient;

namespace Payment
{
    public static class Function1
    {
        
        [FunctionName("CreatePayment")]
        public static async Task<IActionResult> CreatePayment(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "purchasebook")] HttpRequest req, ILogger log)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<PaymentModel>(requestBody);
           
            try
            {
                SqlConnection connection = new SqlConnection("Data Source=digitalbooks4.database.windows.net;Initial Catalog=DigitalBooks;Persist Security Info=True;User ID=shashank;Password=pass@word1");


                    connection.Open();
                    if (!String.IsNullOrEmpty(input.BuyerEmail))
                    {
                        var query = $"INSERT INTO [Payment] (BuyerEmail, BuyerName, BookID, PaymentDate) VALUES('{input.BuyerEmail}', '{input.BuyerName}' , '{input.BookID}', '{input.PaymentDate}')";
                        SqlCommand command = new SqlCommand(query, connection);
                        command.ExecuteNonQuery();
                    }
                }
            
            catch (Exception e)
            {
                log.LogError(e.ToString());
                return new BadRequestResult();
            }
            return new OkResult();
        }
    }
}
