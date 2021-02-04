import Header from "../../components/Header"
import Footer from "../../components/Footer"
import EmailPassword from "../../components/EmailPassword"


function LoginPage(){
    return(
            <div style = {
                {
                    width:"50%",
                    margin:"auto"
                }
            }>

            <h3>Customer Login</h3>
            <EmailPassword/>
            </div>
       
    )
};


export default LoginPage