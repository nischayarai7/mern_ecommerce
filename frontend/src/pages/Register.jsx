import React, { useState } from "react";
import TextField from "../components/TextField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <div>Register</div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-2 p-4"
      >
        {/* UserName */}
        <TextField
          label={"UserName"}
          id="UserName"
          placeholder="Jhon Doe"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* Email */}
        <TextField
          label={"Email"}
          id="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Phone */}
        <TextField
          label={"Phone"}
          id="Phone"
          placeholder="98xxxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        {/* confirmPassword */}
        <TextField
          type="confirmPassword"
          label={"confirmPassword"}
          id={"ConfirmPassword"}
          placeholder=""
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Register;
