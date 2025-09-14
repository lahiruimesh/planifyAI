using backend.Models;
using backend.Services;

var builder = WebApplication.CreateBuilder(args);

// --- Add CORS ---
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactDev", policy =>
    {
        policy
            .WithOrigins("http://localhost:3000")   // <-- change if your React runs on different port (e.g. 5173)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();                    // optional if you use cookies/auth
    });
});

// Add services to the container.
builder.Services.AddControllers();

// Configure MongoDB settings
builder.Services.Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDBSettings"));

// Register TripService as a Singleton
builder.Services.AddSingleton<TripService>();

// OpenAPI / Swagger
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// apply CORS policy
app.UseCors("AllowReactDev");

app.UseHttpsRedirection();

// Map controllers like TripController
app.MapControllers();   // 👈 Important

app.Run();
