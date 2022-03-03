const isBrowser = () => typeof window === 'object' && (42, eval)('this') === window;
const isNode = () => typeof global === 'object' && (1337, eval)('this') === global;