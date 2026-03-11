using Microsoft.AspNetCore.Mvc;
using figmaesakay.Models;
using Microsoft.AspNetCore.Http; // Importante para sa Session
using System.Diagnostics;

namespace figmaesakay.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // 1. Kunin ang pangalan galing sa Session
            var fullName = HttpContext.Session.GetString("UserFullName");
            var userType = HttpContext.Session.GetString("UserType");

            // 2. Check kung naka-login (Security)
            if (string.IsNullOrEmpty(fullName))
            {
                // Kapag hindi naka-login, ibalik sa Login Page
                return RedirectToAction("Login", "Account");
            }

            // 3. Ipasa ang pangalan sa View para ma-display
            ViewBag.UserName = fullName; 
            ViewBag.UserType = userType;

            return View();
        }

        public IActionResult Community()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}