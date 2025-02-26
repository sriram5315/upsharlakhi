'use server';

import { db } from "@/server/db";
import { enquiry } from "@/server/db/schema";
import { z } from "zod";
import { EnquiryData, enquirySchema } from "@/types/universalTypes";

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
    
    const insertData = await db.insert(enquiry).values({
        parentName: validatedData.parentName,
        studentName: validatedData.studentName,
        email: validatedData.email,
        mobile: validatedData.mobile,
        village: validatedData.village,
        class: validatedData.class
    })
    console.log(insertData, 'InsertData----')
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

      console.log(errorMap, 'ErrorMap----')
      return {
        success: false,
        errors: errorMap,
      };
    }
    console.log(error)
    return { 
      success: false, 
      message: 'Something went wrong! Please try again.' 
    };
  }
}