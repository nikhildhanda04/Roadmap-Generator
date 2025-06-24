import FloatingElement from "../../components/floatingElements"

const SignUp = () => {
  return (
    <div>
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
        <form className="flex flex-col gap-4">
            <input
            type="username"
            placeholder="Username"
            className="p-2 border-gray-300 text-center border-2 border-r-3 border-b-3 rounded active:border-b-2 active:border-r-2 focus:outline-none focus:ring-0 focus:ring-cyan-100"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-gray-300 text-center border-2 border-r-3 border-b-3 rounded active:border-b-2 active:border-r-2 focus:outline-none focus:ring-0 focus:ring-cyan-100"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2  border-gray-300 border-2 text-center border-r-3 border-b-3 rounded active:border-b-2 active:border-r-2 focus:outline-none focus:ring-0 focus:ring-cyan-100"
            required
          />
          <button
            type="submit"
            className="bg-cyan-700 text-white p-2 rounded hover:bg- transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp
