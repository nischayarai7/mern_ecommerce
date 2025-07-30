import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary'

// Configuration
//multer sanga connection built garnaa
cloudinary.config({
    cloud_name: 'dtezwhcvf',
    api_key: '981683587276118',
    api_secret: 'Srwd2qJ4G4vdY8qonSRNUz6krbI' // Click 'View API Keys' above to copy your API secret
});



const storage = new CloudinaryStorage({
    //connection pass gareko
    cloudinary: cloudinary,
    params: {
        folder: 'image',
        // format: async (req, file) => 'png', // supports promises as well
        // public_id: (req, file) => 'computed-filename-using-request',
    },
});

const uploads = multer({ storage: storage });

export { uploads, cloudinary }