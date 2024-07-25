import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container  ">
        <Sidebar/>
        <Header />
        <div className="body" >
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;