-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "first-name" TEXT,
    "last-name" TEXT,
    "position" TEXT,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);
