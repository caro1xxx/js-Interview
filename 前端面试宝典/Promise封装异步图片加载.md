```js
function loadImg(url){
  return new Promise((resolve,reject)=>{
    let img = new Image();
    img.onload =function(){
      resolve(img);
    }
  }).catch(error){
    reject(new Error('Could not load image at' + url));
  }
  img.src = url
}
```

