using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace AngularTestApp.Helpers
{
    public class SignalRHub : Hub
    {
        public async Task NewMessage(int i)
        {
            await Clients.All.SendAsync("messageReceived", i);
        }
    }
}
