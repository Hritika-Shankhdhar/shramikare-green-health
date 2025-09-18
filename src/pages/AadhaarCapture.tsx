import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileImage, Shield, CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AadhaarCapture = () => {
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a JPEG or PNG image file.",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload an image smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }

      setUploadedFile(file);
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      toast({
        title: "Aadhaar Card Uploaded",
        description: "Your document has been successfully uploaded and is secure.",
      });
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      // Validate and process the dropped file directly
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a JPEG or PNG image file.",
          variant: "destructive",
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload an image smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }

      setUploadedFile(file);
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      toast({
        title: "Aadhaar Card Uploaded",
        description: "Your document has been successfully uploaded and is secure.",
      });
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-2">Aadhaar Card Verification</h1>
          <p className="text-muted-foreground">Upload your Aadhaar card for identity verification</p>
        </div>

        {/* Security Notice */}
        <Card className="mb-6 shadow-soft border-success bg-success/5 animate-slide-up">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-success" />
              <p className="text-sm text-success-foreground">
                <strong>Your privacy is protected:</strong> Your Aadhaar is safe and used only for ID verification. We follow strict security protocols.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card className="shadow-card bg-gradient-card animate-slide-up" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileImage className="h-5 w-5" />
              Upload Aadhaar Card
            </CardTitle>
            <CardDescription>
              Select or drag and drop your Aadhaar card image (JPEG/PNG, max 5MB)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!uploadedFile ? (
              <div
                className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Choose Aadhaar Card Image
                </h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop your file here, or click to browse
                </p>
                <Badge variant="secondary" className="text-xs">
                  Supported: JPEG, PNG (Max: 5MB)
                </Badge>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                {/* File Info */}
                <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-foreground">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFile}
                    className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Preview */}
                {previewUrl && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Preview:</h4>
                    <div className="border rounded-lg overflow-hidden shadow-soft">
                      <img
                        src={previewUrl}
                        alt="Aadhaar Card Preview"
                        className="w-full h-auto max-h-96 object-contain bg-muted"
                      />
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="flex-1"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Change File
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-button"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Verify Document
                  </Button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-6 shadow-soft animate-slide-up" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle className="text-lg text-primary">Upload Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                Ensure the Aadhaar card is clearly visible and not blurred
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                All text and numbers should be readable
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                Good lighting and proper focus for better recognition
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                File size should be under 5MB for quick processing
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AadhaarCapture;