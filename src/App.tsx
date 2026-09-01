import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 60000 },
  { id: 2, name: 'T-Shirt', category: 'Clothing', price: 1000 },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 3000 },
  { id: 4, name: 'Running Shoes', category: 'Footwear', price: 2500 }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter logic based on search and category
  const filteredProducts = initialProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", backgroundColor: "#1e1e1e", color: "#ffffff", minHeight: "100vh" }}>
      <h2>Wednesday Task: Product Filtering & Search Dashboard</h2>
      
      {/* Search Input and Filter Controls */}
      <div style={{ margin: "20px 0", display: "flex", gap: "15px" }}>
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "8px", width: "250px", borderRadius: "4px", border: "1px solid #ccc" }}
        />

        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
        </select>
      </div>

      {/* Product List UI */}
      <h3>Filtered Products List:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <li key={p.id} style={{ background: "#2d2d2d", margin: "10px 0", padding: "12px", borderRadius: "5px" }}>
              <strong>{p.name}</strong> — {p.category} — ₹{p.price}
            </li>
          ))
        ) : (
          <p>No products found!</p>
        )}
      </ul>
    </div>
  );
}

export default App;