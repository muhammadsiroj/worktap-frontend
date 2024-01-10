import Footer from "../components/footer/footer";
import AuthHeader from "../components/headers/authHeader";
import AuthMain from "../components/main/authMain";
import AuthNavbar from "../components/navbar/authNavbar";

const AuthPage = () => {
    return (
        <>
            <AuthNavbar/>
            <AuthHeader/>
            <AuthMain/>
            <Footer/>
        </>
    );
}
 
export default AuthPage;