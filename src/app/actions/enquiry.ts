'use server';

import { z } from "zod";

const enquirySchema = z.object({
  parentName: z.string().min(2, "Parent Name must be at least 2 characters"),
  studentName: z.string().min(2, "Student Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile Number must be at least 10 characters"),
  village: z.string().min(2, "Village must be at least 2 characters"),
  class: z.string().min(2, "Class must be at least 2 characters"),
});

type EnquiryData = z.infer<typeof enquirySchema>;

// Define return type for the function
type SubmissionResponse = {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof EnquiryData, string>>;
};

export async function submitEnquiry(
  prevState: any, 
  formData: FormData
): Promise<SubmissionResponse> {
  try {
    const data = {
      parentName: formData.get('parentName'),
      studentName: formData.get('studentName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      village: formData.get('village'),
      class: formData.get('class'),
    } as EnquiryData;
    console.log(data)
    const validatedData = enquirySchema.parse(data);
    console.log('Form submission:', validatedData);
    
    // Here you would typically save to database or send email
    return { 
      success: true, 
      message: 'Enquiry submitted successfully!' 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMap: Partial<Record<keyof EnquiryData, string>> = {};
      
      error.errors.forEach((err) => {
        const path = err.path[0];
        if (typeof path === 'string') {
          errorMap[path as keyof EnquiryData] = err.message;
        }
      });

      return {
        success: false,
        errors: errorMap,
      };
    }
    return { 
      success: false, 
      message: 'Something went wrong! Please try again.' 
    };
  }
}