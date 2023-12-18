import express from "express";
import {
  getProfil1,
  getProfilByid1,
  saveProfil1,
  updateProfil1,
  createProfil1,
  deleteProfil1,
} from "../controllers/Profil1.js";

const router = express.Router();

router.get("/profil1", getProfil1);
router.get("/profil1/:id", getProfilByid1);
router.post("/profil1", saveProfil1);
router.patch("/profil1/:id", updateProfil1);
router.patch("/profil1/:id", createProfil1);
router.delete("/profil1/:id", deleteProfil1);

export default router;
