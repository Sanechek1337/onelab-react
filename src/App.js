import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Home from './page/Home';
import Add from './page/Add';
import List from './page/List';
import { store } from './store/store';
import './App.css';

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
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: '#01a9b2',
              color: '#fff',
              borderRadius: '5px',
              boxShadow: '0 0 5px #01a9b2, 0 0 25px #01a9b2',
              fontSize: '20px',
              fontWeight: '700',
            },
          }}
        />
      </Provider>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled('div')`
  background: linear-gradient(#141e30, #243b55);
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
