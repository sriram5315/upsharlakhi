CREATE TABLE IF NOT EXISTS "ups_enquiry" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"parentName" varchar(256),
	"studentName" varchar(256),
	"email" varchar(256),
	"mobile" varchar(256),
	"village" varchar(256),
	"class" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
