using DigitalBooks.Models;
using DigitalBooks.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace DigitalBooks.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : Controller
    {
        private readonly IBooksService _book;


        public BooksController(IBooksService book)
        {
            _book = book;
        }


        // GET: /books/GetAll
        [HttpGet("~/GetAll")]
        public IEnumerable BooksList()
        {
            try
            {
                return _book.GetAll();
            }
            catch(Exception ex)
            {
                return $"Couldn't fetch all books. Error {ex.Message}";
            }
        }

        // GET: books/GetById/5
        [HttpGet("~/GetById")]
        public ActionResult<Book> GetById(int id)
        {
            try
            {
                return _book.GetById(id);
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        // POST: books/Create
        [HttpPost("~/Create")]
        public ActionResult<string> Create([FromBody]Book book)
        {
            try
            {
                string result = _book.CreateBook(book);
                return result;
            }
            catch(Exception ex)
            {
                return $"New Book record couldn't be created. Error {ex.Message}";
            }
        }

        [HttpPut("{id}")]
        public ActionResult<string> Update(int id, [FromBody]Book book)
        {
            try
            {
                string result = _book.UpdateBook(id, book);
                return result;
            }
            catch(Exception ex)
            {
                return $"The specified book record couldn't be updated. Error {ex.Message}";
            }
          
        }

        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int id)
        {
            try
            {
                string result = _book.DeleteBook(id);
                return result;
            }
            catch(Exception ex)
            {
                return $"The specified book record couldn't be deleted. Error {ex.Message}";
            }
        }
        
    }
}
