using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NFQ_Task.Data.Models;

namespace NFQ_Task.Data
{
    public class ApplicationDbContext : IdentityDbContext<Specialist>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Appointment> Appointments { get; set; }
    }
}