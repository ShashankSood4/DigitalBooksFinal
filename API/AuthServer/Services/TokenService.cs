using AuthServer.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthServer.Services

{
    public class TokenService:ITokenService
    {
            private TimeSpan ExpireDuration = new TimeSpan(200, 30, 0);
            private readonly IConfiguration _configuration;
            private readonly DigitalBooksContext _dbContext;
            public TokenService(DigitalBooksContext dbContext, IConfiguration configuration)
            {
                _configuration = configuration;
                _dbContext = dbContext;
            }

            public string BuildToken(string key, string issuer, IEnumerable<string> audience, string userName, string UserType)
            {
            var claims = new List<Claim>
            {
                new Claim("UserName", userName),
                new Claim("UserRole",UserType)
            };

            claims.AddRange(audience.Select(aud => new Claim(JwtRegisteredClaimNames.Aud, aud)));

                var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                var tokenDescriptor = new JwtSecurityToken(issuer, issuer, claims,
                    expires: DateTime.Now.Add(ExpireDuration), signingCredentials: credentials);
                return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);

            }
        public List<DigitalBooksUser> validateuser(LoginCred usersdetails)
        {
            var userObj = _dbContext.DigitalBooksUsers.Where(u => u.UserName == usersdetails.UserName && u.UserPass == usersdetails.UserPass).ToList();
            if (userObj != null)
            {
                return userObj;
            }
            else
            {
                return null;
            }
        }
    }
    }
