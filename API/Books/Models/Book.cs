using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DigitalBooks.Models
{
    public partial class Book
    {
        public int BookId { get; set; }
        public byte[]? Logo { get; set; }
        [Required]
        public string? Title { get; set; }
        public string? Category { get; set; }
        [Range(1,int.MaxValue,ErrorMessage ="Please enter a value more than 0")]
        public decimal? Price { get; set; }
        public DateTime? PublishDate { get; set; }
        public string? Content { get; set; }
        public bool? Active { get; set; }
        public int? AuthorId { get; set; }
    }
}
