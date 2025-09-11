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
}