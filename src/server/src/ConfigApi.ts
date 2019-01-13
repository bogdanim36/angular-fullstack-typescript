export class ConfigApi {
    name = 'Project Manager';
    version = '1.0.2.0001';
    port = process.env.port || 8000;
    logFile = "logs/server.log";
    errorsFile = "logs/error.log";
}
