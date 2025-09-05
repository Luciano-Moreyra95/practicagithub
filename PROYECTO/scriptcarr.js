// app.js (ES module)
const existing = cart.find(item => item.id === id);
if (existing) {
    existing.qty += 1;
} else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
}


saveCartToStorage();
renderCart();


// Alert nativa + SweetAlert2 para cumplir el requisito de al menos 1 alert
alert(`${product.name} agregado al carrito`);
Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Agregado al carrito', showConfirmButton: false, timer: 1200 });



function renderCart() {
    cartListEl.innerHTML = '';
    let total = 0;


    for (let i = 0; i < cart.length; i++) {
        const it = cart[i];
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.dataset.id = it.id;


        li.innerHTML = `
<div>
<strong>${it.name}</strong>
<div style="font-size:0.9rem;color:var(--muted)">x${it.qty}</div>
</div>
<div style="text-align:right">
<div>$${(it.price * it.qty).toFixed(2)}</div>
<div style="margin-top:6px;display:flex;gap:6px;justify-content:flex-end;">
<button class="btn btn-outline decrease-btn" data-id="${it.id}">-</button>
<button class="btn btn-outline increase-btn" data-id="${it.id}">+</button>
<button class="btn btn-outline remove-btn" data-id="${it.id}">Eliminar</button>
</div>
</div>
`;


        cartListEl.appendChild(li);
        total += it.price * it.qty;
    }


    cartTotalEl.textContent = `$${total.toFixed(2)}`;
    cartCounterEl.textContent = cart.reduce((a, b) => a + b.qty, 0);


    // Delegación de eventos en carrito
    cartListEl.addEventListener('click', handleCartClick);
}


function handleCartClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = btn.dataset.id;
    if (!id) return;


    if (btn.classList.contains('increase-btn')) {
        changeQty(id, 1);
    } else if (btn.classList.contains('decrease-btn')) {
        changeQty(id, -1);
    } else if (btn.classList.contains('remove-btn')) {
        removeFromCart(id);
    }
}


function changeQty(id, delta) {
    const it = car
}