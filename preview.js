//// TODO: move all data to json !!!!!!!!
const charities_obj = [{
    id : 1,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_1.png",
    rating : "3.5",
    reviews : []
    },
    {
    id : 2,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_2.jpg",
    rating : "4.9",
    reviews : ["review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 3,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_3.jpg",
    rating : "4.3",
    reviews : []
    },
    {
    id : 4,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_4.jpg",
    rating : "4.8",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    }
]

const products_obj = [{
    id : "0",
    name : "Robert Steven",
    product_name : "Siphonophore",
    type : "product",
    preview_img : "src/a_robert_connett_Siphonophore.jpg",
    price : 78.70,
    rating : 5.0,
    reviews : ["review-1"]
    },
    {
    id : "1",
    name : "Kurun Warun",
    product_name : "Lines",
    type : "product",
    preview_img : "src/Kurun_Warun_Body_Paint_0.jpg",
    price : 50.70,
    rating : 3.6,
    reviews : ["review-1"]
    },
    {
    id : "2",
    name : "Kurun Warun",
    product_name : "Lines",
    type : "product",
    preview_img : "src/Kurun_Warun_Body_Paint.jpg",
    price : 500,
    rating : 4.9,
    reviews : ["review-1"]
    },
    {
    id : "3",
    name : "Natasha Bowdoin",
    product_name : "Abstraction N3",
    type : "product",
    preview_img : "src/Natasha Bowdoin_3.jpg",
    price : 280,
    rating : 4.2,
    reviews : ["review-1"]
    },
    {
    id : "3",
    name : "Natasha Bowdoin",
    product_name : "Abstraction N56",
    type : "product",
    preview_img : "src/Natasha Bowdoin_2.jpg",
    price : 230,
    rating : 4.1,
    reviews : ["review-1"]
    },
    {
    id : "4",
    name : "Natasha Bowdoin",
    product_name : "Abstraction N98",
    type : "product",
    preview_img : "src/Natasha Bowdoin_1.jpg",
    price : 148,
    rating : 4.7,
    reviews : ["review-1"]
    },
    {
    id : "5",
    name : "Natasha Bowdoin",
    product_name : "Abstraction",
    type : "product",
    preview_img : "src/Natasha Bowdoin_0.jpg",
    price : 200,
    rating : 3.9,
    reviews : ["review-1"]
    },
    {
    id : "6",
    name : "Robert Steven",
    product_name : "Sea Creatures",
    type : "product",
    preview_img : "src/robert_steven_Sea Creatures.jpg",
    price : 1570,
    rating : 4.5,
    reviews : ["review-1"]
    },
    {
    id : "7",
    name : "Dan Seagrave",
    product_name : "Tree",
    type : "product",
    preview_img : "src/dan_seagrave_tree.jpg",
    price : 99.70,
    rating : 3.2,
    reviews : ["review-1"]
    },
    {
    id : "8",
    name : "Dan Seagrave",
    product_name : "Tree",
    type : "product",
    preview_img : "src/dan_seagrave_decimation.jpg",
    price : 250,
    rating : 4.4,
    reviews : ["review-1"]
    },
    {
    id : "9",
    name : "Dan Seagrave",
    product_name : "Decimation 1",
    type : "product",
    preview_img : "src/dan_seagrave_decimation_0.jpg",
    price : 185,
    rating : 4.9,
    reviews : ["review-1"]
    },
    {
    id : "10",
    name : "Dan Seagrave",
    product_name : "Decimation 2",
    type : "product",
    preview_img : "src/Dan Seagrave_1.jpg",
    price : 98,
    rating : 4.1,
    reviews : ["review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "11",
    name : "Dan Seagrave",
    product_name : "Sot",
    type : "product",
    preview_img : "src/Dan Seagrave Sot.jpg",
    price : 108,
    rating : 4.1,
    reviews : ["review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "12",
    name : "Dan Seagrave",
    product_name : "City",
    type : "product",
    preview_img : "src/robert_steven_city.jpg",
    price : 900,
    rating : 4.6,
    reviews : ["review-1", "review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "13",
    name : "Dan Seagrave",
    product_name : "World",
    type : "product",
    preview_img : "src/cover9_detail_den_s.jpg",
    price : 100,
    rating : 4.9,
    reviews : ["review-1", "review-1", "review-1"]
    },
    {
    id : "14",
    name : "Robert Steven",
    product_name : "Nautical",
    type : "product",
    preview_img : "src/nautical-art-fish-art_.jpg",
    price : 110,
    rating : 4.0,
    reviews : ["review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "15",
    name : "Robert Steven",
    product_name : "Sea Creatures",
    type : "product",
    preview_img : "src/timeline-photos-robert-richard.jpg",
    price : 130,
    rating : 4.4,
    reviews : ["review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1"]
    },
]

const artists_obj = [{
    id : 1,
    name : "Natasha Bowdoin",
    type : "artist",
    preview_img : "src/Natasha Bowdoin_artist.jpg",
    rating : "3.8",
    reviews : ["review-1", "review-2", "review-3"]
    },
    {
    id : 2,
    name : "Robert Steven",
    type : "artist",
    preview_img : "src/Robert_Steven_artist.jpg",
    rating : "4.3",
    reviews : ["review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 4,
    name : "Kurun Warun",
    type : "artist",
    preview_img : "src/kurun_warun_artist.jpg",
    rating : "4.1",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 5,
    name : "Dan Seagrave",
    type : "artist",
    preview_img : "src/Dan_Seagrave_artist.jpg",
    rating : "4.7",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    }
]

let filteredProducts = products_obj


class Preview {
    constructor(data_obj, filter) {
        this.data_obj = data_obj;
        this.filter = filter;
    }

    get data_obj() {
        return this._data_obj;
    }

    set data_obj({id = null, name = null, product_name = null, type = null, preview_img = null, price = null, rating = null, reviews = null} =
        {id : "0", name : null, product_name : null, type : null, preview_img : null, price: "0.0", rating : "0.0", reviews : "0"}) {
        this._data_obj = {id, name, product_name, type, preview_img, price, rating, reviews};
    }

    buildProductPreview(block) {
        const div = document.createElement('div');
        div.classList.add('product-preview');
        // div.setAttribute("onclick", "openProduct()");
        block.appendChild(div);

        this.creatPreviewImg(div); //////?????

        const info = document.createElement('div');
        info.style.width = "85%";
        info.style.margin = "auto";
        div.appendChild(info);

        /// span with name of product
        if (this.data_obj.type === "product") {
            Preview.createRegTextLine(this.data_obj.product_name, info);

            const br = document.createElement('br');
            info.appendChild(br);
        }

        /// span with name of artist
        Preview.createRegTextLine(this.data_obj.name, info);

        const br1 = document.createElement('br');
        info.appendChild(br1);

        /// span with price
        if (this.data_obj.type === "product")
            Preview.createRegTextLine(`$ ${this.data_obj.price}`, info);


        /// div with rating and reviews
        const div1 = document.createElement('div');
        div1.style.width = "100%";
        div1.style.minHeight = "10px";
        div1.classList.add('unit-text');
        info.appendChild(div1);

        Preview.createRegTextLine(this.data_obj.rating, div1);
        Preview.createRegTextLine(`${this.data_obj.reviews.length} reviews`, div1);
    }

    /// TODO: add scaling
    creatPreviewImg(parent) {
        const div = document.createElement('div');
        div.classList.add('img-box');
        parent.appendChild(div);

        const img = document.createElement('img');
        img.classList.add('preview-img');
        img.setAttribute("src", this.data_obj.preview_img);
        div.appendChild(img);
    }

    static createRegTextLine(text, parent) {
        const span_name = document.createElement('span');
        span_name.textContent = text;
        span_name.classList.add('normal');
        parent.appendChild(span_name);
    }
}

function openProduct() {
    alert("Not now");
}


function loadIndex(){
  /// creating section with artists
  const artists = document.querySelector("#artists-block");
  /// creating section with products
  const products = document.querySelector("#products-block");
  /// creating section with charities
  const charities = document.querySelector("#charities-block");

  for(let i = 0; i < 4; ++i){
      const artist = new Preview(artists_obj[i]);
      artist.buildProductPreview(artists);

      const product = new Preview(products_obj[i]);
      product.buildProductPreview(products);

      const charity = new Preview(charities_obj[i]);
      charity.buildProductPreview(charities);
  }
}



// Products Page

let newUnitDiv = () => {
  let div = document.createElement('div')
  div.classList.add('content')
  div.classList.add('unit')
  return div
}

let newProduct = (data,index,div)=> {
  const product = new Preview(data[index]);
  product.buildProductPreview(div);
  return product
}



function loadProducts(){

  //console.log(filteredProducts);

  const select = document.querySelector("select")
  const products = document.querySelector("#products");
  while (products.firstElementChild) products.removeChild(products.firstElementChild)

  let div = newUnitDiv()
  filteredProducts.forEach((el,idx,array)=>{
    if (idx % 4 < 3) {
      const product = newProduct(array, idx, div)
    } else {
      const product = newProduct(array, idx, div)
      products.appendChild(div)
      div = newUnitDiv()
    }
    if (idx % 4 || array.length < 4) products.appendChild(div)
  })
}

let sortByKey = (array,key)=>{
  array.sort((a,b)=> a[key] < b[key] ? -1 : 1)
  loadProducts()
}


let createOptions = () => {
  const select = document.querySelector("select")
  while(select.firstElementChild.nextElementSibling) select.removeChild(select.lastElementChild)

  const uniqueArtists = products_obj.reduce((acc,product)=>{
    if (!acc[product.name]) acc[product.name] = product
    return acc
  },{})
  Object.keys(uniqueArtists)
  .sort((a,b) => a < b ? -1 : 1)
  .map(name => {
    const option = document.createElement("option")
    option.value = name
    option.innerText = name
    select.appendChild(option)
    return name
  })
}


document.addEventListener("click",(event)=>{
  if (event.target.id === "sort-by-id") sortByKey(filteredProducts,'id')
  if (event.target.id === "sort-by-artist") sortByKey(filteredProducts,'name')
  if (event.target.id === "sort-by-name") sortByKey(filteredProducts,'product_name')
  if (event.target.id === "sort-by-price") sortByKey(filteredProducts,'price')
  if (event.target.id === "sort-by-rating") sortByKey(filteredProducts,'rating')

  scrollTo(0,0)
})

const select = document.querySelector("select")
select.addEventListener("change", ()=>{
  let name = select.children[select.selectedIndex].value
  //console.log(name);
  //console.log(filteredProducts);
  if (name !== 'All Artists') {
    filteredProducts = products_obj.filter(product => product.name === name)
  } else {
    filteredProducts = products_obj
  }
  //console.log(filteredProducts);
  loadProducts()
})
//
// id : 1,
// name : "K. Malevich",
// product_name : "Black Square",
// type : "product",
// preview_img : "src/black_square_malevich.jpg",
// price : "1",
// rating : "3.5",
// reviews : ["review-1", "review-2", "review-3"]
createOptions()


// function getItems(filepath, cb){
//     fs.readFile(filename, 'utf-8', function(error, data){
//       if(error) console.log('Error:', error)

//       cb(JSON.parse(data))
//     })
// }
