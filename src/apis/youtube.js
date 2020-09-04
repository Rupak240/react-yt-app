import axios from "axios";

const KEY = "AIzaSyDhCYLMB9LIo0GQ4Ji_XEpV4tVC2PlGPzg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
