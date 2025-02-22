// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  uuid,
  pgEnum
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `ups_${name}`);

export const enquiry = createTable(
  "enquiry",
  {
    id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),
    parentName: varchar("parentName", { length: 256 }),
    studentName: varchar("studentName", { length: 256 }),
    email: varchar("email", { length: 256 }),
    mobile: varchar("mobile", { length: 256 }),
    village: varchar("village", { length: 256 }),
    class: varchar("class", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
);
export const genderEnum = pgEnum("gender", ["male", "female", "other"]);

export const admissions = createTable(
  "admissions",
  {
    id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),
    studentName: varchar("student_name", { length: 256 }),
    class: varchar('class', {length: 256}),
    dob: timestamp('dob'),
    gender: genderEnum('gender').default('male'),
    uidNo: varchar('uid_no', {length: 256}),
    fatherName: varchar("father_name", { length: 256 }),
    motherName: varchar("mother_name", { length: 256 }),
    nationality: varchar('nationality', {length: 256}),
    religion: varchar('religion', {length: 256}),
    mobile: varchar("mobile", { length: 256 }),
    email: varchar("email", { length: 256 }),
    houseNo: varchar('houseNo', {length: 256}),
    secondLineAddress: varchar('second_line_address', {length: 256}),
    village: varchar('village', {length: 256}),
    city: varchar('city', {length: 256}),
    district: varchar('district', {length: 256}),
    state: varchar('state', {length: 256}),
    studentPhotoLink: varchar('student_photo_link', {length: 256}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
);