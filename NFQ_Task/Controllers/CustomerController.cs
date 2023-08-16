using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NFQ_Task.Data.Models;
using NFQ_Task.Data;

namespace NFQ_Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ApplicationDbContext _databaseContext;
        public CustomerController(ApplicationDbContext context, IAuthorizationService authorizationService)
        {
            _databaseContext = context;

        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok();
        }
    }
}
