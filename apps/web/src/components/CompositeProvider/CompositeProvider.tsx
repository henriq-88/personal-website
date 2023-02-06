import ThemeProvider from '../../theme/Provider';

interface CompositeProviderProps {
  children: React.ReactNode;
}

const CompositeProvider: React.FC<CompositeProviderProps> = (props) => (
  <ThemeProvider>
    {props.children}
  </ThemeProvider>
);

export default CompositeProvider;
