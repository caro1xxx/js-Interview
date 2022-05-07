// 利用parentId记录节点的层级,然后map记录所有id,然后遍历数组,靠parentId来判断是否往该children插入node
const list = [
  {
    id: '1',
    title: '节点1',
    parentId: ''
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: '节点1-2',
    parentId: '1'
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  }
]
function listToTree(list) {
  const config = {
    id: 'id',
    children: 'children',
    pid: 'parentId'
  }
  const nodeMap = new Map()
  const result = []
  const { id, children, pid } = config
  for (const node of list) {
    node[children] = node[children] || []
    nodeMap.set(node[id], node)
  }
  for (const node of list) {
    const parent = nodeMap.get(node[pid])
    if (parent) {
      parent.children.push(node)
    } else {
      result.push(node)
    }
  }
  return result
}
console.log(listToTree(list))