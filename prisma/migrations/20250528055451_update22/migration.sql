/*
  Warnings:

  - You are about to drop the column `bioKey` on the `faculty_members` table. All the data in the column will be lost.
  - You are about to drop the column `bioUrl` on the `faculty_members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "faculty_members" DROP COLUMN "bioKey",
DROP COLUMN "bioUrl",
ADD COLUMN     "bioDataKey" TEXT,
ADD COLUMN     "bioDataUrl" TEXT;
