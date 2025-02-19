"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { submitEnquiry } from "@/app/actions/enquiry";

const enquirySchema = z.object({
  parentName: z.string().min(2, "Parent Name must be at least 2 characters"),
  studentName: z.string().min(2, "Student Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile Number must be at least 10 characters"),
  village: z.string().min(2, "Village must be at least 2 characters"),
  class: z.enum(["Nursery", "KG", "1", "2", "3", "4", "5", "6", "7", "8"], {
    errorMap: () => ({ message: "Invalid class selection" }),
  }),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const EnquiryForm = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const result = await submitEnquiry(null, formData);
      console.log(result)
      if (result.success) {
        reset();
        onOpenChange(false);
      } else {
        setSubmitError(result.message || "Failed to submit enquiry");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <DialogTitle className="text-center mb-2">
        <h4 className="text-lg md:text-2xl font-bold">
            Enquire
            <span className="mx-2 px-2 py-1 rounded-md bg-secondary">
              NOW!
            </span>
          </h4>
      </DialogTitle>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[95%] mx-auto">
        {submitError && (
          <p className="text-destructive text-sm">{submitError}</p>
        )}

        <div 
          className="space-y-4 h-[270px] overflow-auto"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="w-[95%] mx-auto">
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

          <div className="w-[95%] mx-auto">
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

          <div className="w-[95%] mx-auto">
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

          <div className="w-[95%] mx-auto">
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

          <div className="w-[95%] mx-auto">
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

          <div className="w-[95%] mx-auto">
            <Label>Class</Label>
            <Select onValueChange={(value) => setValue("class", value as EnquiryFormData["class"])}>
              <SelectTrigger className="w-full">
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
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

export function EnquiryModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full md:w-auto fixed bottom-0 md:bottom-24 md:right-2 flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="z-[99] relative w-full md:w-[100px] bg-nav flex justify-center group/modal-btn p-2 md:rounded-lg cursor-pointer">
            {/* <span className="md:group-hover/modal-btn:translate-x-40 text-center text-gray-950 transition duration-500">
              Enquire
            </span>
            <div className="hidden md:flex md:-translate-x-40 group-hover/modal-btn:translate-x-0 items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✈️
            </div> */}
            Enquire
          </div>
        </DialogTrigger>
        <DialogContent className="bg-main max-h-[70vh] overflow-y-auto max-w-[320px] md:max-w-[400px]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <EnquiryForm onOpenChange={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}