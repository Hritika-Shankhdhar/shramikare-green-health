import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Stethoscope, Building, Phone, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DoctorData {
  id: string;
  doctorName: string;
  specialization: string;
  facilityName: string;
  contactNumber: string;
}

const DoctorDetails = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    doctorName: "",
    specialization: "",
    facilityName: "",
    contactNumber: "",
  });
  const [doctors, setDoctors] = useState<DoctorData[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newDoctor: DoctorData = {
      id: Date.now().toString(),
      ...formData,
    };

    setDoctors(prev => [...prev, newDoctor]);
    setFormData({
      doctorName: "",
      specialization: "",
      facilityName: "",
      contactNumber: "",
    });

    toast({
      title: "Doctor Details Added",
      description: "Healthcare provider information has been successfully recorded.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = (id: string) => {
    setDoctors(prev => prev.filter(doctor => doctor.id !== id));
    toast({
      title: "Record Deleted",
      description: "Doctor details have been removed.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-2">Healthcare Provider Details</h1>
          <p className="text-muted-foreground">Register healthcare professionals and facilities</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Card className="shadow-card bg-gradient-card animate-slide-up border-l-4 border-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Stethoscope className="h-5 w-5" />
                Add Provider Details
              </CardTitle>
              <CardDescription>
                Enter healthcare provider and facility information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorName">Doctor Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="doctorName"
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleInputChange}
                      placeholder="Dr. Name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      placeholder="e.g., General Medicine, Cardiology"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facilityName">Facility/Clinic Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="facilityName"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleInputChange}
                      placeholder="Healthcare facility name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="+91 12345 67890"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-button"
                >
                  Add Provider Details
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Registered Doctors */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary mb-4">Registered Providers</h2>
            {doctors.length === 0 ? (
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    No healthcare providers registered yet. Add provider details using the form.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {doctors.map((doctor, index) => (
                  <Card key={doctor.id} className="shadow-card animate-slide-up border-l-2 border-blue" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2 flex-1">
                          <h3 className="font-semibold text-primary">{doctor.doctorName}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Stethoscope className="h-3 w-3 text-blue" />
                            {doctor.specialization}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Building className="h-3 w-3 text-blue" />
                            {doctor.facilityName}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {doctor.contactNumber}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(doctor.id)}
                          className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;