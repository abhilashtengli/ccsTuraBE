/*
  Warnings:

  - You are about to drop the column `departmentId` on the `advertisements` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `faculty_members` table. All the data in the column will be lost.
  - Added the required column `department` to the `advertisements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "advertisements" DROP COLUMN "departmentId",
ADD COLUMN     "department" "Departments" NOT NULL;

-- AlterTable
ALTER TABLE "faculty_members" DROP COLUMN "department";
