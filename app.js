import axios from "axios";

async function getData(user_id) {
  try {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );
    // users.push(posts)
    const a = { ...users, posts: [posts[0]] };
    console.log(a);
  } catch (e) {
    console.log(e);
  }
}

export default getData;
