import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from "react-toastify";
import instance from "../../api/axios"
import FloatingElement from "../../components/floatingElements"

const SignUp = () => {

  const [form, setForm] = useState({username: "", email: "", password: ""});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  try {
    const response = await instance.post("/api/user/register", form);
    setSuccess(response.data.message);
    setForm({ username: "", email: "", password: "" });
    toast.success("Account created successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", 
      onClose: () => navigate("/login")
    });
        
  } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred");
        toast.error(err.response?.data?.message || "An error occurred", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colored",
        });
      } else {
        setError("An error occurred");
        toast.error("An error occurred", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colored",
        });
      }
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className=" flex flex-col min-h-screen items-center justify-center">
      
      <FloatingElement
        src="/Alert.svg"
        title="Bulb"
        rotation={20}
        width={200}
        height={200}
        className="right-80 top-15 opacity-60 absolute"
      />

      <FloatingElement
        src="/Sparkle.svg"
        title="Bulb"
        rotation={-20}
        width={200}
        height={200}
        className="left-80 top-120 opacity-60 absolute"
      />

      <div className="bg-[#fbfbe7] flex items-center justify-center flex-col p-8 py-20 rounded-xl border-2 border-r-4 border-b-4 border-neutral-800 shadow-xl w-full max-w-md relative overflow-hidden">
        
        <div className="absolute left-0 top-0 w-full h-8 bg-white rounded-t-xl flex items-center px-4 z-10 border-b border-neutral-200">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-neutral-300"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-neutral-300"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 border border-neutral-300"></span>
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-6 mt-6 tracking-tight text-center">
          Create Account
        </h1>
        <form className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        >
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="p-2 border-gray-300 text-center border-2 border-r-3 border-b-3 rounded active:border-b-2 active:border-r-2 focus:outline-none focus:ring-0 focus:ring-cyan-100"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-2 border-gray-300 text-center border-2 border-r-3 border-b-3 rounded active:border-b-2 active:border-r-2 focus:outline-none focus:ring-0 focus:ring-cyan-100"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-2  border-gray-300 border-2 text-center border-r-3 border-b-3 rounded active:border-b-2 active:border-r-2 focus:outline-none focus:ring-0 focus:ring-cyan-100"
            required
          />
          <button
            type="submit"
            className="bg-cyan-700 text-white p-2 rounded hover:bg- transition duration-200"
          >
            Sign Up
          </button>
          {error && <div className="text-red-500 text-center">{error}</div>}
          {success && <div className="text-green-500 text-center">{success}</div>}
          <div>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-cyan-700 hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp
