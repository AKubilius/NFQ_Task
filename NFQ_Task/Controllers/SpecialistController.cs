using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NFQ_Task.Data;
using NFQ_Task.Data.Models;
using System.Data;
using System.Security.Claims;

namespace NFQ_Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecialistController : ControllerBase
    {
        private readonly ApplicationDbContext _databaseContext;
        public SpecialistController(ApplicationDbContext context, IAuthorizationService authorizationService)
        {
            _databaseContext = context;
           
        }

        [HttpGet]
        public async Task<ActionResult<List<Specialist>>> GetSpecialists()
        {
            return Ok();
        }
    }
}
