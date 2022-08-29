using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Payment
{
    public class PaymentModel
    {
        public int PaymentID { get; set; }
        public string BuyerEmail { get; set; }
        public string BuyerName { get; set; }
        public int BookID { get; set; }
        public string PaymentDate { get; set; } = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
    }
}
