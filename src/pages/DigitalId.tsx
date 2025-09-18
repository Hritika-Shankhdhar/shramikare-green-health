import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, QrCode, User, Calendar, IdCard, Download, Share } from "lucide-react";

const DigitalId = () => {
  // Mock worker data - in real app this would come from backend
  const workerData = {
    name: "Rajesh Kumar",
    age: 32,
    workerId: "SHR/2025/001234",
    aadhaarVerified: true,
    registrationDate: "January 15, 2025",
    healthStatus: "Active",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  };

  const handleDownload = () => {
    // Implement PDF download functionality
    console.log("Downloading Digital ID...");
  };

  const handleShare = () => {
    // Implement sharing functionality
    console.log("Sharing Digital ID...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-2">Digital Health ID Card</h1>
          <p className="text-muted-foreground">Your official digital health identification</p>
        </div>

        {/* Digital ID Card */}
        <Card className="shadow-card bg-gradient-card border-2 border-primary/20 animate-slide-up">
          <CardContent className="p-0">
            {/* Header Section */}
            <div className="bg-gradient-primary text-primary-foreground p-6 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Shramikare</h2>
                  <p className="text-sm opacity-90">Digital Health Record System</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90 text-blue-foreground">State of Kerala</p>
                  <p className="text-xs opacity-75">Govt. of India</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Worker Photo & Basic Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-primary/20 shadow-soft">
                      <img
                        src={workerData.photo}
                        alt="Worker Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-1">{workerData.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          <User className="h-3 w-3 mr-1" />
                          Age: {workerData.age}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          Since: {workerData.registrationDate}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="bg-success text-success-foreground">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Aadhaar Verified
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Worker Details */}
                  <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Worker ID:</span>
                      <span className="font-mono text-sm font-semibold text-primary">{workerData.workerId}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Health Status:</span>
                      <Badge className="bg-success text-success-foreground">
                        {workerData.healthStatus}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Identity Status:</span>
                      <div className="flex items-center gap-1 text-success">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border mb-3">
                    <div className="text-center">
                      <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">QR Code</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    Scan for instant verification
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-muted px-6 py-4 rounded-b-lg border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <IdCard className="h-3 w-3" />
                  <span>Valid Digital Health ID</span>
                </div>
                <div>
                  <span>Issued: {workerData.registrationDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <Button
            onClick={handleDownload}
            className="flex-1 bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-button"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex-1"
          >
            <Share className="h-4 w-4 mr-2" />
            Share ID
          </Button>
        </div>

        {/* Additional Info */}
        <Card className="mt-6 shadow-soft animate-slide-up" style={{ animationDelay: "400ms" }}>
          <CardContent className="pt-4">
            <h4 className="font-medium text-primary mb-3">Important Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                <span>This digital ID is valid for all healthcare services in Kerala</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                <span>Keep this ID handy during medical visits and health checkups</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                <span>QR code enables quick verification by healthcare providers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                <span>Report any discrepancies immediately to local authorities</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalId;