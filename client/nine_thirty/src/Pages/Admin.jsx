import React, { useEffect, useState } from "react";

function Admin() {
  const [articles, setArticles] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [formData, setFormData] = useState({});
  const [picture, setPicture] = useState({});
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
    <div className="m-10">
      <h1 className="text-2xl font-bold text-slate-700 mb-4">Admin Panel</h1>
      {deleteMessage && <p>{deleteMessage}</p>}
      <table className="w-full mb-4 shadow-2xl rounded-lg shadow-slate-500">
        <thead>
          <tr>
            {/* <th className="px-4 py-2 border border-gray-300">Id</th> */}
            <th className="px-4 py-2 border border-gray-300"> Type</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article._id}>
              {/* <td className="border border-gray-300 px-4 py-2">  {article._id}    </td> */}
              <td className="border border-gray-300 px-4 py-2">{article.type}</td>
              <td className="border border-gray-300 px-4 py-2">
                {article.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-[#2E2E68] hover:bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(article._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <form
      
        onSubmit={handleSubmit}
        className="Article bg-white p-4 rounded-lg shadow-2xl shadow-slate-500"
        encType="multipart/form-data"
      >
         <h2 className="text-lg font-bold text-slate-700">Create New Article</h2>
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
              const file = e.target.files[0];
              if (file) {
                setPicture(file.name);
              }
            }}
            accept="image/*"
          />
        </label>
        <br />
        <div className="text-center">
        <button className="Submit bg-[#2E2E68] text-white p-2 rounded-md hover:bg-[#8686d6]" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
