function fn(cb,time){
  setTimeout(cb,time);
}

fn(()=>{console.log('callback');},2000);