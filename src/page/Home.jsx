import Header from "../component/Header";
import Content from "../component/Content";
import Footer from "../component/Footer";

function Home(){
    return(
        <div className="main-layout main-container">
            <Header className="header-layout"/>
            <Content className="content-layout"/>
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Home;