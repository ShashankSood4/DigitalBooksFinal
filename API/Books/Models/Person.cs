using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DigitalBooks.Models
{
    public partial class Person
    {
        public Person()
        {
            Payments = new HashSet<Payment>();
        }

        public int PersonId { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Email { get; set; }
        [MinLength(6)]
        public string? Password { get; set; }
        public string? Role { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
