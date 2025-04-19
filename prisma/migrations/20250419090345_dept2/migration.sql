/*
  Warnings:

  - The values [dept_a,dept_b,dept_c,dept_d] on the enum `Departments` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Departments_new" AS ENUM ('Department_of_Food_Science_and_Nutrition', 'Department_of_Basic_Science_and_Humanities', 'Department_of_Family_Resouces_Management', 'Department_of_Housing_Development_and_Family_Studies', 'Department_of_Extension_Education_and_Communication_Management', 'Department_of_Textiles_and_Apparel_Designing', 'Multi_Technology_Testing_Centre_and_Vocational_Training_Centre');
ALTER TABLE "faculty_members" ALTER COLUMN "department" TYPE "Departments_new" USING ("department"::text::"Departments_new");
ALTER TYPE "Departments" RENAME TO "Departments_old";
ALTER TYPE "Departments_new" RENAME TO "Departments";
DROP TYPE "Departments_old";
COMMIT;
