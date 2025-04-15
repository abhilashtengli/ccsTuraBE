/*
  Warnings:

  - You are about to drop the column `description` on the `gallery_images` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `gallery_images` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `gallery_images` table. All the data in the column will be lost.
  - Added the required column `imageKey` to the `gallery_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf_key` to the `notices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "advertisements" ADD COLUMN     "pdf_key" TEXT;

-- AlterTable
ALTER TABLE "faculty_members" ADD COLUMN     "image_key" TEXT,
ADD COLUMN     "pdf_key" TEXT;

-- AlterTable
ALTER TABLE "gallery_images" DROP COLUMN "description",
DROP COLUMN "is_active",
DROP COLUMN "title",
ADD COLUMN     "imageKey" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "notices" ADD COLUMN     "pdf_key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "staff_forms" ADD COLUMN     "pdf_key" TEXT;

-- AlterTable
ALTER TABLE "tenders" ADD COLUMN     "pdf_key" TEXT;
