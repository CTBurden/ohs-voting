/*
  Warnings:

  - You are about to drop the column `first-name` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `last-name` on the `players` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ranking` to the `players` table without a default value. This is not possible if the table is not empty.
  - Made the column `position` on table `players` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "players" DROP COLUMN "first-name",
DROP COLUMN "last-name",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "ranking" INTEGER NOT NULL,
ALTER COLUMN "position" SET NOT NULL;
