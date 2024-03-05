import AuthForm from "@/components/AuthForm";
import DottedDesign from "@/components/DottedDesign";

const LoginPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-gray-950 px-4">
      <div className="lg:p-16 p-8 bg-gray-900 grid lg:grid-cols-2 gap-20 max-w-[70rem] mx-auto rounded-2xl max-h-min">
        <DottedDesign />
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
