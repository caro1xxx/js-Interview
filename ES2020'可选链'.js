参见:https://github.com/haizlin/fe-interview/issues/1778
可选链是ES2020新引入的功能，目前处于ECMAScript Proposal Stage 4阶段，将陆续登陆各大浏览器（目前可通过勾选chrome的Experimental JavaScript功能体验该功能）。
本人在其Stage 2阶段开始关注，算是最期待的一个新功能之一。
语法如下：
window?.console?.log?.("Hello");
该代码可解读为
如果window存在，则其取console属性，如果console存在，则取其log属性，如果log存在，则将其作为方法调用。
如果该链任意一环节不存在，则忽略整个链并返回undefined。
在ES2020以前若要实现类似逻辑，可以使用以下方式：
window && window.console && window.console.log && window.console.log("Hello");
该功能在获取一个多层嵌套对象的属性，并且上层对象可能不存在时非常有用，比如 user.data?.extraData?.phone，如果data、extraData有可能不存在，我们不需要判断其是否存在就可以取其phone值，会减少很多逻辑判断和冗余代码。
个人觉得该功能会影响代码的规范性，造成代码的可读性变差，建议只在处理网络传输数据时使用