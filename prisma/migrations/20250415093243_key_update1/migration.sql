/*
  Warnings:

  - Added the required column `youtube_key` to the `gallery_videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gallery_videos" ADD COLUMN     "youtube_key" TEXT NOT NULL;
