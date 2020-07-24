import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const sysReq = document.getElementById('SystemRequirements');
  const sysDiv = document.createElement('div');

  useEffect(() => {
    sysReq.appendChild(sysDiv);
    return () => sysReq.removeChild(sysDiv);
  }, [sysDiv, sysReq]);

  return createPortal(children, sysDiv);
};

export default Portal;
