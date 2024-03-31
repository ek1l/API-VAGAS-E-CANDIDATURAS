/*
  Warnings:

  - You are about to drop the column `oportunityId` on the `Application` table. All the data in the column will be lost.
  - Added the required column `name` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opportunityId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_oportunityId_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "oportunityId",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "opportunityId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
