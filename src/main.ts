import * as QRCode from 'qrcode';

QRCode.toDataURL('I am a pony!',  (err, url) => {
  console.log(url);
})
