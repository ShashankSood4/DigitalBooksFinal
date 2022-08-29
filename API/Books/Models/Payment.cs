using System;
using System.Collections.Generic;

namespace DigitalBooks.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public string? Email { get; set; }
        public int? PersonId { get; set; }
        public int? BookId { get; set; }
        public DateTime? PaymentDate { get; set; } = DateTime.UtcNow;

        public virtual Person? Person { get; set; }
    }
}
