import fs from 'fs/promises';
import path from 'path';

export const RootRoute = require.main.filename;
const fetchingPostFake = async (req, res, next) => {
    const data = await fs.readFile(path.join(__dirname, 'fakeData.json'));
    res.json({
        message: 'SuccessFully',
        posts: data
    })
}

export default fetchingPostFake;