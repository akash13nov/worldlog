import { useEffect, useState } from "react";

import PageNav from "../../components/PageNav/PageNav";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/FakeAuthContext";
import styles from "./Login.module.css";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("test@1234");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function toggleSignUpForm() {
    setIsSignInForm((cur) => !cur);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    if (isSignInForm) {
      login(email, password);
    } else {
      register(name, email, password);
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        {!isSignInForm && (
          <div className={styles.row}>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">{isSignInForm ? "Sign In" : "Sign Up"}</Button>
        </div>
        <div>
          <p>
            {isSignInForm ? "New to WorldLog?" : "Already registered?"}{" "}
            <span onClick={toggleSignUpForm} className={styles.toggleLink}>
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </div>
      </form>
    </main>
  );
}
