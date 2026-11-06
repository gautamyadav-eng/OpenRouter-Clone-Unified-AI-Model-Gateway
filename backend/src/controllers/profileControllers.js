import userData from "../models/Users.js";

const getProfile = async (req, res) => {
  try {
    const user = await userData
      .findById(req.user.userId)
      .select("name email createdAt");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      profile: user,
    });
  } catch (error) {
    console.log("Profile error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default getProfile;