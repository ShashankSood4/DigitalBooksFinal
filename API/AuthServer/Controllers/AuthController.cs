
using AuthServer.Services;
using AuthServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        public DigitalBooksContext DbContext { get; set; }
        public readonly IConfiguration _configuration;
        public AuthenticationController(ITokenService tokenService, DigitalBooksContext dbContext, IConfiguration configuration)
        {
            _tokenService = tokenService;
            DbContext = dbContext;
            _configuration = configuration;
        }

        private class RequestedUserInfo
        {
            public long UserId { get; set; }
            public string UserName { get; set; }
            public string UserType { get; set; }
            public string UserEmail { get; set; }
            public string Password { get; set; }
            public RequestedUserInfo(long userId, string userName, string usertype, string email, string password)
            {
                UserId = userId;
                UserName = userName;
                UserType = usertype;
                UserEmail = email;
                Password = password;
            }
        }
        //Post method for authenticating the user and generating token.
        [HttpPost]
        public ActionResult<string> Authentication(LoginCred userdetail)
        {
            try
            {
                var userdata = ValidateUserCredentials(userdetail);
                if (userdata != null)
                {
                    var token = _tokenService.BuildToken(_configuration["Jwt:Key"],
                                _configuration["Jwt:Issuer"],
                                new[]
                                {
                                _configuration["Jwt:Aud1"],
                                _configuration["Jwt:Aud2"],
                                _configuration["Jwt:Aud3"]
                                },
                                userdata.UserName,
                                userdata.UserType);
                    return Ok(new
                    {
                        Token = token,
                        IsAuthenticated = true
                    });
                }
                return Ok(new
                {
                    Token = string.Empty,
                    IsAuthenticated = false
                });
            }
            catch (Exception ex)
            {

                return Ok(ex.Message);
            }

        }
        private RequestedUserInfo ValidateUserCredentials(LoginCred userLogin)
        {
            try
            {
                List<DigitalBooksUser> list = _tokenService.validateuser(userLogin);
                foreach (var item in list)
                {
                    return new RequestedUserInfo(item.UserId, item.UserName, item.Email, item.UserPass, item.UserRole);

                }
                return null;

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    
}
}

