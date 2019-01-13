import fs = require('fs');

export class ServerLog {

    constructor(allLogsFile, errorFile) {
        const {keys} = Object;
        const {Console} = console;
        if (process.env.dev) return;
        let allLogs = new Console(fs.createWriteStream(allLogsFile ));
        let errorLogs = new Console(fs.createWriteStream(errorFile, {flags:'a'}));

        keys(Console.prototype).forEach(key => {
            if (key === 'error' || key === 'warn') console[key] = (...args) => errorLogs[key]((new Date()).toLocaleString(), ...args);
            else console[key] = (...args) => allLogs[key]((new Date()).toLocaleString(), ...args);
        });
    }
}


