import AuthForm from "@/components/AuthForm";
import DottedDesign from "@/components/DottedDesign";

const LoginPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-gray-950 px-4 overflow-hidden">
      <div className="lg:p-16 p-8 bg-gray-900 grid lg:grid-cols-2 gap-16 mx-auto rounded-2xl">
        <DottedDesign />
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
