using DigitalBooks.Models;

namespace DigitalBooks.Services
{
    public interface IBooksService
    {
        //public List<Book> Search(Book book);

        public List<Book> GetAll();
        public Book GetById(int id);
        public string CreateBook(Book book);
        public string UpdateBook(int id, Book book);
        public string DeleteBook(int id);
    }
}