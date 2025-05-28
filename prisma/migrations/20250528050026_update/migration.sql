/*
  Warnings:

  - The values [Cultural,Academic] on the enum `GalleryCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GalleryCategory_new" AS ENUM ('Campus', 'Events', 'Students', 'Faculty', 'Sports');
ALTER TABLE "gallery_images" ALTER COLUMN "category" TYPE "GalleryCategory_new" USING ("category"::text::"GalleryCategory_new");
ALTER TABLE "gallery_videos" ALTER COLUMN "category" TYPE "GalleryCategory_new" USING ("category"::text::"GalleryCategory_new");
ALTER TYPE "GalleryCategory" RENAME TO "GalleryCategory_old";
ALTER TYPE "GalleryCategory_new" RENAME TO "GalleryCategory";
DROP TYPE "GalleryCategory_old";
COMMIT;

-- AlterTable
ALTER TABLE "faculty_members" ADD COLUMN     "bio_data_key" TEXT,
ADD COLUMN     "bio_data_url" TEXT;
