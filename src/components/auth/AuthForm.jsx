// Hooks
import { use } from "react";

// Components
import LogIn from "./Login";

// Contexts
import { AuthCtx } from "../contexts/AuthCtx";

// Shadcn
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function AuthForm() {
  // -------------------- Contexts --------------------
  const { handleSignIn } = use(AuthCtx);

  // End of contexts

  // -------------------- Component structure --------------------
  return (
    <div className="w-full max-w-md p-4 sm:p-8 shadow-[0_0_8px_#0000003b] bg-white rounded-sm mb-[var(--mainMargin)]">
      {/* Title */}
      <div className="text-center mb-[var(--mainMargin)] font-bold text-[25px]">
        Sign in to your account
      </div>

      {/* Form */}
      <form action="" noValidate>
        {/* Login page */}
        <div>
          <LogIn />
        </div>

        {/* Remember me button & forget password */}
        <div className="flex justify-between items-center mb-3">
          {/* Remember me */}
          <div className="flex gap-1">
            <Checkbox
              onCheckedChange={(checked) =>
                localStorage.setItem("remember", checked)
              }
              style={{ color: "white" }}
              className="cursor-pointer data-[state=checked]:bg-[var(--mainColor)] data-[state=checked]:border-blue-500 border"
              id="terms"
            />
            <Label className="cursor-pointer" htmlFor="terms">
              Remember me
            </Label>
          </div>
        </div>

        {/* Submit button */}
        <button
          className="w-full bg-[var(--mainColor)] p-1 text-white rounded-sm hover:opacity-90 duration-300 cursor-pointer"
          type="submit"
          onClick={handleSignIn}
        >
          LogIn
        </button>
      </form>
    </div>
  );
}
