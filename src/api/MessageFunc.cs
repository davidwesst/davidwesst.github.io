using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;

public class MessageFunc
{
    private readonly ILogger _logger;

    public MessageFunc(ILoggerFactory loggerFactory) 
    {
        _logger = loggerFactory.CreateLogger<MessageFunc>();
    }

    [Function("message")]
    public HttpResponseData Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get")]
        HttpRequestData req)
    {
        _logger.LogInformation("processed request");
        var res = req.CreateResponse(HttpStatusCode.OK);
        res.WriteString("Yay! Azure Functions FTW!");

        return res;
    } 
}