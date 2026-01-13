import HomeLayouts from "../Layouts/HomeLayouts";
import { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';
import {createAccount } from '../Redux/Slices/AuthSlice'

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState("");
    const [signupData, setSignupData] = useState({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    });

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    const handleImageChange = (e) => {
       e.preventDefault();
       const uploadedImage = e.target.files[0];
       if(uploadedImage){
        setSignupData({
            ...signupData,
            avatar: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", () => {
            setPreviewImage(fileReader.result);

        })
       }
         
    };

    // Temporary test to verify Toaster is mounted; remove after debugging
    useEffect(() => {
        toast.success("Toast test — Toaster mounted");
    }, []);

   async function CreateNewAccount(e){
        console.log("CreateNewAccount called", signupData);
        e.preventDefault();
        if(!signupData.fullName || !signupData.email || !signupData.password || !signupData.avatar){
           toast.error("Please fill all the fields");
            return;
        }
        //checking Name length validation
        if(signupData.fullName.length < 4){
            toast.error("Name must be at least 5 characters long");
            return;
        }
        //checking valid Email
        if(!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            toast.error("Invalid EmailAddress!");
            return;
        }
        //checking password validation
        if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
            toast.error("Password must contains 6 - 16 chracters and atleast 1 Number and a special character");
             return;
        }

        const formData = new FormData();
        formData.append("fullName",signupData.fullName);
        formData.append("email",signupData.email);
        formData.append("password",signupData.password);
        formData.append("avatar",signupData.avatar);

        //dispatch create Account Action

        const response = await dispatch(createAccount(formData));
        if(response?.payload?.success){
            navigate('/');
        }

       
        setSignupData({
        fullName:"",
        email:"",
        password:"",
        avatar:""

        })
        setPreviewImage("");

    }
    return (
     <HomeLayouts>
       <div className = "flex flex-col items-center justify-center h-[90vh]">
            <form noValidate onSubmit={CreateNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-6 bg-white text-black w-96 shadow-[0_0_10px_black]">
            <h1 className=" text-center text-2xl font-bold">Registration Page</h1>

            <label htmlFor="image_uploads" className="cursor-pointer" >
                {previewImage ? (
                    <img className="w-24 h-24 rounded-full m-auto" src={previewImage} alt="Preview" />
                ) : (
                    <BsPersonCircle className="w-24 h-24 rounded-full m-auto text-gray-400" />
                )}
            </label>
            <input
                className="hidden"
                type="file"
                id="image_uploads"
                name="image_uploads"
                accept=".jpg, .jpeg, .png,.svg"
                onChange={handleImageChange}
            />

            <label htmlFor="fullName" className="font-semibold">Name</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your fullName..."
                className="bg-transparent px-2 py-1 border"
                required
                onChange={handleUserInput}
                value={signupData.fullName}
            />

            <label htmlFor="email" className="font-semibold">Email</label>
            <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="Enter your email..."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={signupData.email}
            />

            <label htmlFor="password" className="font-semibold">Password</label>
            <input
                type="password"
                required
                id="password"
                name="password"
                placeholder="Enter your password..."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={signupData.password}
            />

            <button type="submit" className=" mt-4 bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300  text-white  text-lg  font-semibold py-2  rounded-sm cursor-pointer">
            Create Account</button>
            <p className="text-center mt-2 ">
                Already have an Account ? <Link to="/login" className="text-yellow-500 hover:underline cursor-pointer text-accent">
                Login</Link>
            </p>

            </form>
       </div>
     </HomeLayouts>

    );
 
} 
export default Signup;