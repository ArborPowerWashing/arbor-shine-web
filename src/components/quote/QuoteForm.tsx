
import { useState, ChangeEvent, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { 
  Home, 
  Building2, 
  SquareArrowUp, 
  X, 
  Check, 
  Loader2 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ServiceType = "residential" | "commercial";
type ProjectSize = "small" | "medium" | "large";

interface FormData {
  type: ServiceType;
  service: string;
  size: ProjectSize;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  urgency: string;
  photos: File[];
}

const QuoteForm = () => {
  const location = useLocation();
  const { toast } = useToast();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get("type") as ServiceType | null;

  const [formData, setFormData] = useState<FormData>({
    type: typeFromUrl || "residential",
    service: "",
    size: "medium",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    urgency: "standard",
    photos: []
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);

  // Service options based on type
  const serviceOptions = {
    residential: [
      "Roof Washing",
      "House Washing",
      "Driveway Cleaning",
      "Deck/Patio Cleaning",
      "Fence Washing",
      "Gutter Cleaning",
      "Window Cleaning",
      "Other"
    ],
    commercial: [
      "Building Exterior Washing",
      "Parking Lot/Garage Cleaning",
      "Sidewalk/Walkway Cleaning",
      "Roof Washing",
      "Window Cleaning",
      "Graffiti Removal",
      "Dumpster Area Cleaning",
      "Other"
    ]
  };

  const handleTypeChange = (type: ServiceType) => {
    setFormData(prev => ({
      ...prev,
      type,
      // Reset service selection when type changes
      service: ""
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPhotos = Array.from(files);
    
    // Limit to 5 photos
    const totalPhotos = [...formData.photos, ...newPhotos];
    if (totalPhotos.length > 5) {
      toast({
        title: "Photo limit reached",
        description: "You can upload a maximum of 5 photos",
        variant: "destructive"
      });
      return;
    }

    setFormData(prev => ({ 
      ...prev, 
      photos: [...prev.photos, ...newPhotos]
    }));

    // Create preview URLs
    const newPreviewUrls = newPhotos.map(file => URL.createObjectURL(file));
    setPhotoPreviewUrls(prev => [...prev, ...newPreviewUrls]);
  };

  const removePhoto = (index: number) => {
    // Remove from form data
    const updatedPhotos = [...formData.photos];
    updatedPhotos.splice(index, 1);
    setFormData(prev => ({ ...prev, photos: updatedPhotos }));

    // Remove from previews
    const updatedPreviews = [...photoPreviewUrls];
    URL.revokeObjectURL(updatedPreviews[index]); // Clean up URL object
    updatedPreviews.splice(index, 1);
    setPhotoPreviewUrls(updatedPreviews);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    // Final submission
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setLoading(false);
      toast({
        title: "Quote request submitted!",
        description: "We'll get back to you soon with a detailed quote.",
      });
      
      // Reset form or redirect
      setFormData({
        type: "residential",
        service: "",
        size: "medium",
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        urgency: "standard",
        photos: []
      });
      setPhotoPreviewUrls([]);
      setStep(1);
    }, 1500);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Render form step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-arbor-dark">
              What type of property do you need serviced?
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleTypeChange("residential")}
                className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                  formData.type === "residential"
                    ? "border-arbor-primary bg-arbor-light shadow-md scale-[1.02]"
                    : "border-gray-200 hover:border-arbor-secondary"
                }`}
              >
                <Home size={40} className={formData.type === "residential" ? "text-arbor-primary" : "text-gray-500"} />
                <span className="mt-3 font-medium">Residential</span>
                {formData.type === "residential" && (
                  <Check className="absolute top-3 right-3 text-arbor-primary" size={20} />
                )}
              </button>
              
              <button
                type="button"
                onClick={() => handleTypeChange("commercial")}
                className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                  formData.type === "commercial"
                    ? "border-arbor-primary bg-arbor-light shadow-md scale-[1.02]"
                    : "border-gray-200 hover:border-arbor-secondary"
                }`}
              >
                <Building2 size={40} className={formData.type === "commercial" ? "text-arbor-primary" : "text-gray-500"} />
                <span className="mt-3 font-medium">Commercial</span>
                {formData.type === "commercial" && (
                  <Check className="absolute top-3 right-3 text-arbor-primary" size={20} />
                )}
              </button>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Which service do you need?
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions[formData.type].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Project size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, size: size as ProjectSize }))}
                    className={`py-2 px-4 rounded-md text-center capitalize ${
                      formData.size === size
                        ? "bg-arbor-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {formData.size === "small" && "Small project (e.g., single driveway, small deck)"}
                {formData.size === "medium" && "Medium project (e.g., average home exterior, large driveway)"}
                {formData.size === "large" && "Large project (e.g., large home, commercial building)"}
              </p>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-arbor-dark">
              Tell us more about your project
            </h3>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload photos of the area (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <div className="flex flex-col items-center justify-center py-3">
                  <SquareArrowUp className="text-gray-400 mb-2" size={30} />
                  <p className="text-sm text-gray-500 mb-1">
                    Drag & drop photos here or click to browse
                  </p>
                  <p className="text-xs text-gray-400">
                    Max 5 photos (JPG, PNG up to 5MB each)
                  </p>
                  
                  <input
                    type="file"
                    id="photos"
                    name="photos"
                    multiple
                    accept="image/jpeg, image/png"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              
              {photoPreviewUrls.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {photoPreviewUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                How soon do you need this service?
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
              >
                <option value="urgent">Urgent (ASAP)</option>
                <option value="standard">Standard (Within 2 weeks)</option>
                <option value="flexible">Flexible (1 month+)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Additional details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us anything else that might help us provide an accurate quote..."
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
              ></textarea>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-arbor-dark">
              Your contact information
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, City, State 12345"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-arbor-primary focus:border-arbor-primary"
                  required
                />
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-arbor-primary focus:ring-arbor-primary border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    I agree to the{" "}
                    <a href="/privacy" className="text-arbor-primary hover:text-arbor-secondary">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-arbor-dark">Request a Quote</h2>
        <p className="text-gray-600">
          Tell us about your project and get a free, no-obligation estimate.
        </p>
      </div>
      
      {/* Form Steps Indicator */}
      <div className="flex mb-6 pt-6 px-6">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex-1 relative">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                step >= stepNumber 
                  ? "bg-arbor-primary text-white" 
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {stepNumber}
            </div>
            <div className="text-xs text-center mt-1">
              {stepNumber === 1 && "Service"}
              {stepNumber === 2 && "Details"}
              {stepNumber === 3 && "Contact"}
            </div>
            {stepNumber < 3 && (
              <div 
                className={`absolute top-4 w-full h-0.5 ${
                  step > stepNumber ? "bg-arbor-primary" : "bg-gray-200"
                }`}
                style={{ left: "50%" }}
              ></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6">
        {renderStepContent()}
        
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="btn-outline"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          <button
            type="submit"
            className="btn-primary min-w-[120px] flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : step < 3 ? (
              "Continue"
            ) : (
              "Submit Request"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
