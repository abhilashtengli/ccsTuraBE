/*
  Warnings:

  - Added the required column `department` to the `faculty_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faculty_members" ADD COLUMN     "department" "Departments" NOT NULL;
