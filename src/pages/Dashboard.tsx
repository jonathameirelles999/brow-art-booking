import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Star, LogOut, Plus, Edit, Trash2, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockAppointments = [
  {
    id: 1,
    service: "Design de Sobrancelhas",
    date: "2024-01-15",
    time: "14:00",
    status: "confirmado",
    price: "R$ 80"
  },
  {
    id: 2,
    service: "Henna Premium",
    date: "2024-01-20",
    time: "10:30",
    status: "pendente",
    price: "R$ 120"
  }
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("appointments");

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Bella Brows
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right hidden md:block">
              <div className="font-medium">Olá, Maria!</div>
              <div className="text-sm text-muted-foreground">Bem-vinda de volta</div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Sua Área de <span className="gradient-primary bg-clip-text text-transparent">Agendamentos</span>
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus horários e acompanhe seu histórico de serviços.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="text-muted-foreground">Próximos Agendamentos</div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card border-border/50">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">8</div>
              <div className="text-muted-foreground">Serviços Realizados</div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card border-border/50">
            <CardContent className="p-6 text-center">
              <User className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">VIP</div>
              <div className="text-muted-foreground">Status Cliente</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1 mb-8 max-w-md">
          <Button
            variant={activeTab === "appointments" ? "default" : "ghost"}
            onClick={() => setActiveTab("appointments")}
            className="flex-1"
          >
            Agendamentos
          </Button>
          <Button
            variant={activeTab === "history" ? "default" : "ghost"}
            onClick={() => setActiveTab("history")}
            className="flex-1"
          >
            Histórico
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            onClick={() => setActiveTab("profile")}
            className="flex-1"
          >
            Perfil
          </Button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "appointments" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Próximos Agendamentos</h2>
              <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-premium">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
            </div>

            <div className="space-y-4">
              {mockAppointments.map((appointment) => (
                <Card key={appointment.id} className="gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{appointment.service}</div>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(appointment.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                          {appointment.price}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          appointment.status === 'confirmado' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Cancelar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Notice about Supabase integration */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Integração com Google Calendar</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Para ativar o sistema completo de agendamentos e sincronização com Google Calendar, 
                  conecte este projeto ao Supabase através do botão verde no canto superior direito.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar para Agendar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Histórico de Serviços</h2>
            <Card className="gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Histórico em Desenvolvimento</h3>
                <p className="text-muted-foreground">
                  O histórico completo de serviços estará disponível após a integração com o Supabase.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Meu Perfil</h2>
            <Card className="gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Perfil do Cliente</h3>
                <p className="text-muted-foreground">
                  As informações do perfil e preferências estarão disponíveis após a integração com o Supabase.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};