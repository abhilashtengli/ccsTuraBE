/*
  Warnings:

  - You are about to drop the column `depatment` on the `faculty_members` table. All the data in the column will be lost.
  - Added the required column `department` to the `faculty_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faculty_members" DROP COLUMN "depatment",
ADD COLUMN     "department" "Departments" NOT NULL;
