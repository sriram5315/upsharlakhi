"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { submitEnquiry } from "@/app/actions/enquiry";
import { EnquiryData, enquirySchema } from "@/types/universalTypes";

// Define the valid class options as a const array to ensure type safety
const CLASS_OPTIONS = ["Nursery", "KG", "1", "2", "3", "4", "5", "6", "7", "8"] as const;
type ClassOption = typeof CLASS_OPTIONS[number];

export function ContactUsForm() {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<EnquiryData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      const formData = new FormData();
      formData.append('parentName', data.parentName);
      formData.append('studentName', data.studentName);
      formData.append('email', data.email);
      formData.append('mobile', data.mobile);
      formData.append('village', data.village);
      formData.append('class', data.class);
      
      const result = await submitEnquiry(null, formData);
      
      if (result.success) {
        reset();
      } else {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, error]) => {
            console.log(`${field}: ${error}`);
          });
        }
        setSubmitError(result.message || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle class selection with proper type checking
  const handleClassChange = (value: ClassOption) => {
    setValue("class", value);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          <h4 className="text-2xl font-bold">
            Contact Us
            <span className="mx-2 px-2 py-1 rounded-md bg-secondary">
              NOW!
            </span>
          </h4>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {submitError && (
            <p className="text-destructive text-sm">{submitError}</p>
          )}

          <div className="space-y-4">
            <div>
              <Label htmlFor="parentName">Parent Name</Label>
              <Input
                id="parentName"
                {...register("parentName")}
                placeholder="Parent's name"
                className="w-full"
              />
              {errors.parentName && (
                <p className="text-sm text-destructive">{errors.parentName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="studentName">Student Name</Label>
              <Input
                id="studentName"
                {...register("studentName")}
                placeholder="Student's name"
                className="w-full"
              />
              {errors.studentName && (
                <p className="text-sm text-destructive">{errors.studentName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your@email.com"
                className="w-full"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                {...register("mobile")}
                placeholder="Enter Mobile Number"
                className="w-full"
              />
              {errors.mobile && (
                <p className="text-sm text-destructive">{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="village">Village</Label>
              <Input
                id="village"
                {...register("village")}
                placeholder="Enter Your Village"
                className="w-full"
              />
              {errors.village && (
                <p className="text-sm text-destructive">{errors.village.message}</p>
              )}
            </div>

            <div>
              <Label>Class</Label>
              <Select onValueChange={handleClassChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {CLASS_OPTIONS.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                      {cls}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.class && (
                <p className="text-sm text-destructive">{errors.class.message}</p>
              )}
            </div>
          </div>

          <CardFooter className="px-0 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactUsForm;