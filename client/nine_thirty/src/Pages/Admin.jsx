import React, { useEffect, useState } from "react";

function Admin() {
  const [articles, setArticles] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [formData, setFormData] = useState({});
  const [picture, setPicture] = useState({})
  // Fetch all articles from the server
  useEffect(() => {
    fetch("http://localhost:8000/furnitures/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  const handleDelete = (articleId) => {
    // Handle delete logic here
    fetch(`http://localhost:8000/furnitures/articles/delete/${articleId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Article deleted:", data);
        // Update the articles state or perform any necessary actions
        setDeleteMessage("Article deleted successfully.");
        // Fetch updated articles after deletion
        fetch("http://localhost:8000/furnitures/articles")
          .then((response) => response.json())
          .then((data) => {
            setArticles(data);
          });
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
        // Handle the error
        setDeleteMessage("Error deleting article.");
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  //Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the userId from local storage
    const userId = localStorage.getItem("userId");

    const formDataWithSeller = {
      ...formData,
      seller: userId,
    };
    // Handle form submission logic here
    fetch("http://localhost:8000/furnitures/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataWithSeller),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Article created:", data);
        // Update the articles state or perform any necessary actions
        // Fetch updated articles after creation
        fetch("http://localhost:8000/furnitures/articles")
          .then((response) => response.json())
          .then((data) => {
            setArticles(data);
          });
      })
      .catch((error) => {
        console.error("Error creating article:", error);
        // Handle the error
      });
  };
  return (
    <div>
      <h1>Admin Panel</h1>
      {deleteMessage && <p>{deleteMessage}</p>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            {/* <th>Title</th> */}
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article._id}>
              <td>{article._id}</td>
              {/* <td>{article.title}</td> */}
              <td>{article.description}</td>
              <td>
                <button onClick={() => handleDelete(article._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create New Article</h2>
      <form onSubmit={handleSubmit} className="Article bg-slate-500" enctype="multipart/form-data">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Material:
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            name="size_height"
            value={formData.size_height}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Width:
          <input
            type="number"
            name="size_width"
            value={formData.size_width}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Deep:
          <input
            type="number"
            name="size_deep"
            value={formData.size_deep}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Picture:
          <input
            type="file"
            name="picture"
            onChange={(e) => {
              const file = e.target.files[0]
              if (file) {
                setPicture(file.name)
              }
            }}
            accept="image/*"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
