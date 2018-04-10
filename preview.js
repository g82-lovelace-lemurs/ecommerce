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
    preview_img : "src/charity_2.png",
    rating : "4.9",
    reviews : ["review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 3,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_3.jpeg",
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
    id : 1,
    name : "K. Malevich",
    product_name : "Black Square",
    type : "product",
    preview_img : "src/black_square_malevich.jpg",
    price : "1",
    rating : "3.5",
    reviews : ["review-1", "review-2", "review-3"]
    },
    {
    id : 2,
    name : "Jackson Pollock",
    product_name : "N 5",
    type : "product",
    preview_img : "src/n_5_jackson_pollock.jpg",
    price : "2 300 000",
    rating : "2.0",
    reviews : ["review-1", "review-2", "review-3", "review-1", "review-2", "review-3"]
    },
    {
    id : 3,
    name : "Leonardo da Vinci",
    product_name : "Mona Lisa",
    type : "product",
    preview_img : "src/Mona-Lisa-product.jpg",
    price : "99.99",
    rating : "4.3",
    reviews : ["review-1", "review-2", "review-3", "review-1", "review-2", "review-3"]
    },
    {
    id : 4,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 5,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 6,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    },
    {
    id : 7,
    name : "Andy Warhol",
    product_name : "Red Cat",
    type : "product",
    preview_img : "src/21599706478_andy_warhol.jpg",
    price : "15.70",
    rating : "5.0",
    reviews : ["review-1"]
    }
]

const artists_obj = [{
    id : 1,
    name : "Pablo Picasso",
    type : "artist",
    preview_img : "src/pablo-picasso-designer.jpg",
    rating : "4.5",
    reviews : ["review-1", "review-2", "review-3"]
    },
    {
    id : 2,
    name : "Leonardo da Vinci",
    type : "artist",
    preview_img : "src/leonardo_da_vinci_designer.jpg",
    rating : "4.8",
    reviews : ["review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 3,
    name : "Van Gogh",
    type : "artist",
    preview_img : "src/van_gogh_designer.jpg",
    rating : "4.7",
    reviews : []
    },
    {
    id : 4,
    name : "Andy Warhol",
    type : "artist",
    preview_img : "src/Andy_Warhol.jpg",
    rating : "4.7",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    }
]

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
        div1.classList.add('unit');
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

//
// function loadProducts(){
//   /// creating section with products
//
//   const products = document.querySelector("#products");
//   for( let j = 0; j < Math.floor(products_obj.length/4); j++){
//     const div = document.createElement('div')
//     div.classList.add('content')
//     div.classList.add('unit')
//     for(let i = 0; i < 4; ++i){
//         const product = new Preview(products_obj[i]);
//         product.buildProductPreview(div);
//         products.appendChild(div)
//     }
//   }
// }

let newUnitDiv = () => {
  let div = document.createElement('div')
  div.classList.add('content')
  div.classList.add('unit')
  return div
}
let newProduct = (index)=> {
  const product = new Preview(products_obj[index]);
  product.buildProductPreview(div);
}


function loadProducts(){

  const products = document.querySelector("#products");
  // let div = document.createElement('div')
  // div.classList.add('content')
  // div.classList.add('unit')
  let div = newUnitDiv()

  for( let i = 0; i < products_obj.length; i++){
    if (i % 4 < 3) {
      const product = new Preview(products_obj[i]);
      product.buildProductPreview(div);
    } else {

      const product = new Preview(products_obj[i]);
      product.buildProductPreview(div);

      products.appendChild(div)

      div = document.createElement('div')
      div.classList.add('content')
      div.classList.add('unit')
    }

    if (i % 4) products.appendChild(div)
  }
}


// function getItems(filepath, cb){
//     fs.readFile(filename, 'utf-8', function(error, data){
//       if(error) console.log('Error:', error)

//       cb(JSON.parse(data))
//     })
// }
