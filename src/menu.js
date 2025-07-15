function renderMenu() {
    const container = document.getElementById("content");
    container.innerHTML = ""; 

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "🍽 Mamma’s Menu";

    const intro = document.createElement("div");
    intro.classList.add("tagline");
    intro.textContent = "Crafted with love from Mamma's kitchen 💖";

    const menuItems = [
    {
        name: "Three Cheese Tortellini",
        description: "Stuffed pasta shells tossed in Mamma’s creamy garlic parmesan sauce.",
        price: "$14.50",
        img: "https://www.lecremedelacrumb.com/wp-content/uploads/2022/12/EasyCheeseTortelliniPasta_-17-5-1024x1536.jpg"
    },
    {
        name: "Classic Lasagna",
        description: "Layered with rich beef ragu, creamy béchamel, and parmesan cheese.",
        price: "$16.50",
        img: "https://i.pinimg.com/736x/c2/b5/e9/c2b5e9f9a9b1b2fe583f824d3699e5d2.jpg"
    },
    {
        name: "Eggplant Parmigiana",
        description: "Golden fried eggplant slices baked with marinara and mozzarella.",
        price: "$13.75",
        img: "https://www.seriouseats.com/thmb/b_rype8ehbXDGD4Z0G8gV5stsAs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SEA-QiAi-all-american-eggplant-parmesan-recipe-hero-75b076af64244afc9466aa89ed0ee8f6.jpg"
    },
    {
        name: "Mamma’s Meatballs",
        description: "Slow-cooked meatballs served with crusty bread and a hug from Nonna.",
        price: "$11.00",
        img: "https://starinfinitefood.com/wp-content/uploads/2020/08/92876191_158030675691292_7423025968731578882_n-720x720.jpg"
    }
    ];


        const menuList = document.createElement("div");
        menuList.classList.add("menu");

        menuItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <img src="${item.img}" alt="${item.name}" class="dish-img">
            <p class="price">${item.price}</p>
            `;

            menuList.appendChild(card);
        });

        container.appendChild(title);
        container.appendChild(intro);
        container.appendChild(menuList);
}


export { renderMenu };
