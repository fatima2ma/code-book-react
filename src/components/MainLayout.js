import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./utils/ScrollToTop";


function MainLayout(){
    return(
        <>
            <ScrollToTop/>
            <MainContainer>
                <Header/>
                <div className="flex-1 px-2 sm:px-6 lg:px-4">
                <Outlet/>
                </div>
                <Footer/>
            </MainContainer>
        </>
    )
}

export default MainLayout;