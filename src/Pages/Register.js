import React, { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from './../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loading from '../Components/Shared/Loading';

const Register = () => {
    const [loading,setLoading] = useState(false);
    const {user,providerLogin,createUser,updateUser} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const { register, formState: { errors }, handleSubmit } = useForm();

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    // const [updateProfile, updating, uError] = useUpdateProfile(auth);

    // const [token] = useToken(user||gUser);
    // console.log(user||gUser);

    let signInError;
    const navigate = useNavigate();

    // if(error || gError || uError){
    //     signInError= <p className='text-red-500'><small>{error?.message || gError?.message || uError.message }</small></p>
    // }
    // if(token){
    //     navigate('/');
    // }
    if(user){
        navigate('/');
    }   
    const onSubmit =data => {
        setLoading(true);
        createUser(data.email, data.password)
        .then(result => {
            updateUser({ displayName: data.name ,photoURL:data.image})
            .then(()=>toast.success("registration successfull"))
            .then(()=>setLoading(false))
            .catch(error=>{
                toast.error(error.message)
                console.log(error.message)
            })
        })
        .catch(error=>toast.error(error.message))
        updateUser({ displayName: data.name ,photoURL:data.image})
        .then(()=>toast.success("registration successfull"))
        .then(()=>setLoading(false))
        .catch(error=>{
            toast.error(error.message)
            console.log(error.message)
        })
          
    }
    if(loading){
        return <div>Loading....</div>
    }


    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .then(error =>toast.error(error.message))
    }

    const handleGitHubSignIn=()=>{
        providerLogin(githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .then(error =>toast.error(error.message))
    }
    
    return (
        <div className='hero min-h-screen bg-base-200 py-20'> 
        <div className="hero-content">


        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs focus:outline-none"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs focus:outline-none"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* Photo upload */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo Url"
                                className="input input-bordered w-full max-w-xs focus:outline-none"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Photo Url is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs focus:outline-none"
                                placeholder='Photo Url'
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'photoUrl is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label> */}
                        {/* </div> */}
                        {signInError}
                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Register" />
                    </form>
                     <Link to="/login"><p className='btn-animate text-center text-sm font-semibold text-gray-600 cursor-pointer'>Already Regisred? <span className='text-primary'>Please Login</span></p></Link>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline btn-primary"
                    >Continue with Google</button>
                    <button
                        onClick={handleGitHubSignIn}
                        className="btn btn-outline btn-primary"
                    >Continue with GitHub</button>
                </div>
            </div>
        </div >
    </div>
</div >
    );
};

export default Register;