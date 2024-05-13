import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const LoginSystem = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async () => {
    await login(parseInt(username), password);
  };

  return (
    <div className="login-container">
      <div className="wrap-login100">
        <img
          width="50%"
          height="50%"
          src="https://img1.wsimg.com/isteam/ip/466bccb3-1ee6-41a0-922c-4fd12c66e409/logo/c55259e2-5792-46c8-a696-3c434cd95873.png/:/rs=h:199,cg:true,m/qt=q:95"
        ></img>
        <input
          className="input100"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input100"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login100-form-btn button-13" onClick={handleLogin}>
          Login
        </button>

        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="footer">
        <p>© All rights reserve St. Clare™ 2023-2024</p>
      </div>
    </div>
  );
};

export default LoginSystem;
