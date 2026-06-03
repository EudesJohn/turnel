import { useState, useMemo } from 'react'
import './App.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Formation Pro',
    price: 49.99,
    desc: 'Maîtrisez les bases du marketing digital',
    emoji: '🎓',
    popular: true,
  },
  {
    id: 2,
    name: 'Pack Starter',
    price: 29.99,
    desc: 'Le kit essentiel pour bien démarrer',
    emoji: '🚀',
    popular: false,
  },
  {
    id: 3,
    name: 'Accès VIP',
    price: 99.99,
    desc: 'Contenu exclusif & communauté privée',
    emoji: '👑',
    popular: false,
  },
  {
    id: 4,
    name: 'Coaching 1:1',
    price: 199.99,
    desc: 'Séance individuelle avec un expert',
    emoji: '💎',
    popular: false,
  },
]

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [orderDone, setOrderDone] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '' })

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const total = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    [cart]
  )

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id)
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function updateQty(id, delta) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    )
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  function handleCheckout(e) {
    e.preventDefault()
    if (!checkoutForm.name || !checkoutForm.email) return
    setOrderDone(true)
    setCart([])
    setShowCheckout(false)
    setShowCart(false)
  }

  function resetShop() {
    setOrderDone(false)
    setCheckoutForm({ name: '', email: '' })
  }

  /* ========== SUCCESS ========== */
  if (orderDone) {
    return (
      <div className="success-screen">
        <span className="success-emoji">✅</span>
        <h1>Merci {checkoutForm.name} !</h1>
        <p>Ta commande a bien été confirmée.</p>
        <p className="success-mail">
          Un récapitulatif vient d'être envoyé à <strong>{checkoutForm.email}</strong>
        </p>
        <button className="btn btn-primary" onClick={resetShop}>
          Retour à la boutique
        </button>
      </div>
    )
  }

  /* ========== CHECKOUT ========== */
  if (showCheckout) {
    return (
      <div className="checkout-screen">
        <button className="back-btn" onClick={() => setShowCheckout(false)}>
          ← Retour au panier
        </button>
        <h1>Finaliser la commande</h1>

        <div className="checkout-summary">
          {cart.map((item) => (
            <div key={item.id} className="checkout-line">
              <span>{item.emoji} {item.name} × {item.qty}</span>
              <span>{(item.price * item.qty).toFixed(2)} €</span>
            </div>
          ))}
          <div className="checkout-total">
            <strong>Total</strong>
            <strong>{total.toFixed(2)} €</strong>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleCheckout}>
          <label>
            Nom complet
            <input
              type="text"
              required
              value={checkoutForm.name}
              onChange={(e) =>
                setCheckoutForm({ ...checkoutForm, name: e.target.value })
              }
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={checkoutForm.email}
              onChange={(e) =>
                setCheckoutForm({ ...checkoutForm, email: e.target.value })
              }
            />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Payer {total.toFixed(2)} €
          </button>
        </form>
      </div>
    )
  }

  /* ========== MAIN SHOP ========== */
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <span className="brand">Turnel</span>
        <button className="cart-btn" onClick={() => setShowCart(true)}>
          🛒 Panier
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <h1 className="hero-title">
          Transforme ton <span className="gradient">potentiel</span> en revenus
        </h1>
        <p className="hero-sub">
          Des formations, outils et accompagnement conçus pour te faire passer
          au niveau supérieur.
        </p>
        <a href="#products" className="btn btn-primary btn-lg">
          Découvrir nos offres ↓
        </a>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products-section">
        <h2 className="section-title">Nos offres</h2>
        <p className="section-sub">Choisis celle qui te correspond</p>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`product-card ${product.popular ? 'popular' : ''}`}
            >
              {product.popular && <span className="popular-badge">🔥 Populaire</span>}
              <span className="product-emoji">{product.emoji}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <p className="product-price">{product.price.toFixed(2)} €</p>
              <button
                className="btn btn-primary btn-block"
                onClick={() => addToCart(product)}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="section-title">Pourquoi Turnel ?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Instantané</h3>
            <p>Accès immédiat à tout le contenu après achat</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Sécurisé</h3>
            <p>Paiements chiffrés et données protégées</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💬</span>
            <h3>Support</h3>
            <p>Une équipe disponible 7j/7 pour t'accompagner</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">♾️</span>
            <h3>À vie</h3>
            <p>Accès illimité, sans abonnement caché</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <h2>Prêt à passer à l'action ?</h2>
        <p>Rejoins les centaines de clients satisfaits</p>
        <a href="#products" className="btn btn-primary btn-lg">
          Voir les offres
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2026 Turnel — Tous droits réservés</p>
      </footer>

      {/* CART OVERLAY */}
      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)}>
          <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Ton panier</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <span className="cart-empty-icon">🛒</span>
                <p>Ton panier est vide</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-emoji">{item.emoji}</span>
                        <div>
                          <p className="cart-item-name">{item.name}</p>
                          <p className="cart-item-price">
                            {item.price.toFixed(2)} €
                          </p>
                        </div>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => updateQty(item.id, -1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)}>+</button>
                        <button
                          className="remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total</span>
                    <strong>{total.toFixed(2)} €</strong>
                  </div>
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => setShowCheckout(true)}
                  >
                    Commander
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  )
}

export default App
