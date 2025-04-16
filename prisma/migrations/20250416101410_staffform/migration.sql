/*
  Warnings:

  - You are about to drop the `bulletin` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `pdf_key` on table `staff_forms` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "staff_forms" ALTER COLUMN "pdf_key" SET NOT NULL;

-- DropTable
DROP TABLE "bulletin";
