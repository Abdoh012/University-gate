// Components
import AuthForm from "@/components/auth/AuthForm";
import Footer from "@/components/auth/Footer";
import Header from "@/components/auth/Header";

export default function Auth() {
  // -------------------- Component structure --------------------
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="min-h-screen flex flex-col justify-center items-center px-4 mb-5">
        {/* Header */}
        <Header />

        {/* Auth form */}
        <AuthForm />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
