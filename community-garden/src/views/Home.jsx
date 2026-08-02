import React, { useEffect, useState } from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './home.css'

const events = [
  {
    day: '15',
    month: 'Oct',
    title: 'Seed Sowing Workshop',
    text: 'Learn the basics of starting your own vegetable patch from scratch. Perfect for beginners!',
  },
  {
    day: '22',
    month: 'Oct',
    title: 'Community Harvest Lunch',
    text: 'A potluck celebration of our seasonal bounty. Bring a dish and meet your neighbors.',
  },
  {
    day: '05',
    month: 'Nov',
    title: 'Compost Masterclass',
    text: 'Deep dive into the science of black gold. Mandatory for new compost participants.',
  },
]

const stories = [
  {
    img: 'https://images.pexels.com/photos/13836517/pexels-photo-13836517.jpeg?auto=compress&cs=tinysrgb&w=1500',
    alt: 'Family gardening together',
    title: 'Family Spotlight: The Miller Family',
    text: 'How the Millers turned their Saturday mornings into a tech-free family tradition in the garden.',
  },
  {
    img: 'https://images.pexels.com/photos/7728706/pexels-photo-7728706.jpeg?auto=compress&cs=tinysrgb&w=1500',
    alt: 'Volunteers working',
    title: 'New Irrigation System Installed',
    text: "Thanks to our recent fundraiser, we've upgraded our garden's sustainability with smart watering.",
  },
  {
    img: 'https://images.pexels.com/photos/31416070/pexels-photo-31416070.jpeg?auto=compress&cs=tinysrgb&w=1500',
    alt: 'Composting close up',
    title: 'Composting Success Stories',
    text: 'Diverting 500kg of waste from landfills this month alone. See how you can help!',
  },
  {
    img: 'https://images.pexels.com/photos/7658794/pexels-photo-7658794.jpeg?auto=compress&cs=tinysrgb&w=1500',
    alt: 'Senior couple gardening',
    title: 'Wisdom from the Soil',
    text: 'Our senior members share their lifelong gardening secrets during our weekly tea hour.',
  },
]

const voices = [
  {
    quote:
      '"NeighborNurture has been a blessing for our family. My kids actually look forward to weeding! It\'s the best tech-free activity in the neighborhood."',
    author: 'Sarah & The Kids',
    role: 'Local Family',
  },
  {
    quote:
      '"Living in an apartment, I missed having a garden. Joining as a compost participant was so easy, and the onboarding was super helpful."',
    author: 'Mark T.',
    role: 'Apartment Resident',
  },
  {
    quote:
      '"I feel so safe here. It\'s more than a garden; it\'s a network of people who look out for each other and the environment."',
    author: 'Elena R.',
    role: 'Volunteer Mentor',
  },
]

const QuoteIcon = () => (
  <svg fill="currentColor" width="32" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5H19.017V3H16.017C12.7033 3 10.017 5.68629 10.017 9V15C10.017 18.3137 12.7033 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91238 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V9C2.017 6.79086 3.80787 5 6.017 5H9.017V3H6.017C2.7033 3 0.017 5.68629 0.017 9V15C0.017 18.3137 2.7033 21 6.017 21H4.017Z"></path>
  </svg>
)

const CheckIcon = () => (
  <svg
    fill="none"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const Home = () => {
  const [formState, setFormState] = useState('idle') // idle | sending | done

  useEffect(() => {
    document.title = 'NeighborNurture Community Garden'
  }, [])

  // Parallax effect for the hero background
  useEffect(() => {
    const handleScroll = () => {
      const heroImg = document.querySelector('.welcome-hero__bg-img')
      if (heroImg) {
        heroImg.style.transform = `translateY(${window.pageYOffset * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reveal-on-scroll animations
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.garden-benefits__item, .events-snapshot__card, .news-stories__post'
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    targets.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease-out'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleMembershipSubmit = (e) => {
    e.preventDefault()
    if (formState !== 'idle') return
    setFormState('sending')
    // No backend is wired up yet — this simulates a successful submission.
    setTimeout(() => setFormState('done'), 1000)
  }

  return (
    <div id="top" className="home-container1">
      <Navigation />

      <section className="welcome-hero">
        <div className="welcome-hero__wrapper">
          <div className="welcome-hero__media-container">
            <img
              alt="Lush community garden with wooden pathways"
              src="https://images.pexels.com/photos/5864224/pexels-photo-5864224.jpeg?auto=compress&cs=tinysrgb&w=1500"
              className="welcome-hero__bg-img"
            />
            <div className="welcome-hero__overlay"></div>
          </div>
          <div className="welcome-hero__content">
            <div className="welcome-hero__mission-box">
              <h1 className="hero-title">Growing Community, One Seed at a Time</h1>
              <p className="hero-subtitle">
                NeighborNurture is your local sanctuary for sustainable living. We cultivate more than
                just vegetables; we nurture a safe, friendly space for families to connect with nature
                and each other.
              </p>
              <div className="welcome-hero__actions">
                <a href="#join-volunteer" className="home-cta-wrapper">
                  <div className="btn btn-primary btn-lg">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Join as Volunteer</span>
                  </div>
                </a>
                <a href="#join-compost" className="home-cta-wrapper">
                  <div className="btn btn-accent btn-lg">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path>
                      <path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path>
                      <path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path>
                    </svg>
                    <span>Join Composting</span>
                  </div>
                </a>
                <a href="#events" className="home-cta-wrapper">
                  <div className="btn btn-outline btn-lg">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" rx="2" ry="2" width="18" height="18"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span>View Events</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="events-snapshot">
        <div className="events-snapshot__container">
          <div className="events-snapshot__header">
            <h2 className="section-title">Upcoming Garden Events</h2>
            <p className="section-subtitle">Join us for hands-on learning and neighborhood gatherings.</p>
          </div>
          <div className="events-snapshot__rail">
            {events.map((event) => (
              <div key={event.title} className="events-snapshot__card">
                <div className="events-snapshot__date">
                  <span className="events-snapshot__day">{event.day}</span>
                  <span className="events-snapshot__month">{event.month}</span>
                </div>
                <div className="events-snapshot__info">
                  <h3 className="section-content">
                    <span className="home-card-title">{event.title}</span>
                  </h3>
                  <p className="section-content">{event.text}</p>
                  <a href="#join-compost">
                    <div className="btn btn-sm btn-link">
                      <span>RSVP Now</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="events-snapshot__footer">
            <a href="#join-compost">
              <div className="btn-secondary btn">
                <span>View All Events &amp; Activities</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="news-stories">
        <div className="news-stories__wrapper">
          <div className="news-stories__header">
            <h2 className="section-title">Garden News &amp; Stories</h2>
            <p className="section-subtitle">Catch up on the latest happenings and volunteer highlights.</p>
          </div>
          <div className="news-stories__rail">
            {stories.map((story) => (
              <article key={story.title} className="news-stories__post">
                <img alt={story.alt} src={story.img} className="news-stories__img" />
                <div className="news-stories__body">
                  <h3 className="section-content">
                    <span className="home-card-title">{story.title}</span>
                  </h3>
                  <p className="section-content">{story.text}</p>
                  <a href="#join-compost" className="home-cta-wrapper">
                    <div className="btn btn-link">
                      <span>Read More</span>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join-volunteer" className="join-process">
        <div className="join-process__container">
          <div className="join-process__header">
            <h2 className="section-title">How to Join NeighborNurture</h2>
            <p className="section-subtitle">Become a part of our growing community in four simple steps.</p>
          </div>
          <div className="join-process__steps">
            <div className="join-process__step">
              <div className="join-process__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="16" x2="22" y1="11" y2="11"></line>
                </svg>
                <span className="join-process__number">1</span>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Sign Up Online</span>
              </h3>
              <p className="section-content">Choose your path: Garden Volunteer or Compost Participant.</p>
            </div>
            <div className="join-process__step">
              <div className="join-process__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <span className="join-process__number">2</span>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Nominal Fee</span>
              </h3>
              <p className="section-content">
                Pay a small contribution for upkeep via our secure payment portal.
              </p>
            </div>
            <div className="join-process__step">
              <div className="join-process__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" rx="2" ry="2" width="18" height="18"></rect>
                  <line x1="3" x2="21" y1="9" y2="9"></line>
                  <path d="m9 16 2 2 4-4"></path>
                </svg>
                <span className="join-process__number">3</span>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Onboarding</span>
              </h3>
              <p className="section-content">
                Receive your welcome pack and garden orientation details via email.
              </p>
            </div>
            <div className="join-process__step">
              <div className="join-process__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3m0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3m0 5V10"></path>
                </svg>
                <span className="join-process__number">4</span>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Start Growing</span>
              </h3>
              <p className="section-content">
                Visit the garden, meet your neighbors, and start your sustainable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="garden-benefits">
        <div className="garden-benefits__container">
          <div className="garden-benefits__header">
            <h2 className="section-title">Why Join NeighborNurture?</h2>
            <p className="section-subtitle">Discover the rewards of community-driven sustainability.</p>
          </div>
          <div className="garden-benefits__grid">
            <div className="garden-benefits__item">
              <div className="garden-benefits__icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle r="4" cx="19" cy="11"></circle>
                </svg>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Family-Friendly</span>
              </h3>
              <p className="section-content">
                Safe and engaging activities designed for all ages, from toddlers to grandparents.
              </p>
            </div>
            <div className="garden-benefits__item">
              <div className="garden-benefits__icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="2" rx="2" ry="2" width="16" height="20"></rect>
                  <line x1="12" x2="12.01" y1="18" y2="18"></line>
                  <path d="m15 6-6 6"></path>
                  <path d="m9 6 6 6"></path>
                </svg>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Tech-Free Zone</span>
              </h3>
              <p className="section-content">
                Unplug from the digital world and reconnect with the earth in a mindful environment.
              </p>
            </div>
            <div className="garden-benefits__item">
              <div className="garden-benefits__icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Sustainable Practices</span>
              </h3>
              <p className="section-content">
                Learn organic gardening, water conservation, and biodiversity support.
              </p>
            </div>
            <div className="garden-benefits__item">
              <div className="garden-benefits__icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Safe Neighborhood</span>
              </h3>
              <p className="section-content">
                A secure, monitored space that fosters community trust and neighborhood safety.
              </p>
            </div>
            <div className="garden-benefits__item">
              <div className="garden-benefits__icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path>
                  <path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path>
                  <path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path>
                </svg>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Composting Options</span>
              </h3>
              <p className="section-content">
                Perfect for apartment dwellers! We handle your organic waste according to strict rules.
              </p>
            </div>
            <div className="garden-benefits__item">
              <div className="garden-benefits__icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="section-content">
                <span className="home-card-title">Guidance for All</span>
              </h3>
              <p className="section-content">
                New to gardening? Our experienced members are here to mentor and guide you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="garden-voices">
        <div className="garden-voices__wrapper">
          <div className="garden-voices__header">
            <h2 className="section-title">Voices from the Garden</h2>
            <p className="section-subtitle">Hear what our local members and families have to say.</p>
          </div>
          <div className="garden-voices__rail">
            {voices.map((voice) => (
              <div key={voice.author} className="garden-voices__card">
                <div className="garden-voices__quote">
                  <QuoteIcon />
                </div>
                <p className="section-content">{voice.quote}</p>
                <div className="garden-voices__author">
                  <strong>{voice.author}</strong>
                  <span>{voice.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join-compost" className="contact-join">
        <div className="contact-join__container">
          <div className="contact-join__grid">
            <div className="contact-join__form-side">
              <h2 className="section-title">Get Started Today</h2>
              <p className="section-content">
                Fill out the form below to receive your onboarding confirmation and garden rules.
                We&apos;ll guide you through the next steps.
              </p>
              <form className="contact-join__form" onSubmit={handleMembershipSubmit}>
                <div className="contact-join__field">
                  <label htmlFor="name" className="section-content">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="contact-join__input"
                    disabled={formState === 'done'}
                  />
                </div>
                <div className="contact-join__field">
                  <label htmlFor="email" className="section-content">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="contact-join__input"
                    disabled={formState === 'done'}
                  />
                </div>
                <div className="contact-join__field">
                  <label htmlFor="interest" className="section-content">
                    I&apos;m interested in:
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="contact-join__input"
                    disabled={formState === 'done'}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    <option value="volunteer">Garden Volunteer</option>
                    <option value="compost">Compost Participant</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg${formState === 'done' ? ' contact-join__submit--done' : ''}`}
                  disabled={formState !== 'idle'}
                >
                  {formState === 'idle' && 'Send Onboarding Info'}
                  {formState === 'sending' && 'Sending...'}
                  {formState === 'done' && 'Sent Successfully!'}
                </button>
              </form>
            </div>
            <div className="contact-join__cta-side">
              <div className="contact-join__card">
                <div className="contact-join__badge">
                  <span>Membership</span>
                </div>
                <h3 className="section-title">Complete Membership</h3>
                <p className="section-content">
                  Ready to dig in? Our annual nominal fee helps cover materials, water, and tools for
                  the whole community.
                </p>
                <ul className="contact-join__list">
                  <li className="section-content">
                    <CheckIcon />
                    <span>Full Garden Access</span>
                  </li>
                  <li className="section-content">
                    <CheckIcon />
                    <span>Compost Drop-off Privileges</span>
                  </li>
                  <li className="section-content">
                    <CheckIcon />
                    <span>Free Workshops &amp; Events</span>
                  </li>
                </ul>
                <a href="#join-compost" className="home-cta-wrapper">
                  <div className="btn-secondary btn-xl btn">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                    <span>Pay &amp; Join Securely</span>
                  </div>
                </a>
                <p className="home-payment-note section-content">
                  Online payment coming soon — we&apos;ll email you the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
