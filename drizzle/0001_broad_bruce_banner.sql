DO $$ BEGIN
 CREATE TYPE "public"."gender" AS ENUM('male', 'female', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ups_admissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"student_name" varchar(256),
	"class" varchar(256),
	"dob" timestamp,
	"gender" "gender" DEFAULT 'male',
	"uid_no" varchar(256),
	"father_name" varchar(256),
	"mother_name" varchar(256),
	"nationality" varchar(256),
	"religion" varchar(256),
	"mobile" varchar(256),
	"email" varchar(256),
	"houseNo" varchar(256),
	"second_line_address" varchar(256),
	"village" varchar(256),
	"city" varchar(256),
	"district" varchar(256),
	"state" varchar(256),
	"student_photo_link" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
