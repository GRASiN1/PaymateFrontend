import router from "./services/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App min-w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
