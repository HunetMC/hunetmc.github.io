const {
    TUMBLR_API_KEY: api_key
  } = process.env;


export const TumblrAPI = async () => {
  return fetch('https://api.tumblr.com/v2/blog/hunetmc.tumblr.com/posts?api_key=' + api_key);
};

const TumblrPost = async (req, res) => {
    const response = await TumblrAPI();
    const data = await response.json();
    if (response.status === 204 || response.status > 400) {
      return res.status(200).send("404");
    }
    // const posts = data.response.posts;
    const posts = data.response.posts.map((item) => {
        var obj = new Object();
        obj.date = item.date;
        obj.url = item.post_url;
        obj.title = item.title;
        obj.body = item.body;
        obj.slug = item.slug;
        return obj
    })
    return res.status(200).json({
        posts,
    });
};

export default TumblrPost