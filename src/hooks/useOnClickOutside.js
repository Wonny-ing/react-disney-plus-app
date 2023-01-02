import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      console.log('event.target:', event.target);
      console.log('ref.current:', ref.current); // ref = {ref}를 안넣어줬다면 null이됨
      // 모달창 안을 클릭 시, return
      if (!ref.current && ref.current.contains(event.target)) {
        return;
      }
      // 아니라면 handler 호출
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
