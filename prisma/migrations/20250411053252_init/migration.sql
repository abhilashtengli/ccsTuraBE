-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('Open', 'Closed');

-- CreateEnum
CREATE TYPE "FacultyType" AS ENUM ('Teaching', 'Non_Teaching');

-- CreateEnum
CREATE TYPE "GalleryCategory" AS ENUM ('Campus', 'Events', 'Students', 'Faculty', 'Sports');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notices" (
    "id" TEXT NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "pdf_url" VARCHAR(512) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bulletins" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "pdf_url" VARCHAR(512),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bulletins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty_members" (
    "id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "contact_number" VARCHAR(20),
    "profile_image_url" VARCHAR(512),
    "designation" VARCHAR(100) NOT NULL,
    "is_hod" BOOLEAN NOT NULL DEFAULT false,
    "faculty_type" "FacultyType" NOT NULL,
    "cv_url" VARCHAR(512),
    "social_links" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "faculty_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_updates" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(80) NOT NULL,
    "description" TEXT NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advertisements" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "departmentId" TEXT NOT NULL,
    "deadline_date" TIMESTAMP(3),
    "pdf_url" VARCHAR(512),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "advertisements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenders" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "reference" VARCHAR(100),
    "published_date" TIMESTAMP(3) NOT NULL,
    "closing_date" TIMESTAMP(3) NOT NULL,
    "category" VARCHAR(100),
    "pdf_url" VARCHAR(512) NOT NULL,
    "status" "StatusType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tenders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_forms" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "form_type" VARCHAR(50) NOT NULL,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "pdf_url" VARCHAR(512) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "staff_forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery_images" (
    "id" TEXT NOT NULL,
    "image_url" VARCHAR(512) NOT NULL,
    "category" "GalleryCategory" NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gallery_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery_videos" (
    "id" TEXT NOT NULL,
    "youtube_url" VARCHAR(512) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gallery_videos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "faculty_members" ADD CONSTRAINT "faculty_members_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
