import React from 'react';

const widthToSizeType = () => {
  const width = window.innerWidth;

  if (width >= 960) {
    return 'lg';
  } else if (width > 480) {
    return 'md';
  }

  return 'sm';
};

export const useResponsive = () => {
  const [sizes, setSizes] = React.useState(widthToSizeType());

  const onResize = React.useCallback(() => {
    const sizeType = widthToSizeType();
    setSizes(sizeType);
  }, [setSizes]);

  const debounce = (cb, delay = 500) => {
    return function() {
      const timeOutId = setTimeout(() => {
        cb();
        clearTimeout(timeOutId);
      }, delay);
    };
  };

  React.useEffect(() => {
    window.addEventListener('resize', debounce(onResize));

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return sizes;
};
