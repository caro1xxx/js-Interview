function dataType(v){
  return Object.prototype.toString.call(v).replace(/^.{8}(.+)]$/,(m,$1)=> $1.toLowerCase());
}