对字符串进行16进制编码，主要就是获取字符串的unicode编码点值
然后对该值进行16进制转换并返回对应的字符串值

function encodeStringWithHexadecimal(str = '') {
  const encodeStr = [];

  for (let i = 0; i < str.length; i++) {
    //        codePointAt:方法返回 一个 Unicode 编码点值的非负整数。
    const charCode = str.codePointAt(i);
    if (charCode !== undefined) {
      encodeStr.push('\\x' + charCode.toString(16));
    }
  }
  return encodeStr.join('');
}