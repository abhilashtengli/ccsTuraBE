/*
  Warnings:

  - You are about to drop the column `department_id` on the `faculty_members` table. All the data in the column will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `depatment` to the `faculty_members` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Departments" AS ENUM ('dept_a', 'dept_b', 'dept_c', 'dept_d');

-- DropForeignKey
ALTER TABLE "faculty_members" DROP CONSTRAINT "faculty_members_department_id_fkey";

-- AlterTable
ALTER TABLE "faculty_members" DROP COLUMN "department_id",
ADD COLUMN     "depatment" "Departments" NOT NULL;

-- DropTable
DROP TABLE "department";
