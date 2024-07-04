# Full Stack Ecommerce App

This project is a Full Stack Ecommerce App. It provides various routes to manage products, including creating, updating, deleting, and fetching product details.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    sh
    git clone https://github.com/parasgoyal175/Mern_e-commerce.git
    

2. Navigate to the project directory:
    sh
    cd <project_directory>
    

3. Install dependencies for the root:
    sh
    npm install
    

4. Navigate to the client directory:
    sh
    cd client
    

5. Install dependencies for the client:
    sh
    npm install
    

### Running the Project

1. Start the server from the root directory:
    sh
    npm start
    

2. Start the client from the client directory:
    sh
    npm start
    

## API Routes

### Product Routes

- *Create Product*
  - POST /create-product
  - Description: Create a new product.
  - Middleware: requireSignIn, isAdmin, formidable
  - Controller: createProductController

- *Get Products*
  - GET /get-product
  - Description: Get all products.
  - Controller: getProductController

- *Get Single Product*
  - GET /get-product/:slug
  - Description: Get details of a single product by its slug.
  - Controller: getSingleProductController

- *Get Product Photo*
  - GET /product-photo/:pid
  - Description: Get the photo of a product by its ID.
  - Controller: productPhotoController

- *Delete Product*
  - DELETE /delete-product/:pid
  - Description: Delete a product by its ID.
  - Controller: deleteProductController

- *Update Product*
  - PUT /update-product/:pid
  - Description: Update product details by its ID.
  - Middleware: requireSignIn, isAdmin, formidable
  - Controller: updateProductController

- *Filter Products*
  - POST /product-filters
  - Description: Filter products based on criteria.
  - Controller: productFiltersController

- *Product Count*
  - GET /product-count
  - Description: Get the total count of products.
  - Controller: productCountController

- *Products Per Page*
  - GET /product-list/:page
  - Description: Get a list of products for a specific page.
  - Controller: productListController

- *Search Product*
  - GET /search/:keyword
  - Description: Search for products by keyword.
  - Controller: searchProductController

- *Related Products*
  - GET /related-product/:pid/:cid
  - Description: Get products related to a specific product and category.
  - Controller: relatedProductController

- *Category Wise Product*
  - GET /product-category/:slug
  - Description: Get products by category.
  - Controller: productCategoryController

## Middleware

- *requireSignIn*
  - Ensures the user is signed in.

- *isAdmin*
  - Ensures the user is an admin.

## License

This project is licensed under the MIT License.
