
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const ADMIN_EMAIL = "sgolan20@gmail.com";
const ADMIN_PASSWORD = "Golansha12#";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple email and password validation
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Successful login
      navigate("/blog/admin");
    } else {
      toast({
        title: "שגיאת התחברות",
        description: "אנא בדוק את פרטי ההתחברות שלך ונסה שוב",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            התחברות למערכת ניהול
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="כתובת אימייל"
                className="mb-4"
              />
            </div>
            <div>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="סיסמה"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={loading}
              className="relative w-full"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "התחבר"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

