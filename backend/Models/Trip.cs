namespace backend.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string Destinations { get; set; }
        public int Persons { get; set; }
        public int Days { get; set; }
        public decimal Budget { get; set; }
        public string Preferences { get; set; }
    }
}