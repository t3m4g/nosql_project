import { AuthForm } from "../components/auth/AuthForm";

const Login = () => {
  return (
    <>
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Connexion</h1>
        <AuthForm mode="login" />
      </div>
    </>
  );
};

export default Login;