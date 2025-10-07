import React, { useState } from 'react'
import assets from '../../assets/assets'

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (currState === "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true) // move to step 2
      return
    }

    // ✅ Final submit (API call can be added here)
    console.log({
      fullName,
      email,
      password,
      bio,
    })
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* Left */}
      <img
        src={assets.logo_big}
        className="w-[min(30vw,250px)]"
        alt="logo"
      />

      {/* Right */}
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 
        rounded-lg shadow-lg w-[400px] sm:w-[350px]"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && currState === "Sign Up" && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              className="w-5 cursor-pointer"
              alt="back"
            />
          )}
        </h2>

        {/* ==================== SIGN UP STEP 1 ==================== */}
        {currState === "Sign Up" && !isDataSubmitted && (
          <>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Full Name"
              required
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
            >
              Next
            </button>

            {/* ✅ Terms below button */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" required />
              <p>
                Agree to the{" "}
                <span className="text-violet-400 cursor-pointer">terms of use</span> &{" "}
                <span className="text-violet-400 cursor-pointer">privacy policy</span>
              </p>
            </div>
          </>
        )}

        {/* ==================== SIGN UP STEP 2 (BIO) ==================== */}
        {currState === "Sign Up" && isDataSubmitted && (
          <>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={4}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Please Provide Bio"
              required
            ></textarea>

            <button
              type="submit"
              className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
            >
              Create Account
            </button>

            {/* ✅ Terms below button */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" required />
              <p>
                Agree to the{" "}
                <span className="text-violet-400 cursor-pointer">terms of use</span> &{" "}
                <span className="text-violet-400 cursor-pointer">privacy policy</span>
              </p>
            </div>
          </>
        )}

        {/* ==================== LOGIN ==================== */}
        {currState === "Login" && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
            >
              Login Now
            </button>

            {/* ✅ Terms below button */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" required />
              <p>
                Agree to the{" "}
                <span className="text-violet-400 cursor-pointer">terms of use</span> &{" "}
                <span className="text-violet-400 cursor-pointer">privacy policy</span>
              </p>
            </div>
          </>
        )}

        {/* ==================== TOGGLE LINKS (always visible) ==================== */}
        <div className="flex flex-col gap-2 mt-2">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrState("Login")
                  setIsDataSubmitted(false)
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrState("Sign Up")
                  setIsDataSubmitted(false)
                }}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
