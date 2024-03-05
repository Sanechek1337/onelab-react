import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Home from "./page/Home";
import Add from "./page/Add";
import List from "./page/List";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/list",
      element: <List />,
    },
  ]);

  return (
    <StyledAppContainer>
      <RouterProvider router={router} />
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled("div")`
  background-color: #03688b;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
