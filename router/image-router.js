const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const axios = require('axios');
const request = require('request');

const Image = require('../model/image-model');
const router = new express.Router();

const upload = multer({
    fileFilter(req, file, callback) {
        !file.originalname.match(/\.(jpg|jpeg|png|txt)$/)
            ? callback(new Error('Only jpg, jpeg, png file'))
            : callback(undefined, true);
    }
})

router.post('/img', upload.single('image'), async (req, res) => {
    try {
        const image = new Image({
            caption:req.body.caption,
            url:req.body.imgData.url
        })

        await image.save();
        // const buffer = await sharp(req.file.buffer).png().toBuffer();

        // const options = {
        //     'method': 'Post',
        //     'url': 'https://api.imgbb.com/1/upload?key=430f22ae6e75ba471e67081eec99d78b',
        //     'header': {},
        //     formData: {
        //         'image': {
        //             'value': buffer,
        //             'options': {
        //                 'filename': `Thien`,
        //                 'contentType': null
        //             }
        //         }
        //     }
        // };

        
        
    } catch (error) {
        console.log(error)
    }


    // const image = new Image({
    //     ...req.body,
    //     url:url,
    // })

});

module.exports = router;