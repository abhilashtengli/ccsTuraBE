/*
  Warnings:

  - Changed the type of `category` on the `gallery_videos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "gallery_videos" DROP COLUMN "category",
ADD COLUMN     "category" "GalleryCategory" NOT NULL;
