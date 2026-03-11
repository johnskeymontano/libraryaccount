using System.ComponentModel.DataAnnotations;

namespace figmaesakay.Models
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Kailangan ang pangalan.")]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Hindi magkapareho ang password.")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        // Para sa eSakay, mahalaga kung Driver o Commuter
        [Required]
        public string UserType { get; set; } // "Commuter" or "Driver"
    }
}