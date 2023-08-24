import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState, useEffect } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import axios from "axios";
import { signInWithEmailValidationSchema } from "../../helpers/validators";
import { Layout } from "../../landingPageComponents";
// import toast from "react-hot-toast";
// import { useAuth } from "../../helpers/auth/AuthContext";
import { Helmet } from "react-helmet";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { user, setUser } = useAuth();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/dashboard");
  //   }
  // }, []);

  return (
    <Layout>
      <main className="flex h-[calc(100vh-200px)] items-center justify-between">
        <Helmet>
          <title>Welcome - Mak Fleet</title>
        </Helmet>
        <section className="bg-white w-full h-full flex flex-col justify-center items-center bg-[url('src/assets/hero-image2.jpg')] bg-cover bg-right bg-no-repeat"></section>
        <section className="bg-white w-full h-full flex flex-col px-5 items-center justify-center border-l-[1px] border-neutral-200">
          <Formik
            initialValues={{
              username_email: "",
              password: "",
            }}
            enableReinitialize
            validationSchema={signInWithEmailValidationSchema}
            onSubmit={async (values) => {
              setLoading(true);
              await axios
                .post(
                  "http://hmsbarinago-001-site10.dtempurl.com/api/Authentication/login",
                  {
                    username_email: values.username_email,
                    password: values.password,
                  }
                )
                .then(function (response) {
                  if (response.data.code === "OK") {
                    // toast.success("Successfully logged in.", {
                    //   position: "bottom-center",
                    // });
                    setUser(response.data.data);
                    sessionStorage.setItem(
                      "user",
                      JSON.stringify(response.data.data)
                    );
                    navigate("/dashboard");
                  } else {
                    // toast.error(`${response.data.message}`, {
                    //   position: "bottom-center",
                    // });
                  }

                  setLoading(false);
                })
                .catch(function (error) {
                  // toast.error(`${error}`, { position: "bottom-center" });
                  setLoading(false);
                });
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form className="w-80 md:w-96 flex flex-col gap-4">
                <div className="mb-4 flex flex-col justify-center items-center">
                  <p className="italic font-extra-light">Welcome</p>
                  <h2 className="font-extrabold text-[#333333] text-xl mb-1">
                    LandWoke
                  </h2>
                </div>

                <div className="flex flex-col gap-1 group">
                  <label htmlFor="username_email" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="username_email"
                    placeholder="Enter your email"
                    onChange={handleChange("username_email")}
                    onBlur={handleBlur("username_email")}
                    className="border-[1.5px] border-[#CCCCCC] placeholder-neutral-500 focus:ring-0 focus:outline-none w-full px-3 py-2 rounded-sm bg-[#EFF5F180]"
                    value={values.username_email}
                  />
                  <ErrorMessage name="username_email">
                    {(msg) => (
                      <div className="text-xs text-red-500 text-left w-full">
                        <p>{msg}</p>
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="flex flex-col gap-1 group relative">
                  <label htmlFor="email" className="">
                    Password
                  </label>
                  <div className="border-[1px] border-[#CCCCCC] placeholder-neutral-500 focus:ring-0 focus:outline-none w-full rounded-sm bg-[#EFF5F180] flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      className=" placeholder-neutral-500 focus:ring-0 focus:outline-none w-full px-3 py-2 rounded-sm bg-[#EFF5F180] border"
                      value={values.password}
                    />
                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </span>
                  </div>

                  <ErrorMessage name="password">
                    {(msg) => (
                      <div className="text-xs text-red-500 text-left w-full">
                        <p>{msg}</p>
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <button
                  type="submit"
                  className="bg-[#449D44] text-white py-2 px-4 my-2 rounded-sm font-medium w-full cursor-pointer flex items-center justify-between hover:bg-[#5BBF61]"
                >
                  <span>{loading ? "Signing in..." : "Sign in"}</span>
                  <BiSolidChevronRight />
                </button>

                <Link
                  className={`w-full flex justify-end font-medium hover:underline`}
                  type="button"
                  to="/reset-password"
                >
                  Forgot your password? Click here
                </Link>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </Layout>

  );
}

export default Login;
