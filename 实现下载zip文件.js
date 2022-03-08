method 1
a标签加download属性

download:指定下载文件的文件名
<a href="http://somehost/somefile.zip" download="filename.zip">Download file</a>



method 2
文件流的方式(动态添加a标签)


var a = document.createElement('a');
var url = window.URL.createObjectURL(blob);
var filename = 'what-you-want.txt';
a.href = url;
a.download = filename;
a.click();
window.URL.revokeObjectURL(url);



注意：Bolb的方式构建完 blob 对象后才会转换成文件，所以尽量使用a标签的形式进行下载