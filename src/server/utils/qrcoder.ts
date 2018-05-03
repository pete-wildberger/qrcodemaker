import * as QRCode from 'qrcode'

export const qrcoder = (code:string):string => {
  let result:string;
  QRCode.toDataURL(code)
    .then(url => {
      result = url;
    })
    .catch(err => {
      console.error(err)
    })
  return result;
}
