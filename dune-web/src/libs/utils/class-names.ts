

export const cls = (...args: (string | { [key in string]: boolean })[]) => {
  return args.reduce((pre, cur) => {
    if (typeof cur === 'string') {
      return pre + ' ' + cur;
    } else {
      const classNames = Object.keys(cur).filter(key => cur[key]);
      return pre + ' ' + classNames.join(' ');
    }
  }, '') as string
}