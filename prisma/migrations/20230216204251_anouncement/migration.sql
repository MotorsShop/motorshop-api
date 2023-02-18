-- CreateTable
CREATE TABLE "Anouncement" (
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
    "created" DATETIME NOT NULL
);
