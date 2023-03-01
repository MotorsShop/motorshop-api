/*
  Warnings:

  - You are about to drop the column `confirm_password` on the `User` table. All the data in the column will be lost.
  - Made the column `userId` on table `Anouncement` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("cpf", "date_of_birth", "description", "email", "id", "name", "password", "phone", "type") SELECT "cpf", "date_of_birth", "description", "email", "id", "name", "password", "phone", "type" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE TABLE "new_Anouncement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "vehicle_type" TEXT NOT NULL,
    "ad_type" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "cover_img" TEXT NOT NULL,
    "created" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Anouncement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Anouncement" ("ad_type", "cover_img", "created", "description", "id", "km", "price", "published", "sold", "title", "userId", "vehicle_type", "year") SELECT "ad_type", "cover_img", "created", "description", "id", "km", "price", "published", "sold", "title", "userId", "vehicle_type", "year" FROM "Anouncement";
DROP TABLE "Anouncement";
ALTER TABLE "new_Anouncement" RENAME TO "Anouncement";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
