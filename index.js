const fs = require("fs");

function getImageSizeInBytes(imagePath) {
  try {
    const stats = fs.statSync(imagePath);
    const fileSizeInBytes = stats.size;
    return fileSizeInBytes;
  } catch (error) {
    console.error("Error:", error);
    return -1;
  }
}

module.exports = getImageSizeInBytes;
