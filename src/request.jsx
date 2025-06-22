import React, { useState } from 'react';
import './request.css';

const Request = () => {
  const [requestType, setRequestType] = useState('money');
  const [moneyForm, setMoneyForm] = useState({
    amount: '',
    reason: ''
  });
  const [itemForm, setItemForm] = useState({
    item: '',
    budget: '',
    reason: '',
    specifications: ''
  });
  
  const [requests, setRequests] = useState([
    {
      id: 1,
      requester: 'John Doe',
      type: 'Money',
      amount: 500,
      reason: 'Medical expenses',
      email: 'john@example.com'
    },
    {
      id: 2,
      requester: 'Jane Smith',
      type: 'Item',
      item: 'Laptop',
      budget: 300,
      reason: 'For schoolwork',
      specifications: '8GB RAM, 256GB SSD',
      email: 'jane@example.com'
    }
  ]);

  const handleRequestTypeChange = (e) => {
    setRequestType(e.target.value);
  };

  const handleMoneyFormChange = (e) => {
    const { name, value } = e.target;
    setMoneyForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemFormChange = (e) => {
    const { name, value } = e.target;
    setItemForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (requestType === 'money') {
      if (moneyForm.amount && moneyForm.reason) {
        const newRequest = {
          id: Date.now(),
          requester: 'You',
          type: 'Money',
          amount: parseFloat(moneyForm.amount),
          reason: moneyForm.reason,
          email: 'your@example.com'
        };
        
        setRequests(prev => [...prev, newRequest]);
        setMoneyForm({ amount: '', reason: '' });
      }
    } else {
      if (itemForm.item && itemForm.budget && itemForm.reason) {
        const newRequest = {
          id: Date.now(),
          requester: 'You',
          type: 'Item',
          item: itemForm.item,
          budget: parseFloat(itemForm.budget),
          reason: itemForm.reason,
          specifications: itemForm.specifications,
          email: 'your@example.com'
        };
        
        setRequests(prev => [...prev, newRequest]);
        setItemForm({ item: '', budget: '', reason: '', specifications: '' });
      }
    }
  };

  return (
    <div className="request-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <a href="#">FinBuddy</a>
        </div>
        <div className="navbar-right">
          <a href="#">Dashboard</a>
          <a href="#">History</a>
          <a href="#">Lending</a>
          <a href="#">Request Loan</a>
        </div>
      </div>

      {/* Requests Page Container */}
      <div className="container">
        {/* Requests Container */}
        <div className="requests-container">
          <h2>Requests from Others</h2>
          <div className="request-list">
            {requests.map((request) => (
              <div key={request.id} className="request">
                <div className="request-details">
                  <p><strong>Requester:</strong> {request.requester}</p>
                  <p><strong>Type:</strong> {request.type}</p>
                  
                  {request.type === 'Money' ? (
                    <>
                      <p><strong>Amount:</strong> ${request.amount}</p>
                      <p><strong>Reason:</strong> {request.reason}</p>
                    </>
                  ) : (
                    <>
                      <p><strong>Item:</strong> {request.item}</p>
                      <p><strong>Budget:</strong> ${request.budget}</p>
                      <p><strong>Reason:</strong> {request.reason}</p>
                      {request.specifications && (
                        <p><strong>Specifications:</strong> {request.specifications}</p>
                      )}
                    </>
                  )}
                  
                  <a href={`mailto:${request.email}`} className="contact-button">
                    Contact Requester
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Request Container */}
        <div className="submit-request-container">
          <h2>Submit Your Request</h2>
          <form onSubmit={handleSubmit}>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  value="money" 
                  checked={requestType === 'money'}
                  onChange={handleRequestTypeChange}
                />
                Money
              </label>
              
              <label className="radio-label">
                <input 
                  type="radio" 
                  value="item" 
                  checked={requestType === 'item'}
                  onChange={handleRequestTypeChange}
                />
                Item
              </label>
            </div>

            <div className="content-container">
              {requestType === 'money' && (
                <div className="form-group toggle-div div1">
                  <label htmlFor="money-amount">Amount</label>
                  <input 
                    type="number" 
                    id="money-amount"
                    name="amount"
                    value={moneyForm.amount}
                    onChange={handleMoneyFormChange}
                    required
                  />
                  
                  <label htmlFor="money-reason">Reason</label>
                  <textarea 
                    id="money-reason"
                    name="reason"
                    value={moneyForm.reason}
                    onChange={handleMoneyFormChange}
                    required
                  />
                  
                  <button type="submit">Submit Request</button>
                </div>
              )}

              {requestType === 'item' && (
                <div className="form-group toggle-div div2">
                  <label htmlFor="item-name">Item</label>
                  <input 
                    type="text" 
                    id="item-name"
                    name="item"
                    value={itemForm.item}
                    onChange={handleItemFormChange}
                    required
                  />
                  
                  <label htmlFor="item-budget">Budget</label>
                  <input 
                    type="number" 
                    id="item-budget"
                    name="budget"
                    value={itemForm.budget}
                    onChange={handleItemFormChange}
                    required
                  />
                  
                  <label htmlFor="item-reason">Reason</label>
                  <textarea 
                    id="item-reason"
                    name="reason"
                    value={itemForm.reason}
                    onChange={handleItemFormChange}
                    required
                  />
                  
                  <label htmlFor="item-specifications">Specifications</label>
                  <textarea 
                    id="item-specifications"
                    name="specifications"
                    value={itemForm.specifications}
                    onChange={handleItemFormChange}
                  />
                  
                  <button type="submit">Submit Request</button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;