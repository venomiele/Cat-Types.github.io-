const section = document.querySelector(".grid-container");
const filterBtn = document.querySelectorAll(".filter-btn");

// Array of local objects
const kittens = [
  { id: 1,
    title: "British Shorthair",
    category: "medium",
    age: 17,
    img: "https://www.petsloo.com/wp-content/uploads/2020/09/British-Shorthair-Cat-Breed-Health.jpg",
    desc: "The British Shorthair is an easygoing feline. She enjoys affection but isn’t needy and dislikes being carried."

  },
  { id: 2,
    title: "Birman",
    category: "medium",
    age: 15,
    img: "https://www.purina.com.au/-/media/project/purina/main/breeds/cat/cat_birman_desktop.jpg?h=475&la=en&w=825&hash=50C40D08085618982FA07B02137B4BDB",
    desc: "The Birman is a cat of distinction as well as legend. With their mesmerizing blue eyes."

  },
  { id: 3,
    title: "American Curl",
    category: "small",
    age: 13,
    img: "https://s36537.pcdn.co/wp-content/uploads/2018/03/American-Curl-on-a-couch.jpg.optimal.jpg",
    desc: "The American Curl brings a smile to everyone who meets her."

  },
  { id: 4,
    title: "Exotic Shorthair",
    category: "medium",
    age: 15,
    img: "https://vetstreet.brightspotcdn.com/dims4/default/4af17a9/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fda%2F3f%2Faaaf93ab43f1aa42df7fc0c38e28%2FExotic-Shorthair-AP-1CEWS1-645sm3614.jpg",
    desc: "Known as the lazy man’s Persian, the Exotic Shorthair has the body type and easygoing nature of the Persian."

  },
  { id: 5,
    title: "Singapura",
    category: "small",
    age: 15,
    img: "https://myhappypetshop.com/pic/breeds/singapura-cat-breed-facts-information",
    desc: "Friendly and social, they enjoy cats and cat friendly dogs, but dislike loud noises."

  },
  { id: 6,
    title: "Devon Rex",
    category: "small",
    age: 15,
    img: "https://www.purina.com.au/-/media/project/purina/main/breeds/cat/cat_devon-rex_desktop.jpg?h=475&la=en&w=825&hash=6E725E6A0932835DF36DD27DEF9638C4",
    desc: "The Devon Rex is sometimes called a poodle who purrs."

  },
  { id: 7,
    title: "Munchkin Cat",
    category: "small",
    age: 12,
    img: "https://vetstreet.brightspotcdn.com/dims4/default/fbf0716/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F44%2Fca%2F0d2d9db049ff933701e6ab7fc477%2Fmunckin-kitten-ap-vzjbhr-645-x-380.jpg",
    desc: "They may have short legs, but Munchkin Cats don’t let it hold them back."

  },
  { id: 8,
    title: "Norwegian Cat",
    category: "medium",
    age: 14,
    img: "https://cat-world.com/wp-content/uploads/2017/02/norwegian-forest-cat.jpg",
    desc: "They’re large and athletic, so you may find them sitting atop the highest point in your home."

  }
]

window.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed('.animate', {
        strings: ["Cats", 
        "Kittens"],
        typeSpeed: 100,
        backDelay: 900,
        backSpeed: 100,
        cursorChar: "|",
        startDelay: 2000,
        smartBackspace: true,
      });

// Buttons
filterBtn.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = kittens.filter(function(kittenItem){
      if(kittenItem.category === category) {
        return kittenItem;
      }
    });
      if(category === "all"){
        displayItems(kittens)
      } else {
        displayItems(menuCategory);
      }

  })
})

displayItems(kittens);

function displayItems(Items) {
      let displayCats = Items.map(function (item){
return `<article class="menu-item">
    <img src="${item.img}" alt="menu-item" class="photo">
    <div class="item-info">
        <header>
        <h4 class="item-title">${item.title}</h4>
    <h4 class="age">${item.age} yrs</h4>
</header>
<hr />
<p class="description">${item.desc}</p>
    </div>
</article>`;
      });
      displayCats = displayCats.join("");
      section.innerHTML = displayCats;
    }
})

