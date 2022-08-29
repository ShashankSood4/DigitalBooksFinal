using Author.Models;
using Author.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Collections;

namespace Author.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _author;


        public UserController(IUserService author)
        {
            _author = author;
        }


        // GET: author/GetAllUsers
        [HttpGet("~/GetAllUsers")]
        public IEnumerable UserList()
        {
            try
            {
                return _author.GetAll();
            }
            catch (Exception ex)
            {
                return $"Couldn't fetch all users. Error {ex.Message}";
            }
        }

        // GET: author/GetById/5
        [HttpGet("~/GetById")]
        public ActionResult<DigitalBooksUser> GetById(int id)
        {
            try
            {
                return _author.GetById(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        // POST: AuthorController/Create
        [HttpPost("~/CreateUser")]
        public ActionResult<string> Create([FromBody] DigitalBooksUser user)
        {
            try
            {
               string result = _author.CreateUser(user);
                return result;
            }
            catch (Exception ex)
            {
                
                return $"New User record couldn't be created. Error {ex.Message}";
            }
        }
        
        [HttpPut("{id}")]
        public ActionResult<string> Update(int id, [FromBody] DigitalBooksUser user)
        {
            try
            {
                string result = _author.UpdateUser(id, user);
                return result;
            }
            catch (Exception ex)
            {
                return $"The specified user record couldn't be updated. Error {ex.Message}";
            }

        }

        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int id)
        {
            try
            {
                string result = _author.DeleteUser(id);
                return result;
            }
            catch (Exception ex)
            {
                return $"The specified user record couldn't be deleted. Error {ex.Message}";
            }
        }
    }
}
