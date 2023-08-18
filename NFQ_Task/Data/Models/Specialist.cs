using Microsoft.AspNetCore.Identity;

namespace NFQ_Task.Data.Models
{
    public class Specialist : IdentityUser
    {
        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
