1.MutationObserver
  观察DOM输,监听DOM变化
  
  //选择要观察突变的节点
  const mutationElement = document.getElementById('element');
  //观察者选项(观察哪些突变)
  const config ={
    attributes:true,
    childlist:true,
    subtree:true,
  }

  //创建一个观察者实例,链接到一个回调,观察突变时的执行
  const observer = new MutationObserver((mutations,observer)=>{
    mutations.forEach((mutation) => {
      if(mutation.type === 'attributes'){
        console.log('...');
      }else if(mutation === 'childlist'){
        console.log('...');
      }
       // 可以停止观察
      observer.disconnect();
    })
  })
  // 开始观察目标节点的配置突变情况
  observer.observe(mutationElement,config);
 

  当一个元素的属性、文本或内容发生变化时，我们会得到通知，同时也会监控子节点是否被添加或删除。
  这对于调整DOM中元素的大小以及重置DOM值特别有用

2.IntersectionObserver
  观察一个DOM元素的变化,监听其位置的变化

  // 选择需要观察的节点
  const targetNode = document.getElementById('element');
  // 观察者选项(观察哪些突变)
  const config = {
    rootMatgin:'10px 0px 0px 0px',
  }
  // 创建一个观察者实例,添加回调,可以观察到突变的执行
  const intersectionObserver = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        console.log('...');
        //可以停止观察
        observer.unobserve(entry,target);
      }
    })
  })
  // 开始观察
  intersectionObserver(targetNode,config);
  
  这在基于目标元素的可见性和位置的懒惰加载和动画内容方面非常有用

3.ResizeObserver
  观察元素的内容或边框，监听元素及其子元素的变化

  // 选择要观察突变的节点
  const targetNode = document.getElementById('element');

  const resizeObserver = new ResizeObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(`Element size: ${entry.width}px x ${entry.height}px`);
      console.log(`Element padding: ${entry.top}px ; ${entry.left}px`);

      // 之后，你可以停止观察
      observer.unobserve(entry.target);
    });
  });

  // 开始观察
  resizeObserver.observe(targetNode);

  创建基于输入或触发器包装的动态内容时，此观察者非常重要。

4.PerformanceObserver
  观察性能测量事件，监听新的性能条目

  // 观察者的选项（观察哪些突变）
  const config = {
    entryTypes: ['resource', 'mark', 'measure']
  };

  const observer = new PerformanceObserver(list => {
    list.getEntries().forEach(entry => {
      // 在控制台上显示每个报告的测量
      console.log(
        `Name: ${entry.name}`,
        `Type: ${entry.entryType}`,
        `Start: ${entry.startTime}`,
        `Duration: ${entry.duration}`,
      );
    });
  });

  // 开始观察
  observer.observe(config);
  performance.mark('registered-observer');

  这对于接收性能通知很有用，可以在空闲时间运行，而不与关键的渲染工作竞争


原文:`https://segmentfault.com/a/1190000037566809`