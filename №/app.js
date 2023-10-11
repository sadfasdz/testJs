const url =
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

async function getPosts(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  const posts = await getPosts(url);
  let rows = 50;
  let currentPage = 1;

  function postsRendering(arrData, quantityPages, page) {
    const postsEl = document.querySelector(".table-body");
    postsEl.innerHTML = "";
    page--;
    const start = quantityPages * page;
    const end = start + quantityPages;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((elem) => {
      const postEl = document.createElement("tr");
      postEl.classList.add("post");
      postEl.innerHTML = `
                <td class="post-description">
                ${elem.address}
                </td>
                <td class="post-description">
                ${elem.city}
                </td>
                <td class="post-description">
                ${elem.fname}
                </td>
                <td class="post-description">
                ${elem.lname}
                </td>
                <td class="post-description">
                ${elem.state}
                </td>
                <td class="post-description">
                ${elem.tel}
                </td>
                <td class="post-description">
                ${elem.zip}
                </td>
      `;
      postsEl.appendChild(postEl);
    });
  }

  function paginationRendering(arrData, quantityPages) {
    const paginationEl = document.querySelector(".pagination");
    const pagesCount = Math.ceil(arrData.length / quantityPages);
    const ulEl = document.createElement("ul");
    ulEl.classList.add("pagination__list");
    for (let i = 0; i < pagesCount; i++) {
      const liEl = paginationBtnRendering(i + 1);
      ulEl.append(liEl);
    }
    paginationEl.append(ulEl);
  }

  function paginationBtnRendering(page) {
    const liEl = document.createElement("li");
    liEl.classList.add("pagination__item");

    liEl.textContent = page;
    if (currentPage === page) {
      liEl.classList.add("pagination__item--active");
    }

    liEl.addEventListener("click", () => {
      postsRendering(posts, rows, page);

      let currentItemLi = document.querySelector(".pagination__item--active");

      currentItemLi.classList.remove("pagination__item--active");
      liEl.classList.add("pagination__item--active");
    });
    return liEl;
  }

  const decreasing = document.querySelectorAll(".arrow-down");
  const increase = document.querySelectorAll(".arrow-up");

  decreasing.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      switch (arrow.parentElement.dataset.desc) {
        case "phone":
          decreas("tel");
          break;
        case "name":
          decreas("lname");
          break;
        case "surname":
          decreas("fname");
          break;
        case "city":
          decreas("city");
          break;
        case "address":
          decreas("address");
          break;
        case "state":
          decreas("state");
          break;
        case "zip":
          decreas("zip");
          break;
      }
    });
  });

  function decreas(text) {
    postsRendering(
      posts.sort((a, b) => {
        if (typeof a[text] === "number" || typeof b[text] === "number") {
          return b[text] - a[text];
        } else {
          return b[text].localeCompare(a[text]);
        }
      }),
      rows,
      currentPage
    );
  }

  function increas(text) {
    postsRendering(
      posts.sort((a, b) => {
        if (typeof a[text] === "number" || typeof b[text] === "Number") {
          return a[text] - b[text];
        } else {
          return a[text].localeCompare(b[text]);
        }
      }),
      rows,
      currentPage
    );
  }

  increase.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      switch (arrow.parentElement.dataset.desc) {
        case "phone":
          increas("tel");
          break;
        case "name":
          increas("lname");
          break;
        case "surname":
          increas("fname");
          break;
        case "city":
          increas("city");
          break;
        case "address":
          increas("address");
          break;
        case "state":
          increas("state");
          break;
        case "zip":
          increas("zip");
          break;
      }
    });
  });

  postsRendering(posts, rows, currentPage);

  paginationRendering(posts, rows);
}

main();

// let i = 0;

// const func = () => {
//   i++;

//   func();
// };

// try {
//   func();
// } catch (e) {
//   // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
//   console.log(i);
// }
