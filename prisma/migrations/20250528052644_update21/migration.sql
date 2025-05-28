/*
  Warnings:

  - You are about to drop the column `bio_data_key` on the `faculty_members` table. All the data in the column will be lost.
  - You are about to drop the column `bio_data_url` on the `faculty_members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "faculty_members" DROP COLUMN "bio_data_key",
DROP COLUMN "bio_data_url";
