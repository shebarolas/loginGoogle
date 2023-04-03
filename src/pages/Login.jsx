import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Github from '../images/github.png';
export default function Login() {

    const google = () => {
        window.open("http://localhost:9000/auth/google", "_self");
    }
    const facebook = () => {
        window.open("http://localhost:9000/auth/facebook", "_self");
    }


  return (
    <>
    <div className="login">
        <div className="textInitial">
                <h1>Iniciar Sesion</h1>
            </div>
        <div className="options">
            <div className="left">
                <div className="facebookBtn" onClick={facebook}>
                    <img src={Facebook} alt="" className='imgBtn'/>
                    Facebook
                </div>
                <div className="googleBtn" onClick={google}>
                    <img src={Google} alt="" className='imgBtn'/>
                    Google
                </div>
                <div className="githubBtn">
                    <img src={Github} alt="" className='imgBtn'/>
                    Github
                </div>
            </div>
            <div className="or">
                <h1 className="textOr">OR</h1>
            </div>
            <div className="right">
                <input type="text" placeholder="UserName" className="text" />
                <input type="text" placeholder="Password" className="text" />
                <button className='btnLogin'>Login</button>
            </div>
        </div>

    </div>
    </>
  )
}
