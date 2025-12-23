import { use, useState } from "react";
import { AuthCtx } from "../contexts/AuthCtx";
import { inputsData } from "@/util/Inputs";
import InputField from "./InputField";

export default function LogIn() {
  // -------------------- Contexts --------------------
  const { LogInEmail, LogInPassword } = use(AuthCtx);
  // End of contexts

  // -------------------- States --------------------
  const [showPassword, setShowPassword] = useState(false);
  // End of states

  // -------------------- Functions --------------------
  function handleEyeClick() {
    setShowPassword((prev) => !prev);
  }
  // End of functions

  // -------------------- Component structure --------------------
  return (
    // Email and password
    <>
      {inputsData.map((input) => (
        <InputField
          key={input.id}
          ref={input.type === "email" ? LogInEmail : LogInPassword}
          type={input.type}
          title={input.title}
          handleShowPassword={handleEyeClick}
          show={showPassword}
        />
      ))}
    </>
  );
}
