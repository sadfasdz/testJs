const access_token =
  "a0da9c8ba0da9c8ba0da9c8b4fa3cf7831aa0daa0da9c8bc5f9415406a5914c7c1a6a8f";

const owner_id = "59120170";

const url = `https://api.vk.com/method/wall.get?access_token=${access_token}&owner_id=-${owner_id}&count=100&v=5.154`;

async function getPosts(url) {
  const response = await fetch(url);
  const data = await response.json();
  showPosts(data);
  savePosts();

  return data;
}

function showPosts(posts) {
  const list = document.querySelector(".posts");
  console.log(posts);
  console.log(posts.response.items[1].date);
  for (let i = 1; i < posts.response.items.length; i++) {
    const li = document.createElement("li");
    li.classList.add("posts-item");
    li.innerHTML = `${
      posts.response.items[i].attachments[0]?.photo?.sizes[7]?.url
        ? `<img src="${posts.response.items[i].attachments[0]?.photo?.sizes[7].url}"> `
        : "<div>no img</div>"
    }
     
    <div class="post-text">Текст поста: ${posts.response.items[i].text}</div>
                  <div class="post-date">Дата поста: ${new Date(
                    posts.response.items[i].date * 1000
                  ).toLocaleDateString()}</div>`;
    list.append(li);
  }
}
getPosts(url);

const arrPosts = [];
function savePosts() {
  let callback = (entries, observer) => {
    const post = {};
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        post.img = entry.target.children[0].currentSrc;
        post.text = entry.target.children[1].innerText;
        post.date = entry.target.children[2].innerText;
        arrPosts.push(post);
        try {
          localStorage.setItem("posts", JSON.stringify(arrPosts));
        } catch {
          const posts = JSON.parse(localStorage.getItem("posts"));
          posts.shift();
          localStorage.setItem("posts", JSON.stringify(arrPosts));
        }

        observer.unobserve(entry.target);
      }
    });
  };

  let options = {
    root: document.querySelector(".posts"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(callback, options);

  let postItems = document.querySelectorAll(".posts-item");

  postItems.forEach((target) => {
    observer.observe(target);
  });
}
