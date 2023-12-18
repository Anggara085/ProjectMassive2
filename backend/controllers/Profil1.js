// ProfileController.js

import Profile from "../models/Profil1Model.js";

export const getProfil1 = async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    return res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProfilByid1 = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    return res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const saveProfil1 = async (req, res) => {
  const { username, name, image, url, email, company } = req.body;
  const profileImage = req.files ? req.files.profileImage : null; // Ambil file gambar dari request

  try {
    if (!profileImage) {
      return res.status(400).json({ error: "Profile image is required" });
    }

    // Proses penyimpanan data dan gambar di sini
    const newProfile = await Profile.create({
      username,
      name,
      image,
      url,
      email,
      company,
      profileImage: profileImage.name, // Simpan nama file gambar ke dalam model
    });

    return res.json(newProfile);
  } catch (error) {
    console.error("Error saving profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProfil1 = async (req, res) => {
  const { username, name, image, url, email, company } = req.body;

  try {
    const newProfile = await Profile.create({
      username,
      name,
      image,
      url,
      email,
      company,
    });
    return res.json(newProfile);
  } catch (error) {
    console.error("Error creating profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProfil1 = async (req, res) => {
  const { id } = req.params;
  const { username, name, image, url, email, company } = req.body;

  try {
    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    await profile.update({ username, name, image, url, email, company });

    return res.json(profile);
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProfil1 = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    await profile.destroy();

    return res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
