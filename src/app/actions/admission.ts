'use server';

import { db } from "@/server/db";
import { admissions } from "@/server/db/schema";
import { z } from "zod";

const admissionSchema = z.object({
    studentName: z.string().min(2, "Student name must be at least 2 characters"),
    class: z.string().min(1, "Class selection is required"),
    dob: z.string().min(1, "Date of birth is required").transform((str) => new Date(str)),
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

type SubmissionResponse = {
    success: boolean;
    message?: string;
    errors?: Partial<Record<keyof AdmissionData, string>>;
};

export async function submitAdmission(
    prevState: any,
    formData: FormData
): Promise<SubmissionResponse> {
    try {
        // Safely convert FormData values to strings
        const rawData = {
            studentName: formData.get('studentName')?.toString() ?? '',
            class: formData.get('class')?.toString() ?? '',
            dob: formData.get('dob')?.toString() ?? '',
            gender: formData.get('gender')?.toString() ?? 'male',
            uidNo: formData.get('uidNo')?.toString(),
            fatherName: formData.get('fatherName')?.toString() ?? '',
            motherName: formData.get('motherName')?.toString() ?? '',
            nationality: formData.get('nationality')?.toString() ?? '',
            religion: formData.get('religion')?.toString(),
            mobile: formData.get('mobile')?.toString() ?? '',
            email: formData.get('email')?.toString() ?? '',
            houseNo: formData.get('houseNo')?.toString() ?? '',
            secondLineAddress: formData.get('secondLineAddress')?.toString(),
            village: formData.get('village')?.toString() ?? '',
            city: formData.get('city')?.toString() ?? '',
            district: formData.get('district')?.toString() ?? '',
            state: formData.get('state')?.toString() ?? '',
            studentPhotoLink: formData.get('studentPhotoLink')?.toString(),
        };

        console.log('Raw form data:', rawData);

        const validatedData = admissionSchema.parse(rawData);
        
        console.log('Validated data:', validatedData);

        const insertData = await db.insert(admissions).values({
            studentName: validatedData.studentName,
            class: validatedData.class,
            dob: validatedData.dob,
            gender: validatedData.gender,
            uidNo: validatedData.uidNo,
            fatherName: validatedData.fatherName,
            motherName: validatedData.motherName,
            nationality: validatedData.nationality,
            religion: validatedData.religion,
            mobile: validatedData.mobile,
            email: validatedData.email,
            houseNo: validatedData.houseNo,
            secondLineAddress: validatedData.secondLineAddress,
            village: validatedData.village,
            city: validatedData.city,
            district: validatedData.district,
            state: validatedData.state,
            studentPhotoLink: validatedData.studentPhotoLink,
        });

        return {
            success: true,
            message: 'Admission form submitted successfully!'
        };

    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMap: Partial<Record<keyof AdmissionData, string>> = {};
            
            error.errors.forEach((err) => {
                const path = err.path[0];
                if (typeof path === 'string') {
                    errorMap[path as keyof AdmissionData] = err.message;
                }
            });

            console.log('Validation errors:', errorMap);
            
            return {
                success: false,
                errors: errorMap,
            };
        }

        console.error('Submission error:', error);
        
        return {
            success: false,
            message: 'Something went wrong! Please try again.'
        };
    }
}