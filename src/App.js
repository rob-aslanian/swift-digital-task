import React from 'react';
import './style.css';
import { useResponsive } from './hooks/useResponsive.hook';

export default function App() {
  const size = useResponsive();
  console.log(size);
  return (
    <div>
      {size === 'sm' && <div>Show on mobile</div>}
      {size === 'md' && <div>Show on tablet</div>}
      {size === 'lg' && <div>Show on desktop</div>}
    </div>
  );
}
