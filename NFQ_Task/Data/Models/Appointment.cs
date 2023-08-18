namespace NFQ_Task.Data.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public DateTime AppointmentTime { get; set;}
        public bool IsActive { get; set; } = true;

        public string SpecialistId { get; set; }
        public virtual Specialist? Specialist { get; set; }

        public string Status { get; set; }

    }
}
