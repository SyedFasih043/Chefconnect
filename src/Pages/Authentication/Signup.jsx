import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/public/logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      setErrors(errors);
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      navigate('/')
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
        {/* LEFT SIDE (Form) */}

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
            <img src={img} alt="Logo"  className="w-30" />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome To ChefConnect 👋</h1>
          <p className="text-gray-500 text-sm mb-6">Sign up to continue</p>

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

          {/* Password Input */}
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => formik.handleSubmit()}
            type="button"
            className="bg-purple-500 hover:bg-purple-600 text-white w-full py-3 rounded-lg font-bold mb-4 transition-transform"
          >
            Sign up
          </motion.button>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t"></div>
            <p className="px-2 text-gray-400 text-sm">Or log in with</p>
            <div className="flex-1 border-t"></div>
          </div>

          <div className="text-center mt-4 text-sm">
            Already Registered? <span className="text-purple-600 cursor-pointer" onClick={() => navigate('/login')} >Log In </span>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
