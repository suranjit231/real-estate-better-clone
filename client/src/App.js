import Navbar from "./components/navbar/Navbar";
import { NavContextProvider } from "./context/NavContaxt";
import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/homePage/Home";
import Footer from "./components/footer/Footer";



function App() {

  const [isShowSidebar, setIsShowSidebar] = useState(false);

 
  return (
    <div className="App">

      <NavContextProvider>

        { !isShowSidebar && <>
          <Navbar setIsShowSidebar={setIsShowSidebar} />

          <Home />

          <Footer />
         
        
        </>}

         <Sidebar isShowSidebar={isShowSidebar}
         setIsShowSidebar={setIsShowSidebar} />
           
            {/* {isShowSidebar && window.innerWidth <= 768 && <Sidebar isShowSidebar={isShowSidebar} />} */}
      </NavContextProvider>
      

    </div>
  );
}

export default App;
