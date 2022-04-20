> inline 元素的 margin 与 padding 左右生效，上下生效，**准确说在上下方向不会使其它元素受到挤压，仿佛不生效**，如下图设置 border 会发现它其实生效了,**相当于不会撑大父元素而已**

![image-20220420222823888](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220420222823888.png)

```html
<div class="container">
  我是<span class="item">行内元素</span
  >白日依山尽，黄河入海流。欲穷千里目，更上一层楼。白日依山尽，黄河入海流。欲穷千里目，更上一层楼。白日依山尽，黄河入海流。欲穷千里目，更上一层楼。白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
</div>
```

```css
.item {
  padding: 1rem;
  border: 1px solid red;
}

.container {
  margin: 3rem;
  background-color: #ccc;
  height: 10rem;
}
```





