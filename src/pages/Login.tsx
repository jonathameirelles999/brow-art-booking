import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Calendar, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard (mock login)
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Site
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Bella Brows
            </span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? "Bem-vinda de volta!" : "Crie sua conta"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin 
              ? "Acesse sua área de agendamentos" 
              : "Cadastre-se para agendar seus horários"
            }
          </p>
        </div>

        {/* Login/Register Form */}
        <Card className="gradient-card border-border/50 shadow-premium">
          <CardHeader>
            <CardTitle className="text-center">
              {isLogin ? "Fazer Login" : "Criar Conta"}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                  <Input placeholder="Seu nome completo" required />
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium mb-2 block">E-mail</label>
                <Input type="email" placeholder="seu.email@exemplo.com" required />
              </div>

              {!isLogin && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefone</label>
                  <Input placeholder="(11) 9 9999-9999" required />
                </div>
              )}

              <div>
                <label className="text-sm font-medium mb-2 block">Senha</label>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha" 
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-0 h-full px-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Confirmar Senha</label>
                  <Input type="password" placeholder="Confirme sua senha" required />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <Button variant="link" className="text-sm text-primary p-0 h-auto">
                    Esqueci minha senha
                  </Button>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-premium"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {isLogin ? "Entrar na Minha Área" : "Criar Conta e Agendar"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                {isLogin ? "Ainda não tem conta?" : "Já tem uma conta?"}
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto ml-1"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Cadastre-se aqui" : "Fazer login"}
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Agendamento Online</div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card border-border/50">
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Histórico de Serviços</div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
};