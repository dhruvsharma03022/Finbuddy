import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './lending.css';

const Lending = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
    price: ''
  });

  const [photos, setPhotos] = useState([]);
  const [listedItems, setListedItems] = useState([
    {
      id: 1,
      title: 'Product Title 1',
      description: 'Description of the product...',
      price: 100,
      image: 'https://img.freepik.com/free-vector/vintage-bike-design_1268-347.jpg?t=st=1738690128~exp=1738693728~hmac=6872117ed19f1bc31fb6fc1a01121a277f64aead1a0ab9e7013fa485cd3bb1fb&w=740'
    },
    {
      id: 2,
      title: 'Product Title 2',
      description: 'Description of the product...',
      price: 200,
      image: 'https://img.freepik.com/free-vector/vintage-bike-design_1268-347.jpg?t=st=1738690128~exp=1738693728~hmac=6872117ed19f1bc31fb6fc1a01121a277f64aead1a0ab9e7013fa485cd3bb1fb&w=740'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));
    setPhotos(prev => [...prev, ...newPhotos]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.address && formData.price && photos.length > 0) {
      const newItem = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        image: photos[0].url
      };
      
      setListedItems(prev => [...prev, newItem]);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        address: '',
        price: ''
      });
      setPhotos([]);
      
      // Reset file input
      document.getElementById('product-photos').value = '';
    }
  };

  return (
    <div className="lending-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <a href="#">FinBuddy</a>
        </div>
        <div className="navbar-right">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/history" className="nav-link">History</Link>
          <Link to="/lending" className="nav-link">Lending</Link>
          <Link to="/request" className="nav-link">Request Loan</Link>
        </div>
      </div>

      {/* Lending Page Container */}
      <div className="container">
        {/* Form Container */}
        <div className="form-container">
          <h2>Add Item to Listing</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="product-title">Product Title</label>
              <input 
                type="text" 
                id="product-title" 
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="product-photos">Product Photos</label>
              <label className="upload-btn" htmlFor="product-photos">Upload</label>
              <input 
                type="file" 
                id="product-photos" 
                multiple 
                accept="image/*"
                onChange={handleFileUpload}
                required 
              />
              <div className="photos" id="photos-preview">
                {photos.map((photo, index) => (
                  <img 
                    key={index} 
                    src={photo.url} 
                    alt={`Uploaded Photo ${index + 1}`} 
                    className="uploaded-photo-visible"
                  />
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="product-description">Description</label>
              <textarea 
                id="product-description" 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="product-address">Address</label>
              <input 
                type="text" 
                id="product-address" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="product-price">Price</label>
              <div className="price-input">
                <span>$</span>
                <input 
                  type="number" 
                  id="product-price" 
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        {/* List Container */}
        <div className="list-container">
          <h2>Your Listed Items</h2>
          <div className="item-list">
            {listedItems.map((item) => (
              <div key={item.id} className="item">
                <img src={item.image} alt="Item Photo" />
                <div className="item-details">
                  <p><strong>{item.title}</strong></p>
                  <p>{item.description}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lending;