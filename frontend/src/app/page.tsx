import LoginForm from "./ui/LoginForm";
import UserInfo from "./ui/UserInfo";

export default function Home() {
  return (
    <div>
      <UserInfo />
      <h1 className="text-3xl font-bold underline">Auth Test</h1>
      <LoginForm />
    </div>
  );
}
