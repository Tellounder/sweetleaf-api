-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "displayName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignBlock" (
    "id" TEXT NOT NULL,
    "blockKey" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublishStatus" (
    "id" TEXT NOT NULL,
    "blockId" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 1,
    "publishedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublishStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DesignBlock_blockKey_key" ON "DesignBlock"("blockKey");

-- CreateIndex
CREATE UNIQUE INDEX "PublishStatus_blockId_key" ON "PublishStatus"("blockId");

-- AddForeignKey
ALTER TABLE "PublishStatus" ADD CONSTRAINT "PublishStatus_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "DesignBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
