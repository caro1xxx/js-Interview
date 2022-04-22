> 判断navigator.userAgent

```js
这是判断移动端具体设备型号
const appleIphone = /iPhone/i;
const appleIpod = /iPod/i;
const appleTablet = /iPad/i;
const androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'
const androidTablet = /Android/i;
```

> 推荐使用库:https://github.com/kaimallea/isMobile

```js
import isMobile from "ismobilejs";

const mobile = isMobile();
```

