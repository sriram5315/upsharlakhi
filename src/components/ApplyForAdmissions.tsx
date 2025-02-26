"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { submitAdmission } from "@/app/actions/admission";

const admissionSchema = z.object({
    studentName: z.string().min(2, "Student name must be at least 2 characters"),
    class: z.string().min(1, "Class selection is required"),
    dob: z.string().min(1, "Date of birth is required"),
    gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Invalid gender selection" })
    }),
    uidNo: z.string().optional(),
    fatherName: z.string().min(2, "Father's name must be at least 2 characters"),
    motherName: z.string().min(2, "Mother's name must be at least 2 characters"),
    nationality: z.string().min(2, "Nationality must be at least 2 characters"),
    religion: z.string().optional(),
    mobile: z.string().min(10, "Mobile number must be at least 10 characters"),
    email: z.string().email("Invalid email address"),
    houseNo: z.string().min(1, "House number is required"),
    secondLineAddress: z.string().optional(),
    village: z.string().min(2, "Village must be at least 2 characters"),
    city: z.string().min(2, "City must be at least 2 characters"),
    district: z.string().min(2, "District must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
    studentPhotoLink: z.string().optional(),
});

type AdmissionData = z.infer<typeof admissionSchema>;

export function ApplyForAdmissions() {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<AdmissionData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      
      const result = await submitAdmission(null, formData);
      
      if (result.success) {
        reset();
      } else {
        setSubmitError(result.message || "Failed to submit admission form");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {submitError && (
        <p className="text-destructive text-sm">{submitError}</p>
      )}

      <div 
        className="space-y-4 h-[400px] md:h-[430px] overflow-auto p-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Student Details */}
        <div className="space-y-4">
          <h3 className="font-semibold">Student Details</h3>
          
          <div>
            <Label htmlFor="studentName">Student Name</Label>
            <Input
              id="studentName"
              {...register("studentName")}
              placeholder="Student's full name"
            />
            {errors.studentName && (
              <p className="text-sm text-destructive">{errors.studentName.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Class</Label>
              <Select onValueChange={(value) => setValue("class", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {["Nursery", "KG", "1", "2", "3", "4", "5", "6", "7", "8"].map((cls) => (
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

            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                {...register("dob")}
              />
              {errors.dob && (
                <p className="text-sm text-destructive">{errors.dob.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Gender</Label>
              <Select onValueChange={(value) => setValue("gender", value as AdmissionData["gender"])}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  {["male", "female", "other"].map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-sm text-destructive">{errors.gender.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="uidNo">UID Number</Label>
              <Input
                id="uidNo"
                {...register("uidNo")}
                placeholder="UID Number (Optional)"
              />
            </div>
          </div>
        </div>

        {/* Parent Details */}
        <div className="space-y-4">
          <h3 className="font-semibold">Parent Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fatherName">Father's Name</Label>
              <Input
                id="fatherName"
                {...register("fatherName")}
                placeholder="Father's full name"
              />
              {errors.fatherName && (
                <p className="text-sm text-destructive">{errors.fatherName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="motherName">Mother's Name</Label>
              <Input
                id="motherName"
                {...register("motherName")}
                placeholder="Mother's full name"
              />
              {errors.motherName && (
                <p className="text-sm text-destructive">{errors.motherName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                {...register("nationality")}
                placeholder="Nationality"
              />
              {errors.nationality && (
                <p className="text-sm text-destructive">{errors.nationality.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="religion">Religion</Label>
              <Input
                id="religion"
                {...register("religion")}
                placeholder="Religion (Optional)"
              />
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="font-semibold">Contact Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                {...register("mobile")}
                placeholder="Mobile number"
              />
              {errors.mobile && (
                <p className="text-sm text-destructive">{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="space-y-4">
          <h3 className="font-semibold">Address Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="houseNo">House No.</Label>
              <Input
                id="houseNo"
                {...register("houseNo")}
                placeholder="House number"
              />
              {errors.houseNo && (
                <p className="text-sm text-destructive">{errors.houseNo.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="secondLineAddress">Street/Area</Label>
              <Input
                id="secondLineAddress"
                {...register("secondLineAddress")}
                placeholder="Street or area (Optional)"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="village">Village</Label>
              <Input
                id="village"
                {...register("village")}
                placeholder="Village"
              />
              {errors.village && (
                <p className="text-sm text-destructive">{errors.village.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                {...register("city")}
                placeholder="City"
              />
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                {...register("district")}
                placeholder="District"
              />
              {errors.district && (
                <p className="text-sm text-destructive">{errors.district.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                {...register("state")}
                placeholder="State"
              />
              {errors.state && (
                <p className="text-sm text-destructive">{errors.state.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </div>
    </form>
  );
}