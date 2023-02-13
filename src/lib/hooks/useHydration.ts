import { useEffect, useState } from 'react';

const useHydration = () => {
  const [hasHydrate, setHasHydrate] = useState<boolean>(false);
  useEffect(() => {
    setHasHydrate(true);
  }, []);
  return hasHydrate;
};

export default useHydration;
