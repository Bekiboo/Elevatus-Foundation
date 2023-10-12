import { getPosts } from '$lib/db/blog';
import { blogPosts } from '$lib/stores/blog';

let posts;
blogPosts.subscribe((value) => {
  posts = value;
});

export const load = async () => {
  // If the blogPosts store is empty, then fetch blog posts from DB
  if (posts != null) {
    await getPosts()
      .then((res) => {
        blogPosts.set(res);
      })
      .catch((err) => {
        blogPosts.set(null);
        console.log(err);
      });
  }
};
