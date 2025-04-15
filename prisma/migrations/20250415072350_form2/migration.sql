/*
  Warnings:

  - Added the required column `form_type` to the `staff_forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "staff_forms" ADD COLUMN     "form_type" VARCHAR(50) NOT NULL;
