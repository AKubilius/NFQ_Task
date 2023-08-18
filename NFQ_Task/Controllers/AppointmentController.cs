using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NFQ_Task.Data;
using NFQ_Task.Data.Models;
using System.Data;

namespace NFQ_Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly ApplicationDbContext _databaseContext;
        public AppointmentController(ApplicationDbContext context, IAuthorizationService authorizationService)
        {
            _databaseContext = context;

        }
        public bool CodeExistsInDatabase(string code)
        {
            return _databaseContext.Appointments.Any(item => item.Code == code);
        }
        public string GenerateUniqueCode()
        {
            var length = 4;
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();

            string code;
            do
            {
                code = new string(Enumerable.Repeat(chars, length)
                      .Select(s => s[random.Next(s.Length)]).ToArray());
            } while (CodeExistsInDatabase(code));

            return code;
        }



        [HttpGet]
        public async Task<ActionResult<List<Appointment>>> Get()
        {
            return Ok(await _databaseContext.Appointments.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Appointment>>> Get(int id)
        {
            var Ingredient = await _databaseContext.Appointments.FindAsync(id);
            if (Ingredient == null)
                return BadRequest("Appointment not found");
            return Ok(Ingredient);
        }
        [HttpPost]
        public async Task<ActionResult<Appointment>> Create([FromBody] string Id)
        {
            Appointment appointment = new Appointment();
            appointment.AppointmentTime = DateTime.Now;
            appointment.Code = GenerateUniqueCode();
            appointment.SpecialistId = Id;
            appointment.Status = "Pending";
            _databaseContext.Appointments.Add(appointment);
            await _databaseContext.SaveChangesAsync();
            return Ok(appointment.Code);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Appointment>> Cancel(int id, Appointment request)
        {
            var Appointment = await _databaseContext.Appointments.FindAsync(request.Id);
            if (Appointment == null)
                return BadRequest("Appointment not found");

            Appointment.Status = "Canceled";
            Appointment.IsActive = false;
            await _databaseContext.SaveChangesAsync();
            return Ok("Appointment was canceled");
        }

    }
}
