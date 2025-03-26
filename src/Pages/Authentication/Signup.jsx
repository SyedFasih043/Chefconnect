import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/public/logo.png";
import { useNavigate } from "react-router-dom";
import { register } from "../../Service/httpServices";
import { useStateContext } from "../../contexts/contextprovider";
import { nav } from "framer-motion/client";

export default function Login() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const {user , setUser} = useStateContext();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (step === 1 && !values.username) errors.username = "Username is required";
      if (step === 2) {
        if (!values.email) errors.email = "Email is required";
        if (!values.password) errors.password = "Password is required";
        if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords must match";
      }
      setErrors(errors);
      return errors;
    },
    onSubmit: async (values) => {
      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }
      try{
        const response = await register(payload);
        if(response?.status === 201){
          setUser(JSON.stringify(response.data.user));
          navigate('/login')
        }
      }
      catch(error){
        console.log(error)

      }
      
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen w-full justify-center items-center bg-gray-100 p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-6xl h-auto md:h-5/6 bg-white shadow-lg rounded-2xl overflow-hidden"
      >
        <motion.div
          className="flex w-1/2 bg-stone-200 justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={img}
            alt="Logo"
            className="w-2/3 hidden lg:flex"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center w-full md:w-1/2 p-10 relative"
        >
          <div className="md:hidden flex justify-center mb-6">
            <img src={img} alt="Logo" className="w-30" />
          </div>

          <motion.div
            key={step} // Forces re-animation on step change
            initial={{ opacity: 0, x: step === 1 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: step === 1 ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 ? (
              <>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome To ChefConnect 👋</h1>
                <p className="text-gray-500 text-sm mb-6">Enter your username to continue</p>
                <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                  <label htmlFor="username" className="text-sm font-semibold text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder="Enter your username"
                    className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  {errors?.username && <span className="text-red-600 text-sm">{errors.username}</span>}
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (!errors?.username) {
                      setStep(2);
                    }
                  }}
                  type="button"
                  className="bg-purple-500 hover:bg-purple-600 text-white w-full py-3 rounded-lg font-bold transition-transform"
                >
                  Next
                </motion.button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Create Your Account</h1>
                <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your email"
                    className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  {errors?.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                </motion.div>
                 <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="At least 8 characters"
                  className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
                {errors?.password && <span className="text-red-600 text-sm">{errors.password}</span>}
              </motion.div>
              <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder="Confirm your password"
                  className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
                {errors?.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword}</span>}
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={formik.handleSubmit}
                type="button"
                className="bg-purple-500 hover:bg-purple-600 text-white w-full py-3 rounded-lg font-bold transition-transform"
              >
                Sign up
              </motion.button>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}