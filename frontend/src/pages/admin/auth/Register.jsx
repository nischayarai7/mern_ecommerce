// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import TextField from "../../../components/TextField";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     userName: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Cookie save garne method
//   useEffect(() => {
//     const handleSaveCookie = async () => {
//       try {
//         await axios.get("http://localhost:3000/test", {
//           withCredentials: true,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     handleSaveCookie();
//   }, []);

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.userName.trim()) newErrors.userName = "Username is required";

//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!isValidEmail(formData.email))
//       newErrors.email = "Invalid email format";

//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     else if (!/^\d{10}$/.test(formData.phone))
//       newErrors.phone = "Phone must be 10 digits";

//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     if (!formData.confirmPassword)
//       newErrors.confirmPassword = "Confirm your password";
//     else if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/auth/register",
//         formData,
//         { withCredentials: true }
//       );
//       console.log("Success:", response.data);
//       // Optional: clear form or redirect
//       setFormData({
//         email: "",
//         password: "",
//         confirmPassword: "",
//         userName: "",
//         phone: "",
//       });
//       alert("Registration successful!");
//     } catch (error) {
//       console.error("Error registering user:", error);
//       alert(error.response?.data?.message || "Registration failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 font-poppins">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Create Account
//         </h2>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <TextField
//             label="User Name"
//             id="userName"
//             name="userName"
//             placeholder="John Doe"
//             value={formData.userName}
//             onChange={handleChange}
//           />
//           {errors.userName && (
//             <span className="text-sm text-red-500">{errors.userName}</span>
//           )}

//           <TextField
//             label="Email"
//             id="email"
//             name="email"
//             placeholder="example@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && (
//             <span className="text-sm text-red-500">{errors.email}</span>
//           )}

//           <TextField
//             label="Phone"
//             id="phone"
//             name="phone"
//             placeholder="98xxxxxxxx"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {errors.phone && (
//             <span className="text-sm text-red-500">{errors.phone}</span>
//           )}

//           <TextField
//             type="password"
//             label="Password"
//             id="password"
//             name="password"
//             placeholder="********"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && (
//             <span className="text-sm text-red-500">{errors.password}</span>
//           )}

//           <TextField
//             type="password"
//             label="Confirm Password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="********"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && (
//             <span className="text-sm text-red-500">
//               {errors.confirmPassword}
//             </span>
//           )}

//           <button
//             type="submit"
//             className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
//             disabled={loading}
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-blue-600 underline hover:text-blue-800"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
