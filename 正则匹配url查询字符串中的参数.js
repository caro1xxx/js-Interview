function urlParam(){
  const param = {};
  location.search.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2);
  return param;
}