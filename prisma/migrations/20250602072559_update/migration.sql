/*
  Warnings:

  - You are about to alter the column `bio_summary` on the `faculty_members` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.

*/
-- AlterTable
ALTER TABLE "faculty_members" ALTER COLUMN "bio_summary" SET DATA TYPE VARCHAR(2000);
