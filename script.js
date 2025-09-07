// console.log('connected...');

const allCategoris = document.getElementById('all_catagories_container'); // allCatagories container
const allPlantsContainer = document.getElementById('all_plants_container');

const loadAllCategories = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then((response) => response.json())
    .then((data) => showAllCategories(data.categories));
};

const showAllCategories = (categories) => {
  categories.forEach((category) => {
    const singleCategoryName = category.category_name;
    allCategoris.innerHTML += `
            <li id="${category.id}" onclick="loadSingleCategory('${category.id}')"
                class="hover:bg-green-700 rounded-xs p-2.5 hover:text-white cursor-pointer"
              >
                ${singleCategoryName}
            </li>`;
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
              <img src="${category.image}" alt=""/>
              <h4 class="font-semibold">${category.name}</h4>
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
                class="bg-green-700 text-white p-3 rounded-4xl w-full cursor-pointer mt-2"
              >
                Add to Cart
              </button>
            </div>`;
  });
};
loadAllCategories();
