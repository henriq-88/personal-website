import StateProvider from '@/state/Provider';
import ThemeProvider from '@/theme/Provider';

interface CompositeProviderProps {
}

const CompositeProvider: React.FC<CompositeProviderProps> = (props) => (
  <StateProvider>
    <ThemeProvider>
        {props.children}
    </ThemeProvider>
  </StateProvider>
);

export default CompositeProvider;
