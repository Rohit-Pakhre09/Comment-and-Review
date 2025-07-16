import { useState } from "react";

// Student Data Object
const studentData = {
  name: "",
  email: "",
  profession: "",
  gender: "",
  password: "",
  termsCondition: false,
};

function StudentForm() {
  const [input, setInput] = useState(studentData);
  const { name, email, profession, gender, password, termsCondition } = input;
  const [eye, setEye] = useState(false);

  // Handle Input Change
  const settingData = (e) => {
    const { name, value, type, checked } = e.target;
    setInput({
      ...input,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Form Submission
  const submitForm = (e) => {
    e.preventDefault();
    console.log(input);
    setInput(studentData);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <p className="text-2xl uppercase font-medium text-center">
        Student Details
      </p>

      <form
        className="h-auto w-90 sm:w-100 p-5 flex flex-col gap-5"
        onSubmit={submitForm}
      >
        {/* Full Name */}
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Full Name"
          onChange={settingData}
          className="border-b p-2 w-full outline-0"
        />

        {/* Email Address */}
        <input
          type="email"
          value={email}
          name="email"
          placeholder="E-mail Address"
          onChange={settingData}
          className="border-b p-2 w-full outline-0"
        />

        {/* Select Profession */}
        <div className="relative inline-block w-full">
          <select
            name="profession"
            value={profession}
            onChange={settingData}
            className="w-full appearance-none bg-gray-100 text-gray-700 p-2 rounded-md border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <option value="">Select Your Profession</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="p-1 flex flex-col gap-2">
          <label className="text-gray-500 font-medium">Select Gender</label>
          <div className="flex gap-6">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={settingData}
                  className={`w-4 h-4 accent-${
                    g === "Female" ? "pink" : g === "Other" ? "gray" : "blue"
                  }-600`}
                />
                <span className="text-gray-700">{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Password */}
        <div className="relative border-b">
          <input
            type={eye ? "text" : "password"}
            name="password"
            value={password}
            onChange={settingData}
            placeholder="Password"
            autoComplete="current-password"
            className="p-2 w-full outline-0"
          />
          <div
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            {!eye ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-blue-600">
            <input
              type="checkbox"
              name="termsCondition"
              checked={termsCondition}
              onChange={settingData}
              className="w-4 h-4 cursor-pointer accent-blue-600 bg-gray-100"
            />
            <span className="underline">Terms & Conditions</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex justify-center items-center p-3 bg-blue-500 shadow-md cursor-pointer rounded-md font-medium uppercase text-xl text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
