/*
и еще задача: напиши функцию, которая может принимать на вход либо строку, либо массив строк. Если это строка, то вернуть надо строку с заглавными буквами, а если это массив, то верни массив со строками с заглавными буквами
типа:
'srt' => 'SRT'
['srt', 'trf'] => ['SRT', 'TRF']
*/

interface fn2<T> {
  (value: T): T
}

const qqq:fn2<string | string[]> = (value) => {
  if(typeof value === 'string'){
    return value.toUpperCase();
  }
  else if(Array.isArray(value)){
    return value.map(item => {return item.toUpperCase()})
  }
  return value;
}

console.log(qqq('fff'))
console.log(qqq(['gg', 'ff']))