const Admin = require("../../models/admin");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const data = req.body;

  try {
    const admin = await Admin.findOne({ name: data.login });

    console.log(admin);

    if (!admin) return res.status(200).json({ success: false });

    if (admin.password !== data.password)
      return res.status(200).json({ success: false });

    const payload = { admin: true };
    const token = jwt.sign(payload, "admin123");

    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  login,
};
