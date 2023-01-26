import { useState } from "react";
import { useSignup } from "../hooks/useSingup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };
  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
export default Signup;
