using Author.Models;
using Newtonsoft.Json.Linq;

namespace Author.Services
{
    public interface IUserService
    {
        //public List<Book> Search(Book book);

        public List<DigitalBooksUser> GetAll();
        public DigitalBooksUser GetById(int id);
        public string CreateUser(DigitalBooksUser user);
        public string UpdateUser(int id, DigitalBooksUser user);
        public string DeleteUser(int id);
    }
}