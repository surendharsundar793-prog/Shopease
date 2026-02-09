import { useEffect, useState, useRef } from "react";
import Productcard from "../Component/Productcard.jsx";
import '../Styles/product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [showAllCategories, setShowAllCategories] = useState(false);

  /* Ref to track touch interactions to prevent double-firing with mouse events */
  const isTouchRef = useRef(false);

  useEffect(() => {
    const apifetch = async () => {
      try {
        let res = await fetch(`https://dummyjson.com/products?limit=0`);
        let data = await res.json();
        setProducts(data.products);
        setAllProducts(data.products);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    apifetch();
  }, []);

  const handleCategoryClick = (category, closeGrid = true) => {
    setActiveCategory(category);
    if (closeGrid) {
      setShowAllCategories(false);
    }

    if (category === "all") {
      setProducts(allProducts);
      return;
    }

    const mensCategories = ["mens-shirts", "mens-shoes", "mens-watches"];
    const womensCategories = [
      "womens-bags", "womens-dresses", "womens-jewellery",
      "womens-shoes", "womens-watches", "tops"
    ];

    let filtered;
    if (category === "mens") {
      filtered = allProducts.filter(item => mensCategories.includes(item.category));
    } else if (category === "womens") {
      filtered = allProducts.filter(item => womensCategories.includes(item.category));
    } else {
      filtered = allProducts.filter(item => item.category === category);
    }
    setProducts(filtered);
  };

  const handleTouchStart = () => {
    isTouchRef.current = true;
  };

  const allCategoriesList = [
    { id: "beauty", label: "Beauty" },
    { id: "fragrances", label: "Fragrances" },
    { id: "furniture", label: "Furniture" },
    { id: "groceries", label: "Groceries" },
    { id: "home-decoration", label: "Home Decor" },
    { id: "kitchen-accessories", label: "Kitchen" },
    { id: "laptops", label: "Laptops" },
    { id: "mens-shirts", label: "Men's Shirts" },
    { id: "mens-shoes", label: "Men's Shoes" },
    { id: "mens-watches", label: "Men's Watches" },
    { id: "mobile-accessories", label: "Mobile Acc" },
    { id: "motorcycle", label: "Motorcycle" },
    { id: "skin-care", label: "Skin Care" },
    { id: "smartphones", label: "Smartphones" },
    { id: "sports-accessories", label: "Sports" },
    { id: "sunglasses", label: "Sunglasses" },
    { id: "tablets", label: "Tablets" },
    { id: "tops", label: "Tops" },
    { id: "vehicle", label: "Vehicle" },
    { id: "womens-bags", label: "Women's Bags" },
    { id: "womens-dresses", label: "Women's Dresses" },
    { id: "womens-jewellery", label: "Women's Jewelry" },
    { id: "womens-shoes", label: "Women's Shoes" },
    { id: "womens-watches", label: "Women's Watches" },
  ];

  if (loading) {
    return <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>Loading products...</div>;
  }

  return (
    <div className="container products-layout">
      {/* Sidebar / Top Bar */}
      <aside className="products-sidebar">
        <div className="category-main-buttons">
          <span
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => {
              handleCategoryClick('all', false);
              setShowAllCategories(!showAllCategories);
            }}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => {
              if (!isTouchRef.current) setShowAllCategories(true);
            }}
          >
            All Products
          </span>
          <span
            className={`category-btn ${activeCategory === 'mens' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('mens')}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => {
              if (!isTouchRef.current) setShowAllCategories(false);
            }}
          >
            Men's
          </span>
          <span
            className={`category-btn ${activeCategory === 'womens' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('womens')}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => {
              if (!isTouchRef.current) setShowAllCategories(false);
            }}
          >
            Women's
          </span>
        </div>

        {/* Hover Grid for All Categories */}
        <div
          className={`category-grid-dropdown ${showAllCategories ? 'visible' : ''}`}
          onMouseLeave={() => setShowAllCategories(false)}
        >
          {allCategoriesList.map((cat) => (
            <span
              key={cat.id}
              className={`grid-category-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </aside>

      {/* Main Grid */}
      <main
        className="products-grid-container"
        onMouseEnter={() => {
          // Only close on hover if not touch intent, to prevent accidental closes on hybrid devices
          if (!isTouchRef.current) setShowAllCategories(false);
        }}
      >
        <div className="products-grid">
          {products.map(item => (
            <Productcard key={item.id} product={item} />
          ))}
        </div>
        {products.length === 0 && (
          <p>No products found in this category.</p>
        )}
      </main>
    </div>
  );
};

export default Products;
