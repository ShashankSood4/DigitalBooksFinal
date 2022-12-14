using System;
using System.Collections.Generic;

namespace Author.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public string BuyerEmail { get; set; } = null!;
        public string BuyerName { get; set; } = null!;
        public int BookId { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
