const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const router = express.Router();

/* GET duties listing. */
router.get("/", async (req, res) => {
  const { tableName, dutyNumber } = req.query;
  console.log({ tableName, dutyNumber });

  try {
    const users = await prisma[tableName].findMany({
      take: 5,
      where: {
        dutyNumber,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "unable to reach db",
    });
  }
});

module.exports = router;
