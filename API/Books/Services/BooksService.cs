using DigitalBooks.Models;

namespace DigitalBooks.Services
{
    public class BooksService : IBooksService
    {
        private readonly DigitalBooksContext _context;

        public BooksService(DigitalBooksContext context)
        {
            _context = context;
        }
        //public List<Book> Search(Book book)
        //{/
        //    return _context.Books.Select(x => x.AuthorId == book.AuthorId);
        //}

        public List<Book> GetAll()
        {
            return _context.Books.ToList();
        }

        public Book GetById(int id)
        {
            return _context.Books.FirstOrDefault(x => x.BookId == id);
        }

        public string CreateBook(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return "Book Added";
        }

        public string UpdateBook(int id, Book book)
        {
            var bookToUpdate = _context.Books.FirstOrDefault(t => t.BookId == id);
            bookToUpdate.Title = book.Title;
            bookToUpdate.Price= book.Price;
            bookToUpdate.Active = book.Active;
            bookToUpdate.Content = book.Content;
            bookToUpdate.Logo = book.Logo;
            _context.Books.Update(bookToUpdate);
            _context.SaveChanges();
            return $"Book with Id {book.BookId} updated";
        }

        public string DeleteBook(int id)
        {
            var bookToDelete = _context.Books.FirstOrDefault(t => t.BookId == id);

            _context.Books.Remove(bookToDelete);
            _context.SaveChanges();
            return $"Book with Id {id} deleted";
        }
    }
}
