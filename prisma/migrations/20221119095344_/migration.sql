/*
  Warnings:

  - You are about to drop the `Testimonials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Testimonials`;

-- CreateTable
CREATE TABLE `testimonials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `content` TEXT NOT NULL,
    `author` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
