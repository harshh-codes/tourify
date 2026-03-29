import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedPackage]);

  const handleNextImage = (e) => {
    if(e && e.stopPropagation) e.stopPropagation();
    if (!selectedPackage || !selectedPackage.gallery) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedPackage.gallery.length);
  };

  const handlePrevImage = (e) => {
    if(e && e.stopPropagation) e.stopPropagation();
    if (!selectedPackage || !selectedPackage.gallery) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedPackage.gallery.length) % selectedPackage.gallery.length);
  };

  const handleDragStart = (e) => {
    setTouchEnd(null);
    const clientX = e.type.includes('mouse') ? e.clientX : e.targetTouches[0].clientX;
    setTouchStart(clientX);
  };

  const handleDragMove = (e) => {
    if (!touchStart) return;
    const clientX = e.type.includes('mouse') ? e.clientX : e.targetTouches[0].clientX;
    setTouchEnd(clientX);
  };

  const handleDragEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNextImage(null);
    }
    if (distance < -50) {
      handlePrevImage(null);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

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
        "Day 1-2: Jaipur - Explore the Hawa Mahal & Amber Fort. Enjoy a traditional Rajasthani Thali dinner.",
        "Day 3: Jodhpur - Visit the Majestic Mehrangarh Fort and stroll through the Blue City.",
        "Day 4-6: Jaisalmer - Sam Sand Dunes & Desert Camping with a live folk dance performance.",
        "Day 7-10: Udaipur - The City of Lakes & Royal Palaces. Experience a sunset boat ride on Lake Pichola."
      ],
      gallery: [
        "https://static2.tripoto.com/media/filter/tst/img/2182615/TripDocument/1668493549_img_20221115_wa0014.jpg",
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/b3/b4.jpg",
        "https://rajasthancab.b-cdn.net/uploads/1761901582-69047c0edfb6c.webp",
        "https://static.thehosteller.com/hostel/images/1.jpg/1-1679037242843.jpg"
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
        "Day 1: Kochi - Colonial charm and Chinese fishing nets. Evening Kathakali dance performance.",
        "Day 2-3: Munnar - Tea garden walks, mountain mist, and a visit to the Tata Tea Museum.",
        "Day 4: Thekkady - Spice plantations and an exciting elephant safari in Periyar National Park.",
        "Day 5-7: Alleppey - Luxury Houseboat stay traversing the emerald Backwaters. Authentic Kerala cuisine served on board."
      ],
      gallery: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1",
        "http://52.66.211.243/wp-content/uploads/2025/11/munnar.jpg",
        "https://somatheeram-c3c5.kxcdn.com/wp-content/uploads/2019/03/Somatheeram-Kerala-roundtrip-Wildlife-min.jpg",
        "https://pix10.agoda.net/hotelImages/10603909/-1/92e748a85e14334c991f93a26706c563.jpg?ce=0&s=414x232"
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
        "Day 1-2: Leh - Acclimatization, Leh Palace, and local Monasteries including Hemis and Thiksey.",
        "Day 3-5: Nubra Valley - Cross Khardung La Pass, Hunder Sand Dunes & double-humped Camel Safari.",
        "Day 6-8: Pangong Lake - The world's highest saltwater lake. Overnight camping under a star-lit sky.",
        "Day 9-12: Leh - Return via Chang La Pass. Shopping for Pashmina at local markets and Departure via Magnetic Hill."
      ],
      gallery: [
        "https://himtrek.co.in/wp-content/uploads/2025/03/PANGONG-TSO-TO-LEH-VIA-CHANG-LA-1.webp",
        "https://api.breakbag.com/storage/images/leh-to-nubra-valley-road-trip-yzbfa2tn3v2s4g65-1770724252312.jpeg",
        "https://cdn.kimkim.com/files/a/content_articles/featured_photos/2afe680f438ab7f31cad3426fb31d277e8f1fe16/big-0c8da4b55236092e6fa7fb32290e9a7f.jpg",
        "https://discoverlehladakh.in/wp-content/uploads/2024/03/Chang-la-pass-in-Leh-Ladakh.jpg"
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
        "Day 1: Arrival, check-in, and an enchanting Evening Ganga Aarti at Dashashwamedh Ghat.",
        "Day 2: Sunrise boat ride observing morning rituals & visit to Kashi Vishwanath Temple.",
        "Day 3: Sarnath - The place where Buddha gave his first sermon. Explore the Dhamek Stupa and museum.",
        "Day 4-5: Old City heritage walks, spiritual workshops, and discovering local silk weaving traditions."
      ],
      gallery: [
        "https://rajajijunglesafari.com/wp-content/uploads/experience-ganga-aarti-at-haridwar.jpg",
        "https://www.kailash-yatra.org/images/kashi-ghat.jpg",
        "http://shrikashidham.com/wp-content/uploads/2023/09/sarnath-varanasi-e1693918484606.jpg",
        "https://www.shutterstock.com/shutterstock/photos/782841148/display_1500/stock-photo-street-the-narrow-alleys-of-old-varanasi-s-old-town-old-street-varanasi-banaras-uttar-pradesh-782841148.jpg"
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
        "Day 1-2: North Goa - Famous beaches like Baga and Anjuna, historical forts like Aguada, and vibrant nightlife.",
        "Day 3: Old Goa - UNESCO Heritage Churches (Basilica of Bom Jesus) & a guided tour of a Spice Plantation with lunch.",
        "Day 4-6: South Goa - Relaxing high-end luxury resort stay, secluded beaches (Colva, Palolem), and water sports."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Front_Elevation_of_Basilica_of_Bom_Jesus.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_activities_goa_palolem_beach_l_420_640.jpg",
        "https://storage.googleapis.com/goa-app-12a91.appspot.com/2023-08-24T19%3A51%3A41.596Z2.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=LXZj%2B1g%2F9t0yuYptDYgV1f2WX4pSYSvZfqReYRucvkX8yuioTuhHvbJTEuTKcsH8iXyne%2FcdSemTQTvfjt05osS9%2BlaV9sJFybd07wbWOtFyNHyhg1VfcW0ZyOVK3EPD8rHVF33Dqsnlry2F3MdszhTBkm6NJbb9TAwn%2FQh2Ms8II1N5oSq7%2BVy6%2BV%2F6x4s1wEZ%2BF4fSEbPQIVf5243c8T8NCBhkj0uBPDOK5jZMX3k4OlNPpmKxXuyURPiNqx%2Bbg5HqKTEx%2B5rn9FhZSd2p4YoSTvUBHTtrvakTM0vFe8LX87kBFAkLcKp7JcApWURtI%2FWoJAJWv4UBx0RMEoA1Fg%3D%3D"
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
        "Day 1: Port Blair - Arrival, Cellular Jail guided tour & emotional Light and Sound Show in the evening.",
        "Day 2: Havelock Island - Scenic ferry ride & spectacular sunset views at Radhanagar Beach.",
        "Day 3: Elephant Beach - Scuba diving, underwater sea walk, snorkeling, and other water sports.",
        "Day 4: Neil Island - Glass bottom boat ride, exploring Bharatpur Beach & coral viewing.",
        "Day 5-7: Leisure day at Chidiya Tapu, local seashell market shopping, and departure from Port Blair."
      ],
      gallery: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/59/36/0a/ross-island.jpg?w=1400&h=1400&s=1",
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Havelock%2C_Andaman_%26_Nicobar_Islands.JPG",
        "https://www.theindia.co.in/blog/wp-content/uploads/2025/03/Places-for-Scuba-Diving-In-India-for-Beginner.jpg",
        "https://i0.wp.com/go2andaman.com/wp-content/uploads/2025/12/NATURAL-BRIDGE-IMG2025-3.jpg?fit=1920%2C1080&ssl=1",
        "https://thrillingtravel.in/wp-content/uploads/2017/03/IMG_2088-1024x683.jpg"
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
                  <div 
                    className="modal-img-container" 
                    style={{ position: 'relative', cursor: 'grab' }} 
                    onTouchStart={handleDragStart} 
                    onTouchMove={handleDragMove} 
                    onTouchEnd={handleDragEnd}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                  >
                    <img 
                      src={selectedPackage.gallery && selectedPackage.gallery.length > 0 ? selectedPackage.gallery[activeImageIndex] : selectedPackage.image} 
                      alt="Gallery Main" 
                      className="modal-img-main"
                      draggable="false"
                    />
                    {selectedPackage.gallery && selectedPackage.gallery.length > 1 && (
                      <div className="slider-dots">
                        {selectedPackage.gallery.map((_, index) => (
                          <span 
                            key={index} 
                            className={`dot ${index === activeImageIndex ? 'active' : ''}`} 
                            onClick={(e) => { e.stopPropagation(); setActiveImageIndex(index); }}
                          ></span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-info">
                  <h2>{selectedPackage.name}</h2>
                  <p className="modal-desc">{selectedPackage.description}</p>
                  <div className="modal-details-grid">
                    <div className="itinerary-list">
                      <h3>Day-wise Itinerary</h3>
                      <ul>
                        {selectedPackage.itinerary.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="modal-booking-card">
                      <div className="booking-price-section">
                        <span className="price-label">Starting from</span>
                        <span className="package-price">{selectedPackage.price}</span>
                        <span className="price-duration">per person</span>
                      </div>
                      <div className="booking-duration">
                        <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{selectedPackage.duration}</span>
                      </div>
                      <button className="btn-primary" onClick={handleConnect} style={{ width: '100%', marginTop: '20px' }}>Enquire Now</button>
                    </div>
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
