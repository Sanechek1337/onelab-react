import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import Home from './page/Home';
import Add from './page/Add';
import List from './page/List';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/add',
      element: <Add />,
    },
    {
      path: '/list',
      element: <List />,
    },
  ]);

  return (
    <StyledAppContainer>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled('div')`
  background: linear-gradient(#141e30, #243b55);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
