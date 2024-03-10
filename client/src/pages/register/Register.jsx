import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Namebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Namebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" required className="loginInput" />
            <input placeholder="Password" required className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />

            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into account </button>
          </div>
        </div>
      </div>
    </div>
  );
}
