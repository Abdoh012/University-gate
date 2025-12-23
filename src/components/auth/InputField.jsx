// Shadcn
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputField({
  title,
  ref,
  type,
  handleShowPassword,
  show,
}) {
  
  // -------------------- Component structure --------------------
  return (
    // Input with its label
    <div className="mb-[var(--mainMargin)]">
      {/* Label */}
      <Label className="mb-3" htmlFor={title}>
        {title}
      </Label>

      {/* Input with icon*/}
      <div className="flex items-center relative">
        {/* Icon */}
        <span className="absolute left-3 text-sm text-neutral-400">
          {title === "Email" ? (
            <FontAwesomeIcon icon="fa-regular fa-envelope" />
          ) : title === "Password" ? (
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          ) : null}
        </span>

        {/* Show and hide password */}
        {title === "Password" && (
          <span
            className="absolute right-3 cursor-pointer text-neutral-400"
            onClick={handleShowPassword}
          >
            {/* If show password is true set icon open eyes if it is not set closed eyes */}
            {show ? (
              <FontAwesomeIcon icon="fa-regular fa-eye" />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
            )}
          </span>
        )}

        {/* Input */}
        <Input
          className="ps-8"
          required
          name={title.toLowerCase()}
          ref={ref}
          type={type === "password" ?  show ? "text" : "password" : "email"}
          placeholder={title === "Email" ? "a@example.com" : ""}
        />
      </div>
    </div>
  );
}
