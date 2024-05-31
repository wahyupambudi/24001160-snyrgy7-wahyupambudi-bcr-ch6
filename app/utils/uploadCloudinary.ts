import { v2 as cloudinary } from 'cloudinary';

export const uploadToCloudinary = async (fileBuffer: Buffer, mimetype: string, folder: string) => {
    const fileBase64 = fileBuffer.toString('base64');
    const file = `data:${mimetype};base64,${fileBase64}`;

    const result = await cloudinary.uploader.upload(file, {
        folder: folder,
        use_filename: true,
    });

    return result;
};
