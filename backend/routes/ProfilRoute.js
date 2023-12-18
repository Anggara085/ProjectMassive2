import express from "express";
import {
  getProfil,
  getProfilByid,
  saveProfil,
  updateProfil,
  deleteProfil,
} from "../controllers/ProfilController.js";
const router = express.Router();

router.get("/profil", getProfil);
router.get("/profil/:id", getProfilByid);
router.post("/profil", saveProfil);
router.patch("/profil/:id", updateProfil); // Implementasi updateProfil
router.delete("/profil/:id", deleteProfil); // Implementasi deleteProfil

export default router;
