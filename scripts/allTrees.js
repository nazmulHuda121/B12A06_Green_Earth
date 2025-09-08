// second step ... show the all plants
const loadAllPlants = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
    .then((res) => res.json())
    .then((data) => showAllPlants(data.plants));
};

/** "id": 1,
"image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
"name": "Mango Tree",
"description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
"category": "Fruit Tree",
"price": 500 */

const showAllPlants = (plants) => {
  allPlantsContainer.innerHTML = '';
  plants.forEach((plant) => {
    allPlantsContainer.innerHTML += `
            <div class="bg-white p-4 rounded-xl space-y-3 mb-5 size-fit">
              <img src="${plant.image}" alt="" class="rounded-xl h-90 w-full"/>
              <h4 onclick="loadTreeDetails(${plant.id})" class="font-semibold cursor-pointer hover:text-green-600 hover:underline inline">${plant.name}</h4>
              <p class="text-black/60">
                ${plant.description}
              </p>
              <div class="flex justify-between">
                <button
                  class="bg-green-200 text-green-700 text-[14px] px-3 py-1.5 rounded-2xl cursor-pointer"
                >
                  ${plant.category}
                </button>
                <span>$${plant.price}</span>
              </div>
              <button id="${plant.id}"
                class="bg-green-700 text-white p-3 rounded-4xl w-full cursor-pointer mt-2"
              >
                Add to Cart
              </button>
            </div>`;
  });
};
loadAllPlants();
