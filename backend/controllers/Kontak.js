import Kontak from "../models/KontakModel.js";

// Fungsi untuk membuat kontak baru
export const createKontak = async (req, res) => {
  try {
    const { message, name, email, subject } = req.body;

    if (!message || !name || !email || !subject) {
      return res.status(400).json({ error: 'Pastikan semua bidang terisi.' });
    }

    const newKontak = await Kontak.create({
      message: message,
      name: name,
      email: email,
      subject: subject,
    });

    res.status(201).json(newKontak);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan saat membuat kontak baru." });
  }
};


// Fungsi untuk mendapatkan semua kontak
export const getKontak = async (req, res) => {
  try {
    const kontak = await Kontak.findAll({
      attributes: ["id", "message", "name", "email", "subject"],
    });

    res.json(kontak);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data kontak." });
  }
};

