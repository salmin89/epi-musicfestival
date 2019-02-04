using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using React;
using React.TinyIoC;
using React.Web.TinyIoC;
using System.IO;
using System.Web;
using System.Linq;
using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(MusicFestival.Template.ReactConfig), "Configure")]

namespace MusicFestival.Template
{
    public static class ReactConfig
    {

        public static void Configure()
        {
            if (HttpContext.Current != null)
            {
                Initializer.Initialize(AsPerRequestSingleton);
            }

            // Setup json serialization
            ReactSiteConfiguration.Configuration.SetJsonSerializerSettings(new JsonSerializerSettings
            {
                StringEscapeHandling = StringEscapeHandling.EscapeHtml,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });

            ReactSiteConfiguration.Configuration
                .SetLoadBabel(false)
                .AddScriptWithoutTransform("~/Scripts/dist/server.react.js")
                .SetMaxEngines(3)
                .SetStartEngines(3);

            JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
            JsEngineSwitcher.Current.EngineFactories.AddV8();
        }

        private static TinyIoCContainer.RegisterOptions AsPerRequestSingleton(TinyIoCContainer.RegisterOptions registerOptions)
        {
            return TinyIoCContainer.RegisterOptions.ToCustomLifetimeManager(
                registerOptions,
                new HttpContextLifetimeProvider(),
                "per request singleton"
            );
        }
    }
}
