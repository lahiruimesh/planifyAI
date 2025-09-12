/*this is memory version of TripController.cs, the actual file has been modified to use MongoDB instead of in-memory storage

using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripController : ControllerBase
    {
        private static List<Trip> trips = new List<Trip>();
        private static int nextId = 1;

        // GET: api/trip
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(trips);
        }

        // GET: api/trip/1
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var trip = trips.FirstOrDefault(t => t.Id == id);
            if (trip == null) return NotFound();
            return Ok(trip);
        }

        // POST: api/trip
        [HttpPost]
        public IActionResult Create(Trip trip)
        {
            trip.Id = nextId++;
            trips.Add(trip);
            return CreatedAtAction(nameof(GetById), new { id = trip.Id }, trip);
        }

        // DELETE: api/trip/1
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var trip = trips.FirstOrDefault(t => t.Id == id);
            if (trip == null) return NotFound();
            trips.Remove(trip);
            return NoContent();
        }
    }
}*/

using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Services;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripController : ControllerBase
    {
        private readonly TripService _tripService;

        public TripController(TripService tripService)
        {
            _tripService = tripService;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_tripService.GetAll());

        [HttpGet("{id:length(24)}", Name = "GetTrip")]
        public IActionResult GetById(string id)
        {
            var trip = _tripService.GetById(id);
            if (trip == null) return NotFound();
            return Ok(trip);
        }

        [HttpPost]
        public IActionResult Create(Trip trip)
        {
            _tripService.Create(trip);
            return CreatedAtRoute("GetTrip", new { id = trip.Id }, trip);
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var trip = _tripService.GetById(id);
            if (trip == null) return NotFound();
            _tripService.Delete(id);
            return NoContent();
        }
    }
}
