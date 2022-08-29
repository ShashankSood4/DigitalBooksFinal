using System;
using System.Collections.Generic;

namespace Author.Models
{
    public partial class DigitalBooksUser
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string UserPass { get; set; } = null!;
        public string UserRole { get; set; } = null!;
    }
}
