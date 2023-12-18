import express from "express";
import {
  getProfil,
  getProfilByid,
  saveProfil,
  updateProfil,
  deleteProfil,
} from "../controllers/ProfilController.js";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { getKontak, createKontak } from "../controllers/Kontak.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

import {
  getProfil1,
  getProfilByid1,
  saveProfil1,
  updateProfil1,
  deleteProfil1,
} from "../controllers/Profil1.js";

const router = express.Router();

router.get("/profil", getProfil);
router.get("/profil/:id", getProfilByid);
router.post("/profil", saveProfil);
router.patch("/profil/:id", updateProfil); // Implementasi updateProfil
router.delete("/profil/:id", deleteProfil); // Implementasi deleteProfil
router.get("/users", verifyToken, getUsers);
router.get("/kontak", getKontak);
router.post("/kontak", createKontak);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/profil1", getProfil1);
router.get("/profil1/:id", getProfilByid1);
router.post("/profil1", saveProfil1);
router.patch("/profil1/:id", updateProfil1);
router.delete("/profil1/:id", deleteProfil1);

export default router;
