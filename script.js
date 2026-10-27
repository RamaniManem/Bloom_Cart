"use strict";

// ======================================================
// BLOOMCART — COMPLETE JAVASCRIPT
// Flower catalogue, wishlist, cart, and bouquet builder
// ======================================================

// -------------------- APPLICATION STATE --------------------

const state = {
    activeCategory: "all",
    type: "all",
    color: "all",
    search: "",
    sort: "featured",
    visibleCount: 12,
    wishlist: new Set(),
    cart: [],
    customBouquet: new Map()
};

// -------------------- FLOWER CATALOGUE --------------------
// Every product has its own image URL.
// Prices are illustrative demo prices in Indian rupees.

const flowers = [
    {
        id: "rose-red",
        name: "Classic Red Roses",
        type: "Rose",
        color: "Red",
        price: 35,
        badge: "Bestseller",
        description: "Romantic red roses for someone special.",
        image: "photo-1518895949257-7621c3c786d7"
    },
    {
        id: "rose-pink",
        name: "Blush Pink Roses",
        type: "Rose",
        color: "Pink",
        price: 32,
        badge: "Popular",
        description: "Delicate pink roses filled with sweetness.",
        image: "photo-1494972308805-463bc619d34e"
    },
    {
        id: "rose-white",
        name: "Pure White Roses",
        type: "Rose",
        color: "White",
        price: 38,
        badge: "Elegant",
        description: "Graceful white roses for special moments.",
        image: "photo-1455659817273-f96807779a8a"
    },
    {
        id: "rose-yellow",
        name: "Sunny Yellow Roses",
        type: "Rose",
        color: "Yellow",
        price: 30,
        badge: "Cheerful",
        description: "Bright yellow roses to spread happiness.",
        image: "photo-1490750967868-88aa4486c946"
    },
    {
        id: "rose-purple",
        name: "Lavender Roses",
        type: "Rose",
        color: "Purple",
        price: 45,
        badge: "Special",
        description: "Dreamy roses in romantic lavender shades.",
        image: "photo-1518709268805-4e9042af9f23"
    },
    {
        id: "tulip-pink",
        name: "Pink Tulips",
        type: "Tulip",
        color: "Pink",
        price: 55,
        badge: "Favorite",
        description: "Pretty pink tulips with graceful petals.",
        image: "photo-1520763185298-1b434c919102"
    },
    {
        id: "tulip-red",
        name: "Red Tulips",
        type: "Tulip",
        color: "Red",
        price: 58,
        badge: "",
        description: "Vibrant red tulips for bold expressions.",
        image: "photo-1457089328109-e5d9bd499191"
    },
    {
        id: "tulip-white",
        name: "White Tulips",
        type: "Tulip",
        color: "White",
        price: 52,
        badge: "",
        description: "Fresh white tulips with timeless beauty.",
        image: "photo-1496857239036-1fb137683000"
    },
    {
        id: "tulip-purple",
        name: "Purple Tulips",
        type: "Tulip",
        color: "Purple",
        price: 60,
        badge: "Unique",
        description: "Beautiful purple tulips for a special gift.",
        image: "photo-1525310072745-f49212b5ac6d"
    },
    {
        id: "lily-white",
        name: "White Lilies",
        type: "Lily",
        color: "White",
        price: 65,
        badge: "Elegant",
        description: "Elegant lilies with beautiful open petals.",
        image: "photo-1554777240-19d260fa6946"
    },
    {
        id: "lily-pink",
        name: "Pink Lilies",
        type: "Lily",
        color: "Pink",
        price: 70,
        badge: "",
        description: "Soft pink lilies for thoughtful gifting.",
        image: "photo-1575670072298-1e5822fc4c2d"
    },
    {
        id: "lily-stargazer",
        name: "Stargazer Lilies",
        type: "Lily",
        color: "Pink",
        price: 85,
        badge: "Premium",
        description: "Statement lilies with dramatic pink petals.",
        image: "photo-1561181286-d3fee7d55364"
    },
    {
        id: "sunflower-classic",
        name: "Classic Sunflowers",
        type: "Sunflower",
        color: "Yellow",
        price: 40,
        badge: "Sunny Pick",
        description: "Golden sunflowers that brighten any day.",
        image: "photo-1597848212624-e6cc9a6b7c6c"
    },
    {
        id: "sunflower-mini",
        name: "Mini Sunflowers",
        type: "Sunflower",
        color: "Yellow",
        price: 30,
        badge: "",
        description: "Cheerful little sunflowers for everyday joy.",
        image: "photo-1470252649378-9c29740c9fa8"
    },
    {
        id: "orchid-purple",
        name: "Purple Orchids",
        type: "Orchid",
        color: "Purple",
        price: 90,
        badge: "Premium",
        description: "Exotic purple orchids with a luxurious look.",
        image: "photo-1497250681960-ef046c08a56e"
    },
    {
        id: "orchid-white",
        name: "White Orchids",
        type: "Orchid",
        color: "White",
        price: 95,
        badge: "",
        description: "Sophisticated white orchids for elegant gifts.",
        image: "photo-1508610048659-a06b669e3321"
    },
    {
        id: "orchid-pink",
        name: "Pink Orchids",
        type: "Orchid",
        color: "Pink",
        price: 88,
        badge: "",
        description: "Delicate pink orchids with graceful blooms.",
        image: "photo-1501004318641-b39e6451bec6"
    },
    {
        id: "daisy-white",
        name: "White Daisies",
        type: "Daisy",
        color: "White",
        price: 25,
        badge: "Sweet Pick",
        description: "Charming white daisies with sunny centers.",
        image: "photo-1490750967868-88aa4486c946"
    },
    {
        id: "daisy-pink",
        name: "Pink Daisies",
        type: "Daisy",
        color: "Pink",
        price: 28,
        badge: "",
        description: "Playful pink daisies for a cheerful bouquet.",
        image: "photo-1499002238440-d264edd596ec"
    },
    {
        id: "carnation-red",
        name: "Red Carnations",
        type: "Carnation",
        color: "Red",
        price: 25,
        badge: "",
        description: "Rich red carnations for heartfelt gifting.",
        image: "photo-1494627680350-2f7d7d5c1d95"
    },
    {
        id: "carnation-pink",
        name: "Pink Carnations",
        type: "Carnation",
        color: "Pink",
        price: 24,
        badge: "Popular",
        description: "Soft pink carnations with ruffled petals.",
        image: "photo-1508610048659-a06b669e3321"
    },
    {
        id: "gerbera-orange",
        name: "Orange Gerberas",
        type: "Gerbera",
        color: "Orange",
        price: 32,
        badge: "Bright Pick",
        description: "Bright orange gerberas for cheerful occasions.",
        image: "photo-1490750967868-88aa4486c946"
    },
    {
        id: "gerbera-pink",
        name: "Pink Gerberas",
        type: "Gerbera",
        color: "Pink",
        price: 30,
        badge: "",
        description: "Pretty pink gerberas with sunny centers.",
        image: "photo-1520763185298-1b434c919102"
    },
    {
        id: "mixed-blooms",
        name: "Rainbow Mixed Blooms",
        type: "Mixed Bouquet",
        color: "Mixed",
        price: 120,
        badge: "Colorful",
        description: "A colorful mix of beautiful seasonal flowers.",
        image: "photo-1490750967868-88aa4486c946"
    },
    {
        id: "peony-pink",
        name: "Pink Peonies",
        type: "Peony",
        color: "Pink",
        price: 100,
        badge: "Premium",
        description: "Full, soft pink petals for a premium bouquet.",
        image: "photo-1523438885200-e635ba2c371e"
    },
    {
        id: "chrysanthemum-yellow",
        name: "Yellow Chrysanthemums",
        type: "Chrysanthemum",
        color: "Yellow",
        price: 28,
        badge: "",
        description: "Golden blooms that brighten your home.",
        image: "photo-1494627680350-2f7d7d5c1d95"
    },
    {
        id: "lavender-bunch",
        name: "Lavender Flower Bunch",
        type: "Lavender",
        color: "Purple",
        price: 75,
        badge: "Relaxing",
        description: "A lovely bunch of fragrant lavender flowers.",
        image: "photo-1499002238440-d264edd596ec"
    },
    {
        id: "mixed-pastel",
        name: "Pastel Flower Mix",
        type: "Mixed Bouquet",
        color: "Mixed",
        price: 150,
        badge: "Editor's Pick",
        description: "A dreamy arrangement of soft pastel colors.",
        image: "photo-1523438885200-e635ba2c371e"
    },
    {
        id: "gerbera-yellow",
        name: "Yellow Gerberas",
        type: "Gerbera",
        color: "Yellow",
        price: 30,
        badge: "",
        description: "Golden gerberas filled with cheerful energy.",
        image: "photo-1597848212624-e6cc9a6b7c6c"
    },
    {
        id: "rose-mixed",
        name: "Mixed Color Roses",
        type: "Rose",
        color: "Mixed",
        price: 42,
        badge: "Colorful",
        description: "A colorful collection of beautiful roses.",
        image: "photo-1518895949257-7621c3c786d7"
    }
];

// -------------------- READY-MADE BOUQUETS --------------------

const readyMadeBouquets = [
    {
        id: "romantic-red",
        name: "The Romance Bouquet",
        description: "A romantic arrangement for anniversaries and special moments.",
        price: 899,
        image: "photo-1518895949257-7621c3c786d7"
    },
    {
        id: "sunshine",
        name: "Sunshine Happiness",
        description: "A bright and cheerful bouquet to make someone smile.",
        price: 699,
        image: "photo-1597848212624-e6cc9a6b7c6c"
    },
    {
        id: "pastel-dream",
        name: "Pastel Dreams",
        description: "A gentle arrangement of soft colours for thoughtful gifting.",
        price: 999,
        image: "photo-1523438885200-e635ba2c371e"
    },
    {
        id: "elegant-white",
        name: "Pure Elegance",
        description: "An elegant floral arrangement for timeless occasions.",
        price: 1099,
        image: "photo-1455659817273-f96807779a8a"
    }
];

// -------------------- DOM HELPERS --------------------

const $ = (selector) => document.querySelector(selector);

const productGrid = $("#productGrid");
const emptyState = $("#emptyState");
const loadMoreButton = $("#loadMore");
const toastElement = $("#toast");

let toastTimer;

function money(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}

function flowerImage(imageId, width = 550) {
    return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=${width}&q=80`;
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function showToast(message) {
    if (!toastElement) {
        window.alert(message);
        return;
    }

    toastElement.textContent = message;
    toastElement.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toastElement.classList.remove("show");
    }, 2500);
}

// -------------------- FLOWER COLLECTION --------------------

function getFilteredFlowers() {
    let result = [...flowers];

    if (state.activeCategory !== "all") {
        result = result.filter(
            flower => flower.type === state.activeCategory
        );
    }

    if (state.type !== "all") {
        result = result.filter(
            flower => flower.type === state.type
        );
    }

    if (state.color !== "all") {
        result = result.filter(
            flower => flower.color === state.color
        );
    }

    if (state.search.trim()) {
        const query = state.search.trim().toLowerCase();

        result = result.filter(flower =>
            `${flower.name} ${flower.type} ${flower.color} ${flower.description}`
                .toLowerCase()
                .includes(query)
        );
    }

    if (state.sort === "low") {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sort === "high") {
        result.sort((a, b) => b.price - a.price);
    } else if (state.sort === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
}

function renderFlowers() {
    if (!productGrid) return;

    const filtered = getFilteredFlowers();
    const visible = filtered.slice(0, state.visibleCount);

    const flowerCount = $("#flowerCount");

    if (flowerCount) {
        flowerCount.textContent = `${filtered.length} flowers`;
    }

    productGrid.innerHTML = visible.map(flower => `
        <article class="product-card">
            <div class="product-image">
                <img
                    src="${flowerImage(flower.image)}"
                    alt="${escapeHTML(flower.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/550x650/f8f2e9/244b38?text=Beautiful+Flowers';"
                >

                ${flower.badge
                    ? `<span class="product-badge">${escapeHTML(flower.badge)}</span>`
                    : ""}

                <button
                    class="wishlist-button ${state.wishlist.has(flower.id) ? "active" : ""}"
                    data-wishlist="${flower.id}"
                    aria-label="${state.wishlist.has(flower.id) ? "Remove from" : "Add to"} wishlist"
                    aria-pressed="${state.wishlist.has(flower.id)}"
                >${state.wishlist.has(flower.id) ? "♥" : "♡"}</button>
            </div>

            <div class="product-info">
                <span class="product-category">
                    ${escapeHTML(flower.color)} · ${escapeHTML(flower.type)}
                </span>

                <h3>${escapeHTML(flower.name)}</h3>

                <p class="product-description">
                    ${escapeHTML(flower.description)}
                </p>

                <div class="product-bottom">
                    <span class="product-price">
                        ${money(flower.price)} <small>/ stem</small>
                    </span>

                    <button class="add-cart-button" data-add-flower="${flower.id}">
                        + Add
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    if (emptyState) {
        emptyState.hidden = filtered.length !== 0;
    }

    if (loadMoreButton) {
        loadMoreButton.hidden = visible.length >= filtered.length;
        loadMoreButton.textContent = "Explore More Flowers ↓";
    }
}

function resetVisibleFlowers() {
    state.visibleCount = 12;
    renderFlowers();
}

const searchInput = $("#searchInput");
const colorFilter = $("#colorFilter");
const typeFilter = $("#typeFilter");
const sortFilter = $("#sortFilter");
const categoryChips = $("#categoryChips");

if (searchInput) {
    searchInput.addEventListener("input", event => {
        state.search = event.target.value;
        resetVisibleFlowers();
    });
}

if (colorFilter) {
    colorFilter.addEventListener("change", event => {
        state.color = event.target.value;
        resetVisibleFlowers();
    });
}

if (typeFilter) {
    typeFilter.addEventListener("change", event => {
        state.type = event.target.value;
        state.activeCategory = "all";

        document.querySelectorAll(".chip").forEach(chip => {
            chip.classList.toggle(
                "active",
                chip.dataset.category === "all"
            );
        });

        resetVisibleFlowers();
    });
}

if (sortFilter) {
    sortFilter.addEventListener("change", event => {
        state.sort = event.target.value;
        resetVisibleFlowers();
    });
}

if (categoryChips) {
    categoryChips.addEventListener("click", event => {
        const chip = event.target.closest("[data-category]");

        if (!chip) return;

        state.activeCategory = chip.dataset.category;
        state.type = "all";

        if (typeFilter) {
            typeFilter.value = "all";
        }

        document.querySelectorAll(".chip").forEach(item => {
            item.classList.toggle("active", item === chip);
        });

        resetVisibleFlowers();
    });
}

if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
        state.visibleCount += 8;
        renderFlowers();
    });
}

if (productGrid) {
    productGrid.addEventListener("click", event => {
        const wishlistButton = event.target.closest("[data-wishlist]");
        const addButton = event.target.closest("[data-add-flower]");

        if (wishlistButton) {
            toggleWishlist(wishlistButton.dataset.wishlist);
        }

        if (addButton) {
            addFlowerToCart(addButton.dataset.addFlower, 1);
        }
    });
}

// -------------------- WISHLIST --------------------

function toggleWishlist(flowerId) {
    if (state.wishlist.has(flowerId)) {
        state.wishlist.delete(flowerId);
        showToast("Removed from your wishlist ♡");
    } else {
        state.wishlist.add(flowerId);
        showToast("Added to your favorites! ♥");
    }

    const wishlistCount = $("#wishlistCount");

    if (wishlistCount) {
        wishlistCount.textContent = state.wishlist.size;
    }

    renderFlowers();
}

const wishlistHeader = $("#wishlistHeader");

if (wishlistHeader) {
    wishlistHeader.addEventListener("click", () => {
        if (state.wishlist.size === 0) {
            showToast("Tap the ♡ on any flower to save a favorite.");
            return;
        }

        const favoriteNames = flowers
            .filter(flower => state.wishlist.has(flower.id))
            .map(flower => flower.name);

        window.alert(
            "Your favorite flowers:\n\n" + favoriteNames.join("\n")
        );

        state.activeCategory = "all";
        state.type = "all";
        state.color = "all";
        state.search = "";
        state.sort = "featured";
        state.visibleCount = flowers.length;

        if (searchInput) searchInput.value = "";
        if (typeFilter) typeFilter.value = "all";
        if (colorFilter) colorFilter.value = "all";
        if (sortFilter) sortFilter.value = "featured";

        document.querySelectorAll(".chip").forEach(chip => {
            chip.classList.toggle(
                "active",
                chip.dataset.category === "all"
            );
        });

        renderFlowers();

        const flowersSection = $("#flowers");

        if (flowersSection) {
            flowersSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// -------------------- CART --------------------

function addFlowerToCart(flowerId, quantity = 1) {
    const flower = flowers.find(item => item.id === flowerId);

    if (!flower) return;

    const cartId = `flower:${flower.id}`;

    const existing = state.cart.find(
        item => item.cartId === cartId
    );

    if (existing) {
        existing.quantity += quantity;
    } else {
        state.cart.push({
            cartId,
            name: flower.name,
            price: flower.price,
            image: flower.image,
            quantity,
            kind: "flower"
        });
    }

    updateCart();
    showToast(`${flower.name} added to your cart 🌷`);
}

function addReadyMadeBouquet(bouquetId) {
    const bouquet = readyMadeBouquets.find(
        item => item.id === bouquetId
    );

    if (!bouquet) return;

    const cartId = `ready:${bouquet.id}`;

    const existing = state.cart.find(
        item => item.cartId === cartId
    );

    if (existing) {
        existing.quantity++;
    } else {
        state.cart.push({
            cartId,
            name: bouquet.name,
            price: bouquet.price,
            image: bouquet.image,
            quantity: 1,
            kind: "ready"
        });
    }

    updateCart();
    showToast(`${bouquet.name} added to your cart 💐`);
}

function addCustomBouquetToCart() {
    const selections = [...state.customBouquet.entries()];

    if (selections.length === 0) {
        showToast("Choose at least one flower first! 🌸");
        return;
    }

    const details = selections.map(([flowerId, quantity]) => {
        const flower = flowers.find(item => item.id === flowerId);

        return {
            id: flower.id,
            name: flower.name,
            quantity,
            price: flower.price
        };
    });

    const total = details.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const stemCount = details.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const summary = details
        .map(item => `${item.quantity} × ${item.name}`)
        .join(", ");

    const firstFlower = flowers.find(
        flower => flower.id === details[0].id
    );

    state.cart.push({
        cartId: `custom:${Date.now()}`,
        name: "Your Custom Bouquet",
        price: total,
        image: firstFlower.image,
        quantity: 1,
        kind: "custom",
        summary,
        stemCount
    });

    state.customBouquet.clear();

    renderCustomBouquet();
    updateCart();

    showToast("Your custom bouquet has been added! 💐");
}

function updateCart() {
    const totalQuantity = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const subtotal = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const cartCount = $("#cartCount");
    const cartSubtotal = $("#cartSubtotal");

    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }

    if (cartSubtotal) {
        cartSubtotal.textContent = money(subtotal);
    }

    renderCartItems();
}

function renderCartItems() {
    const container = $("#cartItems");

    if (!container) return;

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <span>💐</span>
                Your cart is waiting for something beautiful.
                <br><br>
                Explore the flowers and find your favorites!
            </div>
        `;

        return;
    }

    container.innerHTML = state.cart.map(item => `
        <article class="cart-item">
            <img
                src="${flowerImage(item.image, 200)}"
                alt="${escapeHTML(item.name)}"
                onerror="this.onerror=null;this.src='https://placehold.co/200x250/f8f2e9/244b38?text=Flowers';"
            >

            <div class="cart-item-info">
                <h4>${escapeHTML(item.name)}</h4>

                ${item.summary
                    ? `<p>${escapeHTML(item.summary)}</p>`
                    : ""}

                <p>
                    ${money(item.price)}
                    ${item.kind === "flower" ? " / stem" : ""}
                </p>

                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button
                            data-cart-action="decrease"
                            data-cart-id="${item.cartId}"
                            aria-label="Decrease quantity"
                        >−</button>

                        <span>${item.quantity}</span>

                        <button
                            data-cart-action="increase"
                            data-cart-id="${item.cartId}"
                            aria-label="Increase quantity"
                        >+</button>
                    </div>

                    <strong>${money(item.price * item.quantity)}</strong>

                    <button
                        data-cart-action="remove"
                        data-cart-id="${item.cartId}"
                    >Remove</button>
                </div>
            </div>
        </article>
    `).join("");
}

const cartItems = $("#cartItems");

if (cartItems) {
    cartItems.addEventListener("click", event => {
        const button = event.target.closest("[data-cart-action]");

        if (!button) return;

        const item = state.cart.find(
            entry => entry.cartId === button.dataset.cartId
        );

        if (!item) return;

        const action = button.dataset.cartAction;

        if (action === "increase") {
            item.quantity++;
        } else if (action === "decrease") {
            item.quantity--;

            if (item.quantity <= 0) {
                state.cart = state.cart.filter(
                    entry => entry.cartId !== item.cartId
                );
            }
        } else if (action === "remove") {
            state.cart = state.cart.filter(
                entry => entry.cartId !== item.cartId
            );
        }

        updateCart();
    });
}

// -------------------- CART DRAWER --------------------

function openCart() {
    const drawer = $("#cartDrawer");
    const overlay = $("#overlay");

    if (!drawer || !overlay) return;

    drawer.classList.add("open");
    overlay.classList.add("active");

    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");

    const closeButton = $("#closeCart");

    if (closeButton) {
        closeButton.focus();
    }
}

function closeCart() {
    const drawer = $("#cartDrawer");
    const overlay = $("#overlay");

    if (drawer) {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
    }

    if (overlay) {
        overlay.classList.remove("active");
    }

    document.body.classList.remove("drawer-open");
}

const openCartButton = $("#openCart");
const closeCartButton = $("#closeCart");
const overlay = $("#overlay");

if (openCartButton) {
    openCartButton.addEventListener("click", openCart);
}

if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCart);
}

if (overlay) {
    overlay.addEventListener("click", closeCart);
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCart();

        const navigation = $("#navigation");
        const menuToggle = $("#menuToggle");

        if (navigation) {
            navigation.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    }
});

// -------------------- CUSTOM BOUQUET BUILDER --------------------

function populateBuilderSelect() {
    const select = $("#builderFlower");

    if (!select) return;

    select.innerHTML = flowers
        .filter(flower => flower.type !== "Mixed Bouquet")
        .map(flower => `
            <option value="${flower.id}">
                ${escapeHTML(flower.name)} — ${money(flower.price)} / stem
            </option>
        `).join("");
}

function renderCustomBouquet() {
    const container = $("#customSelection");

    if (!container) return;

    const selections = [...state.customBouquet.entries()];

    if (selections.length === 0) {
        container.innerHTML = `
            <p class="selection-empty">
                Your bouquet is waiting for its first flower 🌷
            </p>
        `;
    } else {
        container.innerHTML = selections.map(([flowerId, quantity]) => {
            const flower = flowers.find(
                item => item.id === flowerId
            );

            if (!flower) return "";

            return `
                <div class="selected-flower">
                    <div>
                        <div class="selected-flower-name">
                            ${escapeHTML(flower.name)}
                        </div>

                        <div class="selected-flower-price">
                            ${money(flower.price * quantity)}
                        </div>
                    </div>

                    <div class="quantity-control">
                        <button
                            data-builder-action="decrease"
                            data-flower-id="${flower.id}"
                            aria-label="Decrease quantity"
                        >−</button>

                        <span>${quantity}</span>

                        <button
                            data-builder-action="increase"
                            data-flower-id="${flower.id}"
                            aria-label="Increase quantity"
                        >+</button>
                    </div>

                    <button
                        class="remove-flower"
                        data-builder-action="remove"
                        data-flower-id="${flower.id}"
                        aria-label="Remove flower"
                    >✕</button>
                </div>
            `;
        }).join("");
    }

    const total = selections.reduce((sum, [flowerId, quantity]) => {
        const flower = flowers.find(
            item => item.id === flowerId
        );

        return sum + (flower ? flower.price * quantity : 0);
    }, 0);

    const stemCount = selections.reduce(
        (sum, [, quantity]) => sum + quantity,
        0
    );

    const bouquetTotal = $("#bouquetTotal");
    const bouquetStemCount = $("#bouquetStemCount");

    if (bouquetTotal) {
        bouquetTotal.textContent = money(total);
    }

    if (bouquetStemCount) {
        bouquetStemCount.textContent =
            `${stemCount} ${stemCount === 1 ? "stem" : "stems"}`;
    }
}

const addCustomFlowerButton = $("#addCustomFlower");

if (addCustomFlowerButton) {
    addCustomFlowerButton.addEventListener("click", () => {
        const builderFlower = $("#builderFlower");
        const builderQuantity = $("#builderQuantity");

        if (!builderFlower || !builderQuantity) return;

        const flowerId = builderFlower.value;
        const quantity = Number.parseInt(builderQuantity.value, 10);

        if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
            showToast("Please choose a quantity between 1 and 50.");
            return;
        }

        const flower = flowers.find(
            item => item.id === flowerId
        );

        if (!flower) return;

        const currentQuantity = state.customBouquet.get(flowerId) || 0;

        if (currentQuantity + quantity > 50) {
            showToast("You can select up to 50 stems of each flower.");
            return;
        }

        state.customBouquet.set(
            flowerId,
            currentQuantity + quantity
        );

        renderCustomBouquet();

        builderQuantity.value = "1";

        showToast(`${flower.name} added to your bouquet 🌷`);
    });
}

const customSelection = $("#customSelection");

if (customSelection) {
    customSelection.addEventListener("click", event => {
        const button = event.target.closest("[data-builder-action]");

        if (!button) return;

        const flowerId = button.dataset.flowerId;
        const action = button.dataset.builderAction;
        const current = state.customBouquet.get(flowerId);

        if (!current) return;

        if (action === "increase") {
            if (current >= 50) {
                showToast("Maximum 50 stems per flower.");
                return;
            }

            state.customBouquet.set(flowerId, current + 1);
        } else if (action === "decrease") {
            if (current <= 1) {
                state.customBouquet.delete(flowerId);
            } else {
                state.customBouquet.set(flowerId, current - 1);
            }
        } else if (action === "remove") {
            state.customBouquet.delete(flowerId);
        }

        renderCustomBouquet();
    });
}

const clearBouquetButton = $("#clearBouquet");

if (clearBouquetButton) {
    clearBouquetButton.addEventListener("click", () => {
        state.customBouquet.clear();

        renderCustomBouquet();

        showToast("Your bouquet selection has been cleared.");
    });
}

const addBouquetToCartButton = $("#addBouquetToCart");

if (addBouquetToCartButton) {
    addBouquetToCartButton.addEventListener(
        "click",
        addCustomBouquetToCart
    );
}

// -------------------- READY-MADE BOUQUETS --------------------

function renderReadyMadeBouquets() {
    const bouquetGrid = $("#bouquetGrid");

    if (!bouquetGrid) return;

    bouquetGrid.innerHTML = readyMadeBouquets.map(bouquet => `
        <article class="occasion-card">
            <img
                src="${flowerImage(bouquet.image)}"
                alt="${escapeHTML(bouquet.name)}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://placehold.co/500x400/f8f2e9/244b38?text=Flower+Bouquet';"
            >

            <div class="occasion-content">
                <h3>${escapeHTML(bouquet.name)}</h3>

                <p>${escapeHTML(bouquet.description)}</p>

                <div class="occasion-price">
                    ${money(bouquet.price)}
                </div>

                <button
                    class="button button-primary full-button"
                    data-add-bouquet="${bouquet.id}"
                >
                    Add to Cart →
                </button>
            </div>
        </article>
    `).join("");
}

const bouquetGrid = $("#bouquetGrid");

if (bouquetGrid) {
    bouquetGrid.addEventListener("click", event => {
        const button = event.target.closest("[data-add-bouquet]");

        if (!button) return;

        addReadyMadeBouquet(button.dataset.addBouquet);
    });
}

// -------------------- NEWSLETTER DEMO --------------------

const newsletterForm = $("#newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", event => {
        event.preventDefault();

        const newsletterEmail = $("#newsletterEmail");
        const newsletterMessage = $("#newsletterMessage");

        if (!newsletterEmail) return;

        const email = newsletterEmail.value.trim();

        if (!email) {
            showToast("Please enter your email address.");
            return;
        }

        if (newsletterMessage) {
            newsletterMessage.textContent =
                "Thank you for your interest! This demo does not save email addresses.";
        }

        newsletterEmail.value = "";

        showToast("Thank you for joining our blooming community! 🌸");
    });
}

// -------------------- MOBILE NAVIGATION --------------------

const menuToggle = $("#menuToggle");
const navigation = $("#navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.addEventListener("click", event => {
        if (event.target.closest("a")) {
            navigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    });
}

// -------------------- INITIALIZE BLOOMCART --------------------

function initializeBloomCart() {
    const currentYear = $("#currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    populateBuilderSelect();
    renderFlowers();
    renderCustomBouquet();
    renderReadyMadeBouquets();
    updateCart();
}

initializeBloomCart();