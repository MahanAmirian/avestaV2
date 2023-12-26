import { useRoutes } from "react-router";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
function App() {
  let router = useRoutes(routes);
  return (
    <>
        <ToastContainer />
        {router}
    </>
  );
}

export default App;
