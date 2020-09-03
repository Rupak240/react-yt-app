import axios from 'axios'

const KEY = 'AIzaSyBR5CktnCWhynMcG1Kpu89DpGmgawueiTc'

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: KEY,
        }
    }
)

