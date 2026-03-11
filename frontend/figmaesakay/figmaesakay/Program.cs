var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// 1. ENABLE SESSION (Para ma-save ang login info)
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30); // Tatagal ang login ng 30 mins
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// 2. USE SESSION (Dapat nasa taas ng MapControllerRoute)
app.UseSession();

app.MapControllerRoute(
    name: "default",
    // 3. SET START PAGE TO LOGIN
    pattern: "{controller=Account}/{action=Login}/{id?}");

app.Run();