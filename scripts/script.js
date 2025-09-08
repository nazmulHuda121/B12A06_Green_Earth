// console.log('connected...');

const allCategoris = document.getElementById('all_catagories_container'); // allCatagories container
const allPlantsContainer = document.getElementById('all_plants_container');
const addToCardContainer = document.getElementById('add_to_card_container');

const loadAllCategories = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then((response) => response.json())
    .then((data) => showAllCategories(data.categories));
};

const showAllCategories = (categories) => {
  categories.forEach((category) => {
    const singleCategoryName = category.category_name;
    allCategoris.innerHTML += `
            <li onclick="loadSingleCategory('${category.id}')"
                class="hover:bg-green-700 rounded-xs p-2 mb-2 hover:text-white cursor-pointer"
              >
                ${singleCategoryName}
            </li>`;
  });
  allCategoris.addEventListener('click', (e) => {
    const allLI = document.querySelectorAll('li');
    // console.log(allLI);
    allLI.forEach((li) => {
      li.classList.remove('bg-green-700');
      li.classList.remove('text-white');
    });
    if (e.target.nodeName === 'LI') {
      e.target.classList.add('bg-green-700');
      e.target.classList.add('text-white');
    }
  });
};

// load and display single categories ...............................
const loadSingleCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((category) => displaySingleCategory(category.plants));
};
const displaySingleCategory = (singleCategories) => {
  allPlantsContainer.innerHTML = '';
  singleCategories.forEach((category) => {
    allPlantsContainer.innerHTML += `
            <div class="bg-white p-4 rounded-xl space-y-3 mb-5 size-fit">
              <img src="${category.image}" alt="" class="rounded-xl"/>
              <h4 onclick="loadTreeDetails(${category.id})" class="font-semibold cursor-pointer hover:text-green-600 hover:underline inline">${category.name}</h4>
              <p class="text-black/60">
                ${category.description}
              </p>
              <div class="flex justify-between">
                <button
                  class="bg-green-200 text-green-700 text-[14px] px-3 py-1.5 rounded-2xl cursor-pointer"
                >
                  ${category.category}
                </button>
                <span>$${category.price}</span>
              </div>
              <button
                id="${category.id}"
                class="bg-green-700 text-white p-3 rounded-4xl w-full cursor-pointer mt-2"
              >
                Add to Cart
              </button>
            </div>`;
  });
};
// Load single Tree Modal and show details..............
const loadTreeDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayTreeDetails(details.plants);
};

const displayTreeDetails = async (sngleTreeDetails) => {
  console.log(sngleTreeDetails);
};

// add to card functionality ..........
let total = 0;
allPlantsContainer.addEventListener('click', (e) => {
  if (e.target.innerText === 'Add to Cart') {
    const title = e.target.parentNode.children[1].innerText;
    const priceText = e.target.parentNode.children[3].children[1].innerText;
    const price = Number(priceText.replace('$', ''));
    const id = e.target.parentNode.children[4].id;
    const count = 1;

    // console.log(id);

    addToCardContainer.innerHTML += `
            <div
              class="bg-green-100 p-3 rounded-[4px] flex justify-between items-center"
            >
              <div>
                <h4 class="text-[14px]">${title}</h4>
                <h4 class="text-[14px]">${price} X <span>${count}</span></h4>
              </div>
              <button onclick="handleDeletePrice(this, ${price})" class="text-red-700 font-bold cursor-pointer">X</button>
            </div>`;

    total += price;
  }
  document.getElementById('total_price').innerText = total;
});

const handleDeletePrice = (btn, price, id) => {
  btn.parentNode.remove();

  total = total - price;
  document.getElementById('total_price').innerText = total;
};
loadAllCategories();
