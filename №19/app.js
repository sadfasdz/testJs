const access_token =
  "a0da9c8ba0da9c8ba0da9c8b4fa3cf7831aa0daa0da9c8bc5f9415406a5914c7c1a6a8f";

const owner_id = "59120170";

const url = `https://api.vk.com/method/wall.get?access_token=${access_token}&owner_id=-${owner_id}&count=100&v=5.154`;

const getPosts = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  showPosts(data);
  savePosts(data);
  return data;
};

function showPosts(posts) {
  const list = document.querySelector(".posts");
  console.log(posts);
  for (let i = 1; i < posts.response.items.length; i++) {
    const li = document.createElement("li");
    // const time = new Date().getTime();
    // console.log(time);
    li.innerHTML = `<div class="post-text">${posts.response.items[i].text}</div>
                  <div class="post-date">${new Date(
                    posts.response.items[i].date
                  ).toString()}</div>`;

    // img.src = posts.response.items[1].attachments[0].photo.sizes[2].url;

    list.append(li);
  }
}

function savePosts(posts) {}

getPosts(url);
