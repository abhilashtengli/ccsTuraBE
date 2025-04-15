/*
  Warnings:

  - You are about to drop the column `description` on the `gallery_videos` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `gallery_videos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gallery_videos" DROP COLUMN "description",
DROP COLUMN "is_active";
