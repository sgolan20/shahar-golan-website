
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegistering) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "נרשמת בהצלחה",
          description: "אנא אמת את כתובת האימייל שלך",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/blog/admin");
      }
    } catch (error: any) {
      toast({
        title: isRegistering ? "שגיאת הרשמה" : "שגיאת התחברות",
        description: "אנא בדוק את הפרטים שלך ונסה שוב",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isRegistering ? "הרשמה למערכת" : "התחברות למערכת ניהול"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
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

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="relative w-full"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                isRegistering ? "הירשם" : "התחבר"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsRegistering(!isRegistering)}
              className="w-full"
            >
              {isRegistering ? "יש לך כבר חשבון? התחבר" : "אין לך חשבון? הירשם"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

