import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// Initial Form Values
const studentData = {
  name: "",
  email: "",
  profession: "",
  gender: "",
  password: "",
  termsCondition: false,
};

// Yup Schema
const schemaValidation = Yup.object({
  name: Yup.string()
    .min(5, "• Name must be at least 5 characters!")
    .required("• Name is required!"),

  email: Yup.string()
    .email("• Invalid email format!")
    .required("• Email is required!"),

  profession: Yup.string()
    .oneOf(
      ["Freshman", "Sophomore", "Junior", "Senior"],
      "• Invalid profession!"
    )
    .required("• Profession is required!"),

  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "• Select a valid gender!")
    .required("• Gender is required!"),

  password: Yup.string()
    .required("'• Password is required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]{8,}$/,
      "• Must contain 8+ characters, 1 uppercase, 1 lowercase, 1 number & 1 special character!"
    ),

  termsCondition: Yup.boolean()
    .oneOf([true], "• You must accept the terms and conditions!")
    .required("• Terms & Condition must be accepted!"),
});

function StudentForm() {
  const [eye, setEye] = useState(false);

  const formikObj = useFormik({
    initialValues: studentData,
    validationSchema: schemaValidation,
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
      formikObj.resetForm();
    },
  });

  return (
    <section className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <section className="bg-white p-5 rounded-md shadow-md">
        <p className="text-2xl uppercase font-medium text-center mb-4">
          Student Details
        </p>

        <form
          onSubmit={formikObj.handleSubmit}
          className="w-70 sm:w-100  flex flex-col gap-5"
        >
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formikObj.values.name}
              placeholder="Full Name"
              onChange={formikObj.handleChange}
              onBlur={formikObj.handleBlur}
              className="border-b p-2 w-full outline-0"
            />
            {formikObj.touched.name && formikObj.errors.name && (
              <p className="text-red-500 text-sm">{formikObj.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formikObj.values.email}
              placeholder="E-mail Address"
              onChange={formikObj.handleChange}
              onBlur={formikObj.handleBlur}
              className="border-b p-2 w-full outline-0"
            />
            {formikObj.touched.email && formikObj.errors.email && (
              <p className="text-red-500 text-sm">{formikObj.errors.email}</p>
            )}
          </div>

          {/* Profession */}
          <div className="relative inline-block w-full">
            <select
              name="profession"
              value={formikObj.values.profession}
              onChange={formikObj.handleChange}
              onBlur={formikObj.handleBlur}
              className="w-full appearance-none bg-gray-100 text-gray-700 p-2 rounded-md border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
            >
              <option value="">Select Your Profession</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
            {formikObj.touched.profession && formikObj.errors.profession && (
              <p className="text-red-500 text-sm">
                {formikObj.errors.profession}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="text-gray-500 font-medium">Select Gender</label>
            <div className="flex gap-6 mt-1">
              {["Male", "Female", "Other"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formikObj.values.gender === g}
                    onChange={formikObj.handleChange}
                    onBlur={formikObj.handleBlur}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
            {formikObj.touched.gender && formikObj.errors.gender && (
              <p className="text-red-500 text-sm">{formikObj.errors.gender}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative border-b">
            <input
              type={eye ? "text" : "password"}
              name="password"
              value={formikObj.values.password}
              onChange={formikObj.handleChange}
              onBlur={formikObj.handleBlur}
              placeholder="Password"
              autoComplete="current-password"
              className="p-2 w-full outline-0"
            />

            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setEye(!eye)}
            >
              {eye ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              )}
            </div>
          </div>
          {formikObj.touched.password && formikObj.errors.password && (
            <p className="text-red-500 text-sm">{formikObj.errors.password}</p>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-blue-600">
              <input
                type="checkbox"
                name="termsCondition"
                checked={formikObj.values.termsCondition}
                onChange={formikObj.handleChange}
                onBlur={formikObj.handleBlur}
                className="w-4 h-4 cursor-pointer accent-blue-600 bg-gray-100"
              />
              <span className="underline">Terms & Conditions</span>
            </label>
          </div>
          {formikObj.touched.termsCondition &&
            formikObj.errors.termsCondition && (
              <p className="text-red-500 text-sm">
                {formikObj.errors.termsCondition}
              </p>
            )}

          {/* Submit Button */}
          <button
            type="submit"
            className="p-3 bg-blue-500 shadow-md rounded-md text-xl font-medium uppercase text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}

export default StudentForm;
