using Microsoft.AspNetCore.Mvc;

namespace figmaesakay.Controllers
{
    public class RideController : Controller
    {
        public IActionResult Track() => View();
        public IActionResult Fare() => View();
        public IActionResult Safety() => View();
    }
}