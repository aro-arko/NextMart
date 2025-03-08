import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <h1>Welcome to NextMart Home Page</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default HomePage;
