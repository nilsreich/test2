-- CreateTable
CREATE TABLE "Todo" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" STRING,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
