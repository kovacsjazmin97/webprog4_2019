const winston =require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [

        new winston.transports.File({ filename: 'app.log', level: 'info' }),
        new winston.transports.Console()
    ]
});
logger.log('info', {message: 'hello'} );

var QRCode = require('qrcode');
const fs=require('fs');
QRCode.toDataURL('Répa', (err, url) =>{
    console.log(url)
})
