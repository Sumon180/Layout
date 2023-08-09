import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../assets/images/google-logo.png";
import github from "../../assets/images/GitHub.png";
import logo from "../../assets/images/app-logo.svg";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const route = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || password === "") {
      route("/");
      toast("Requerd of fields", {
        position: "top-center",
        autoClose: 1500,
      });
    } else {
      route("/home");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full  max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <img className="mx-auto h-16 w-16" src={logo} alt="logo" />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome Back
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign in to continue
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            <form onSubmit={handleSubmit}>
              <label className="block">
                <span>Username:</span>
                <span className="relative mt-1.5 flex">
                  <input
                    className="form-input pl-10 peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Enter Username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleEmailChange}
                  />
                  <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </span>
              </label>
              <label className="mt-4 block">
                <span>Password:</span>
                <span className="relative mt-1.5 flex">
                  <input
                    className="form-input pl-10 peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Enter Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                </span>
              </label>
              <div className="mt-4 flex items-center justify-between space-x-2 space-x-reverse">
                <label className="inline-flex items-center space-x-2 space-x-reverse">
                  <input
                    className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                    type="checkbox"
                  />
                  <span className="line-clamp-1 pl-3">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="btn py-2 mt-5 w-full bg-pink-500 font-medium text-white hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-600/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 flex items-center justify-between text-xs+">
              <p className="line-clamp-1">
                <span>Dont have Account?</span>
              </p>
              <a
                className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                href="pages-singup-1.html"
              >
                Create account
              </a>
            </div>
            <div className="my-7 flex items-center space-x-3 space-x-reverse">
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
              <p>OR</p>
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <button className="flex items-center justify-between w-full space-x-3 space-x-reverse border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <img className="h-10 w-10" src={google} alt="logo" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-between w-full space-x-3 space-x-reverse border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <img className="h-10 w-10" src={github} alt="logo" />
                <span>Github</span>
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
            <a href="#">Privacy Notice</a>
            <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
            <a href="#">Term of service</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;
