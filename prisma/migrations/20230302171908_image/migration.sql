/*
  Warnings:

  - You are about to drop the column `imageId` on the `Image` table. All the data in the column will be lost.
  - Added the required column `anouncementId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "anouncementId" INTEGER NOT NULL,
    CONSTRAINT "Image_anouncementId_fkey" FOREIGN KEY ("anouncementId") REFERENCES "Anouncement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("id") SELECT "id" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
