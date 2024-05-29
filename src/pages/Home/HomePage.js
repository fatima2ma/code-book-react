import FlexContainer from "./components/FlexContainer";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Testimonails from "./components/Testimonails";
import FAQ from "./components/FAQ";
import useTitle from "../../hooks/useTitle";

function Home(){
    useTitle('eBooks web app');
    return(
        <FlexContainer>
        <Hero/>
        <Featured/>
        <Testimonails/>
        <FAQ/>
        </FlexContainer>
    )
}

export default Home;