function _getElementsByClassName(className){
    // 获取所有节点
    const tags = document.getElementsByTagName('*');
    const tempTags = [];
    // 循环所有节点
    for(let i=0, len = tags.length; i< len; i++)
    {
        let tag = tags[i];
        // 连接
        tag.classList.contains(className) && tempTags.push(tag)
    }
    return tempTags;
}