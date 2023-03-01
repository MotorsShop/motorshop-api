-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "userId" INTEGER,
    CONSTRAINT "Anouncement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Anouncement" ("ad_type", "cover_img", "created", "description", "id", "km", "price", "published", "sold", "title", "vehicle_type", "year") SELECT "ad_type", "cover_img", "created", "description", "id", "km", "price", "published", "sold", "title", "vehicle_type", "year" FROM "Anouncement";
DROP TABLE "Anouncement";
ALTER TABLE "new_Anouncement" RENAME TO "Anouncement";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
