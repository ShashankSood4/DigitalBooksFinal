using AuthServer.Models;

namespace AuthServer.Services
{
    public interface ITokenService
    {
        public string BuildToken(string key, string issuer, IEnumerable<string> audience, string userName, string UserType);

        public List<DigitalBooksUser> validateuser(LoginCred usersdetails);
    }
}
