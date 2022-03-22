[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })

// [].forEach.call() => 调用引用数组的forEach方法
// $$('*') => document.querySelectorAll('*')
// ~~a => parseInt(a)
// 1<<24 => 对二进数1小数点右移24位
// (parseInt(Math.random()*(1<<24)).toString(16)) => 获得了一个位于0-16777216之间的随机整数，也就是随机颜色，再使用toString(16)将它转化为十六进制数。


[].forEach.call(
  document.querySelectorAll('*'),
  function(a){
      a.style.outline="1px solid #" + 
      (parseInt(Math.random()*(1<<24)).toString(16))
  }
)