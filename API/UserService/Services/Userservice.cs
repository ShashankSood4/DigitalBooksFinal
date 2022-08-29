using Author.Models;
using Newtonsoft.Json.Linq;

namespace Author.Services
{
    public class Userservice : IUserService
    {
        private readonly DigitalBooksContext _context;

        public Userservice(DigitalBooksContext context)
        {
            _context = context;
        }
        //public List<Book> Search(Book book)
        //{/
        //    return _context.Books.Select(x => x.AuthorId == book.AuthorId);
        //}

        public List<DigitalBooksUser> GetAll()
        {
            return _context.DigitalBooksUsers.ToList();
        }

        public DigitalBooksUser GetById(int id)
        {
            return _context.DigitalBooksUsers.FirstOrDefault(x => x.UserId == id);
        }

        public string CreateUser(DigitalBooksUser user)
        {
            _context.DigitalBooksUsers.Add(user);
            _context.SaveChanges();
            
            return "User Added";
        }

        public string UpdateUser(int id, DigitalBooksUser user)
        {
            var userToUpdate = _context.DigitalBooksUsers.FirstOrDefault(t => t.UserId == id);
            userToUpdate.UserPass = user.UserPass;
            userToUpdate.Email = user.Email;
            _context.DigitalBooksUsers.Update(userToUpdate);
            _context.SaveChanges();
            return $"User details updated for Id {user.UserId} ";
        }

        public string DeleteUser(int id)
        {
            var userToDelete = _context.DigitalBooksUsers.FirstOrDefault(t => t.UserId == id);

            _context.DigitalBooksUsers.Remove(userToDelete);
            _context.SaveChanges();
            return $"User with Id {id} deleted";
        }

        
    }
}
