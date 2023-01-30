import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

interface RTLProviderProps {
  children: React.ReactNode;
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const RTLProvider: React.FC<RTLProviderProps> = (props) => {
  return (
    <CacheProvider
      value={cacheRtl}
    >
      {props.children}
    </CacheProvider>
  );
}

export default RTLProvider;