import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, User, Stethoscope, FileImage, IdCard, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: User,
      title: "User Authentication",
      description: "Secure login system for workers and healthcare providers",
      link: "/login",
      color: "text-blue-600"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Provider Registry",
      description: "Register doctors and healthcare facilities",
      link: "/doctor-details",
      color: "text-green-600"
    },
    {
      icon: FileImage,
      title: "Aadhaar Verification",
      description: "Secure document upload and identity verification",
      link: "/aadhaar-capture",
      color: "text-purple-600"
    },
    {
      icon: IdCard,
      title: "Digital Health ID",
      description: "Official digital health identification card",
      link: "/digital-id",
      color: "text-emerald-600"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="py-16 text-center animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-primary rounded-2xl shadow-card">
              <Heart className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Shramikare</h1>
          <p className="text-2xl text-muted-foreground mb-6">Caring for Workers' Health</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive Digital Health Record Management System designed specifically for migrant workers in Kerala. 
            Ensuring healthcare access, identity verification, and medical record management for every worker.
          </p>
          <Link to="/login">
            <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-button text-lg px-8 py-3">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare management tools designed for simplicity and effectiveness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link}>
                <Card 
                  className="h-full shadow-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-gradient-card animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-4">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Empowering Migrant Workers with Digital Healthcare
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-success mt-0.5" />
                  <span>Secure and verified digital identity for every worker</span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-success mt-0.5" />
                  <span>Easy access to healthcare providers and facilities</span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-success mt-0.5" />
                  <span>Comprehensive health record management</span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-success mt-0.5" />
                  <span>Government-approved verification system</span>
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Card className="shadow-card bg-gradient-card p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Health for Every Worker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Join thousands of workers who have already registered for secure, accessible healthcare management.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
