import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email,password)
  };
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center ">
        <div>Login</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4"
          >
            {/* Email */}

            <TextField
              label={"Email"}
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <TextField
              type="password"
              label={"Password"}
              id={"password"}
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* Internal Font halako react la nai daako */
}
{
  /* <p style={{fontFamily:"italic",fontWeight:"bold"}}>HEllo World</p>
    <p style={{fontFamily:"sans-serif"}}>HEllo</p> */
}

{
  /* External font halako google font batw */
}
{
  /* <p className="Font1">Hello World</p>
 <p className="Font2">Hello</p> */
}
