var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'Alram',
    description: 'this is 1 hour alram',
    script: require('path').join(__dirname, 'index.js'),
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
    //, workingDirectory: '...'
    //, allowServiceLogon: true
});

svc.on('install', function () {
    svc.start();
});


if (process.argv[2] === 'install') {
    svc.install();
}


if (process.argv[2] === 'uninstall') {
    svc.uninstall();
}