import { hasOwn } from 'element-ui/src/com.com.itheima.utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
