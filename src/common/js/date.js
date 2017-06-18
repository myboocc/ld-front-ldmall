export function formatDate(date, fmt) {
  if(/(y+)/.test(fmt)){
    console.log(RegExp.$1);
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for(let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1 ? str : padLftZero(str)));
      }
    }
    return fmt;
  };
};

function padLftZero(str) {
  return ('00' + str).substr(str.length);
}

