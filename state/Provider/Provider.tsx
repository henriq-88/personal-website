import { RecoilRoot } from 'recoil';

interface StateProviderProps {
}

const StateProvider: React.FC<StateProviderProps> = (props) => (
  <RecoilRoot>
    {props.children}
  </RecoilRoot>
);

export default StateProvider;
