区别：
宿主对象：所有非本地对象都是宿主对象（host object），由ECMAScript实现的宿主环境提供的对象，可以理解为：在浏览器中window对象以及其下边所有的子对象(如bom、dom等等)，在node中是globla及其子对象，也包含自定义的类对象，
原生对象：
独立于宿主环境的ECMAScript实现提供的对象。与宿主无关，在javascript（远景浏览器）、nodejs（node平台）、jscript（ie浏览器）、typescript（微软平台）等等中均有这些对象。简单来说，本地对象就是 ECMA-262 定义的类（引用类型）。在运行过程中动态创建的对象，需要new

联系：

本地对象与内置对象：原生包含内置，内置是原生的一个子集。
宿主对象：内置对象的Global和宿主提供的一个全局对象，
本地对象为array obj regexp等可以new实例化
内置对象为 Global Math 等不可以实例化的
宿主为宿主注入到全局的对象，如浏览器的window 等
宿主为浏览器自带的document,window 等