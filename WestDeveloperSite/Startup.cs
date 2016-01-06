using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WestDeveloperSite.Startup))]
namespace WestDeveloperSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
