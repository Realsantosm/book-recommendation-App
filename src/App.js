import React from "react";
import "./styles.css";
import { useState } from "react";

const Books = {
  SelfHelp: [
    {
      name: "Rich Dad, Poor Dad",
      rating: "4.5/5",
      description: "This book was first recommended for me to read."
    },
    {
      name: "The Power of Habit",
      rating: "4/5",
      description: "The best book to ever read to form a good habit."
    },
    {
      name: "I can Win",
      rating: "5/5",
      description: "Change the way you think about your self."
    },
    {
      name: "Think and Grow Rich",
      rating: "4.1/5",
      description: "A best book to think about yourself."
    }
  ],

  Romance: [
    {
      name: "Sweet Cheeks",
      rating: "5/5",
      description: "One of the best romantic book to read about"
    },
    {
      name: "Mystery Man",
      rating: "4/5",
      description: "The mystery behind love."
    },
    {
      name: "Live Me",
      rating: "3.5/5",
      description: "To know more is to fall in love more."
    },
    {
      name: "Cake",
      rating: "4.5/5",
      description: "The best piece of love."
    }
  ],
  Thriller: [
    {
      name: "One by One",
      rating: "5/5",
      description: "There is a sudden circumstances on the way."
    },
    {
      name: "One of Us is Lying",
      rating: "4/5",
      description: "Not all think the same thing."
    },
    {
      name: "I am Death",
      rating: "3.5/5",
      description: "We die twice once we loose hope and other is our death."
    },
    {
      name: "You",
      rating: "4.5/5",
      description: "You and you alone can do the best."
    }
  ],
  Action: [
    {
      name: "Shivaji",
      rating: "3.5/5",
      description: "An epic man"
    },
    {
      name: "The Game",
      rating: "3/5",
      description: "Be the man who play but not audience."
    },
    {
      name: "Steve Jobs",
      rating: "3.5/5",
      description: "The Man behind Apple."
    },
    {
      name: "Muhammad Ali",
      rating: "5/5",
      description: "The man with big fist."
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Action");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="clapper">
          📚
        </span>{" "}
        Great-Books Recommended{" "}
      </h1>
      <p style={{ fontSize: "medium", fontWeight: "bold" }}>
        {" "}
        Checkout my fav Books. Select the category to get started with{" "}
      </p>

      <div>
        {Object.keys(Books).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "red",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontWeight: "bold"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Books[selectedCategory].map((books) => (
            <li
              key={books.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {" "}
                {books.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                {" "}
                {books.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                {" "}
                {books.description}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
