import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    {
      id: 1,
      name: "Rajasthan: The Land of Kings",
      price: "₹74,999",
      duration: "10 Days / 9 Nights",
      image: "/images/rajasthan.png",
      rating: "4.9",
      description: "Experience the royal heritage of India. From the pink city of Jaipur to the golden dunes of Jaisalmer.",
      itinerary: [
        "Day 1-2: Jaipur - Explore the Hawa Mahal & Amber Fort.",
        "Day 3: Jodhpur - Visit the Majestic Mehrangarh Fort.",
        "Day 4-6: Jaisalmer - Sam Sand Dunes & Desert Camping.",
        "Day 7-10: Udaipur - The City of Lakes & Royal Palaces."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1599661046289-e31897846140?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616140510594-52119ed22806?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Kerala: Backwaters & Spices",
      price: "₹58,499",
      duration: "7 Days / 6 Nights",
      image: "/images/kerala.png",
      rating: "4.8",
      description: "A tranquil journey through emerald backwaters, tea plantations, and pristine beaches.",
      itinerary: [
        "Day 1: Kochi - Colonial charm and Chinese fishing nets.",
        "Day 2-3: Munnar - Tea garden walks and mountain mist.",
        "Day 4: Thekkady - Spice plantations and wildlife safari.",
        "Day 5-7: Alleppey - Luxury Houseboat stay and Backwaters."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549488344-c65011783853?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Ladakh: High Altitude Adventure",
      price: "₹92,999",
      duration: "12 Days / 11 Nights",
      image: "/images/ladakh.png",
      rating: "5.0",
      description: "The ultimate road trip. Cold deserts, high-altitude lakes, and ancient monasteries.",
      itinerary: [
        "Day 1-2: Leh - Acclimatization and Local Monasteries.",
        "Day 3-5: Nubra Valley - Hunder Sand Dunes & Camel Safari.",
        "Day 6-8: Pangong Lake - The world's highest saltwater lake.",
        "Day 9-12: Leh - Shopping and Departure via Magnetic Hill."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1626017387227-dc9395f1dc38?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594968132924-d92ea4025ea4?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1623910270059-4566f108f972?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Varanasi: The Spiritual Heart",
      price: "₹42,999",
      duration: "5 Days / 4 Nights",
      image: "/images/varanasi.png",
      rating: "4.9",
      description: "A soul-stirring journey into the oldest living city in the world. Witness the sacred rituals on the Ghats of Mother Ganga.",
      itinerary: [
        "Day 1: Arrival & Evening Ganga Aarti.",
        "Day 2: Sunrise boat ride & Kashi Vishwanath Temple.",
        "Day 3: Sarnath - The place where Buddha gave his first sermon.",
        "Day 4-5: Old City heritage walks and spiritual workshops."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1625807981507-6b04ed339798?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1627885025705-649d238b1bc0?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Goa: Sun, Sand & Serenity",
      price: "₹38,999",
      duration: "6 Days / 5 Nights",
      image: "/images/goa.png",
      rating: "4.7",
      description: "Beyond the parties, discover the architectural charm of Old Goa and the pristine quiet beaches of the South.",
      itinerary: [
        "Day 1-2: North Goa - Famous beaches and historical forts.",
        "Day 3: Old Goa - UNESCO Heritage Churches & Spice Plantation.",
        "Day 4-6: South Goa - Relaxing beach stay and water sports."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596547610537-8ff8b6eece63?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Andaman: Tropical Paradise",
      price: "₹65,999",
      duration: "7 Days / 6 Nights",
      image: "/images/andaman.webp",
      rating: "4.9",
      description: "Dive into crystal-clear waters and relax on white sandy beaches in the breathtaking Andaman Islands.",
      itinerary: [
        "Day 1: Port Blair - Cellular Jail & Light and Sound Show.",
        "Day 2: Havelock - Ferry ride & sunset at Radhanagar Beach.",
        "Day 3: Elephant Beach - Scuba diving and water sports.",
        "Day 4: Neil Island - Glass bottom boat ride & coral viewing.",
        "Day 5-7: Leisure, shopping, and departure from Port Blair."
      ],
      gallery: [
        "/images/andaman.webp",
        "/images/goa.png",
        "/images/kerala.png"
      ]
    }
  ];

  const handleConnect = () => {
    window.open("https://wa.me/919359895965?text=Hi, I'm interested in booking a tour with Tourify!", "_blank");
  };

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">TOURIFY</div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#packages" onClick={() => setMobileMenuOpen(false)}>Packages</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>

          <div className="nav-actions">
            <div className="nav-cta hide-mobile" onClick={handleConnect}>Book Your Trip</div>
            <button 
              className="hamburger" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
            <span className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></span>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header id="home" className="hero">
          <img src="/images/hero.png" className="hero-bg" alt="Taj Mahal" />
          <div className="hero-overlay"></div>
          <div className="hero-content animate-fade-in">
            <h1>Experience the Magic of <span style={{ color: 'var(--primary)' }}>Incredible India</span></h1>
            <p>Discover breathtaking destinations, vibrant cultures, and timeless heritage with Tourify.</p>
            <div className="cta-group">
              <button className="btn-primary" onClick={() => document.getElementById('packages').scrollIntoView()}>Explore Packages</button>
              <button className="btn-secondary" onClick={handleConnect}>Plan Custom Trip</button>
            </div>
          </div>
        </header>

        {/* Improved About Section */}
        <section id="about" className="about-section">
          <div className="section-header">
            <span>Our Tradition</span>
            <h2>Travel with Finest Partner</h2>
          </div>
          <div className="about-grid">
            <div className="about-text animate-slide-right">
              <h3>20+ Years of Excellence</h3>
              <p>
                Founded on the principles of luxury, heritage, and unmatched hospitality, Tourify 
                has been the gold standard for Indian tourism for over two decades. We don't just 
                sell tours; we craft life-changing memories.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>50k+</h4>
                  <p>Happy Travelers</p>
                </div>
                <div className="stat-card">
                  <h4>20+</h4>
                  <p>Indian States</p>
                </div>
                <div className="stat-card">
                  <h4>4.9/5</h4>
                  <p>Google Reviews</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/hero.png" alt="Heritage" style={{ borderRadius: 'var(--radius-lg)', width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages">
          <div className="section-header">
            <span>Special Offers</span>
            <h2>Destinations You'll Love</h2>
          </div>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <img src={pkg.image} alt={pkg.name} className="package-img" />
                <div className="package-info">
                  <h3>{pkg.name}</h3>
                  <div className="package-details">
                    <span>{pkg.duration}</span>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  <button className="book-btn" onClick={() => setSelectedPackage(pkg)}>Explore Itinerary</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Itinerary */}
        {selectedPackage && (
          <div className="modal-overlay" onClick={() => setSelectedPackage(null)}>
            <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedPackage(null)}>&times;</button>
              <div className="modal-body">
                <div className="modal-gallery">
                  <img src={selectedPackage.image} alt="Gallery 1" className="modal-img-main" />
                  <div className="modal-gallery-thumbs">
                    {selectedPackage.gallery && selectedPackage.gallery.map((img, index) => (
                      <img key={index} src={img} alt={`Gallery ${index + 1}`} className="gallery-thumb" />
                    ))}
                  </div>
                </div>
                <div className="modal-info">
                  <h2>{selectedPackage.name}</h2>
                  <p className="modal-desc">{selectedPackage.description}</p>
                  <div className="itinerary-list">
                    <h3>Day-wise Itinerary</h3>
                    <ul>
                      {selectedPackage.itinerary.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <span className="package-price">{selectedPackage.price}</span>
                    <button className="btn-primary" onClick={handleConnect}>Enquire Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <section id="contact" style={{ textAlign: 'center', background: 'var(--bg-subtle)' }}>
          <div className="glass" style={{ padding: '80px', borderRadius: 'var(--radius-lg)' }}>
            <h2>Start Your Journey Today</h2>
            <p style={{ margin: '20px 0 40px' }}>Join over 50,000+ travelers who found their soul in India.</p>
            <button className="btn-primary" onClick={handleConnect}>Connect with an Expert</button>
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 8%', background: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div>
            <div className="logo" style={{ marginBottom: '20px' }}>TOURIFY</div>
            <p style={{ opacity: 0.7 }}>A heritage of hospitality and a future of exploration. We are JP Morgan's premier travel agency partner in India.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.7 }}>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#packages">Destinations</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.7 }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Booking Policy</a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Support</h4>
            <div style={{ opacity: 0.7 }}>
              <p>Email: contact@tourify.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Mumbai Financial District, India</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', opacity: 0.5 }}>
          &copy; 2026 Tourify India Ltd. All rights reserved. &bull; Copyright by Harsh
        </div>
      </footer>
      <div className="whatsapp-float" onClick={handleConnect}>
        <span style={{ fontSize: '10px', position: 'absolute', top: '-20px', color: 'var(--text-main)', background: 'white', padding: '2px 8px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>Chat with Us</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </div>
    </div>
  );
}

export default App;
