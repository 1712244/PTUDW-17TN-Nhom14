const Resize = require('./resize');
const path_image = "./public/images"
const path = require('path');

async function downloadImage(req, res) {
    // try {
    // folder upload
    const { imageName } = req.body
    const imagePath = path.join("", path_image);
    console.log(imagePath);
    // call class Resize
    const fileUpload = new Resize(imagePath);
    if (!req.file) {

        res.status(401).json({ error: 'Please provide an image' });
    }
    const filename = await fileUpload.save(req.file.buffer);

    return res.status(200).json({ result: "OK", name: filename });
    // } catch (error) {
    //     res.status(500).send({ message: error });
    // }

}




module.exports = {
    downloadImage: downloadImage
}