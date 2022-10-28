import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../Components/Shared/Loading";
import { useContext } from "react";
import { AuthContext } from "./../Context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const { providerLogin,signin ,user} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate('/');
  }  
  const onSubmit = (data) => {
    signin(data.email, data.password);
    if(user){
        navigate('/');
    }
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => toast.error(error));
  };

  const handleGitHubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => toast.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <div className="hero-content">
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-primary text-2xl font-bold">
                Login
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered border-prima w-full max-w-xs focus:outline-none"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs focus:outline-none"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn w-full max-w-xs text-white btn-primary"
                  type="submit"
                  value="Login"
                />
              </form>
              <Link to="/register">
                <p className="btn-animate text-center text-sm font-semibold text-gray-600 cursor-pointer">
                  New to E-School?{" "}
                  <span className="text-primary">Create New account</span>
                </p>
              </Link>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-primary"
              >
                Continue with Google
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="btn btn-outline btn-primary"
              >
                Continue with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
