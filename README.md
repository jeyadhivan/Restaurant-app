<div align="center">

# 🍽️ Restaurant Menu App  
*A visually appealing and user-friendly interface for food ordering*

![last-commit](https://img.shields.io/github/last-commit/jeyadhivan/restaurant-menu-app?style=flat&logo=git&logoColor=white&color=orange)
![repo-top-language](https://img.shields.io/github/languages/top/jeyadhivan/restaurant-menu-app?style=flat&color=orange)
![repo-language-count](https://img.shields.io/github/languages/count/jeyadhivan/restaurant-menu-app?style=flat&color=orange)

**Built using:**

![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)

</div>

---

## 📱 Mobile Interface

<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688465518/Restaurant_page_movie-view_2_p6r4up.png" target="_blank">
  <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688465518/Restaurant_page_movie-view_2_p6r4up.png" alt="Mobile View" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</a>

---

## 🖥️ Web Interface

<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" target="_blank">
  <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" alt="Web View" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</a>

---

## 📌 Overview

This project is a **responsive restaurant menu application** where users can browse through categorized food items and manage their cart. Categories and dishes are dynamically fetched from an external API. Designed with performance and maintainability in mind.

---

## 🔗 Live Demo

**🌐 Hosted URL:** [Visit Live Site]((https://gjfoodresapp.ccbp.tech/))  
**📁 GitHub Repo:** [View Repository](https://github.com/jeyadhivan/restaurant-app)

---

## 🔧 Features

- 📲 **Responsive UI** for both mobile and desktop.
- 🔄 **Dynamic Dish Categories** from the API (no hardcoding).
- 🍲 **Customizations Info**: Displays *“Customizations available”* if a dish includes `addoncat`.
- ➕➖ **Quantity Controls**: Adjust item counts using + and - buttons.
- 🛒 **Cart Integration**: Updates the top cart icon count live.
- 📦 **Reusable Components**: Built with clean architecture and reusable code.
- 🖱️ **Horizontal Scrollable Tabs** for category navigation.

---

## 🔗 API Used

**Endpoint**: [https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details](https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details)

The API returns:
- `table_menu_list` → array of category objects
- `category_dishes` → array of dish objects per category
- Each dish may contain `addoncat`, indicating customizations

---


## 🛠 Installation

```bash
git clone https://github.com/jeyadhivan/restaurant-menu-app.git
cd restaurant-menu-app
npm install
npm start
```

## 📄 License

This project is for educational/demo purposes only.
