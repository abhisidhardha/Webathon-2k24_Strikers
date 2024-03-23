import { useForm } from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";
import { hashSync } from "bcryptjs";
function Register(){
    let {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate()
    function onRegisterFormSubmit(newUser){
        let hashedPassword = hashSync(newUser.password,5)
        newUser.password=hashedPassword ;
    }
    return(
        <div>
            <div className="h-50 d-flexjustify-content-center align-items-center">
            <form className="w-50 rounded-3 mx-auto" onSubmit={handleSubmit(onRegisterFormSubmit)}>
                <h1 className="text-center display-1">Register</h1>
                <div className="row w-100"> 
                {/* Name */}
                    <div className="col">
                    <input className="form-control m-3" type="text" id="f" placeholder="User Name" {...register("username",{required:true,minLength:4,maxLength:6})}/>
                    {errors.username?.type==='required' && <p className="text-danger p-2">*Username is required</p>}
                    {errors.username?.type==='minLength' && <p className="text-danger p-2">*Minimum Length is 4</p>}
                    {errors.username?.type==='maxLength' && <p className="text-danger p-2">*Maximum Length is 6</p>}
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col">
                        {/* Email */}
                        <input className="form-control m-3" type="email" placeholder="Email" id="e" {...register("email",{required:true})} />
                        {errors.email?.type==='required' && <p className="text-danger p-2">*Email is required</p>}
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col">
                        <input className="form-control row w-100 m-3 mb-4 " type="password" placeholder="Password" id="u"{...register("password",{required:true})}/>
                        {errors.password?.type==='required' && <p className="text-danger text-center">Password is required</p>}
                    </div>
                </div>
                <input type="submit" className="btn btn-success d-block mx-auto" value="Submit" />
            </form>
            <p className="text-center">
                Already Registered ! <Link to='/login' className="text-info">Login
                </Link>
            </p>
            </div>   
        </div>
    );
}
export default Register ;