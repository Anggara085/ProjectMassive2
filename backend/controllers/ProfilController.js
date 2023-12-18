import Profil from "../models/ProfilModel.js";

export const getProfil = async (req, res) => {
  try {
    const profiles = await Profil.findAll();
    return res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProfilByid = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profil.findByPk(id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    return res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const saveProfil = async (req, res) => {
  const { name, image, url } = req.body;

  try {
    const newProfile = await Profil.create({ name, image, url });
    return res.json(newProfile);
  } catch (error) {
    console.error("Error creating profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProfil = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProfile = await Profil.destroy({
      where: {
        id: id,
      },
    });

    if (!deletedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    return res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProfil = async (req, res) => {
  const { id } = req.params;
  const { name, image, url } = req.body;

  try {
    const updatedProfile = await Profil.update(
      { name, image, url },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedProfile[0] === 0) {
      return res.status(404).json({ error: "Profile not found" });
    }

    const updatedProfileData = await Profil.findByPk(id);
    return res.json(updatedProfileData);
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
