<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge">
          <svg class="star-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L12.5 7.5L18 8.5L14 13L15 18.5L10 16L5 18.5L6 13L2 8.5L7.5 7.5L10 2Z" fill="#2B86F5" />
          </svg>
          <span>Where Events Come Alive</span>
        </div>

        <!-- Heading -->
        <h1 class="hero-heading">
          <span class="heading-line">Create</span>
          <span class="heading-line hero-highlight">Unforgettable</span>
          <span class="heading-line">Events</span>
          <span class="heading-line">Effortlessly</span>
        </h1>

        <!-- Description -->
        <p class="hero-description">
          From corporate conferences to social celebrations, Evento blends powerful management tools with delightful
          experiences. Plan, manage, and execute events that leave lasting impressions.
        </p>

        <!-- Buttons -->
        <div class="hero-buttons">
          <a href="#get-started" class="btn-start-trial">Start Free Trial</a>
          <a href="#demo" class="btn-watch-demo">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" />
              <path d="M8 6L14 10L8 14V6Z" fill="currentColor" />
            </svg>
            <span>Watch Demo</span>
          </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-value">50K+</div>
            <div class="stat-label">Events Created</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">2M+</div>
            <div class="stat-label">Happy Attendees</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">98%</div>
            <div class="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=900&fit=crop&q=80"
          alt="Event audience" />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.hero-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  padding: 4rem 0 6rem;
  overflow: hidden;
}

.hero-container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e8f3ff;
  color: #2B86F5;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border-radius: 50px;
  width: fit-content;
  letter-spacing: -0.01em;
}

.hero-badge svg {
  flex-shrink: 0;
}

.star-icon {
  animation: spinStar 3s linear infinite;
  transform-origin: center;
}

@keyframes spinStar {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.hero-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.03em;
}

.heading-line {
  display: block;
}

.hero-highlight {
  color: #2B86F5;
}

.hero-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
  max-width: 540px;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-start-trial {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #2B86F5;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(43, 134, 245, 0.3);
  border: none;
  cursor: pointer;
}

.btn-start-trial:hover {
  background: #1E6FDB;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(43, 134, 245, 0.4);
}

.btn-watch-demo {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  background: white;
  padding: 1rem 1.75rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.btn-watch-demo:hover {
  border-color: #2B86F5;
  color: #2B86F5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hero-stats {
  display: flex;
  gap: 3rem;
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid #e5e7eb;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-family: 'Poppins', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #64748b;
  line-height: 1.4;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-container {
    gap: 3rem;
  }

  .hero-heading {
    font-size: 3.5rem;
  }

  .hero-image {
    height: 550px;
  }
}

@media (max-width: 992px) {
  .hero-section {
    padding: 3rem 0 4rem;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1.25rem;
  }

  .hero-content {
    text-align: left;
    max-width: 100%;
  }

  .hero-heading {
    font-size: 3rem;
  }

  .hero-description {
    max-width: 600px;
  }

  .hero-image {
    height: 500px;
  }

  .hero-stats {
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2.5rem 0 3rem;
  }

  .hero-container {
    padding: 0 1rem;
    gap: 2.5rem;
  }

  .hero-heading {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .btn-start-trial,
  .btn-watch-demo {
    flex: 1;
    min-width: 160px;
    justify-content: center;
  }

  .hero-image {
    height: 400px;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 2.5rem 0 3rem;
  }

  .hero-container {
    gap: 2.5rem;
    padding: 0 1.25rem;
  }

  .hero-content {
    gap: 2rem;
  }

  .hero-badge {
    font-size: 0.8125rem;
    padding: 0.625rem 1.125rem;
    font-weight: 700;
  }

  .hero-badge svg {
    width: 18px;
    height: 18px;
  }

  .hero-heading {
    font-size: 2.25rem;
    line-height: 1.15;
    letter-spacing: -0.04em;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.65;
    color: #475569;
    font-weight: 400;
  }

  .hero-buttons {
    margin-top: 0.25rem;
    gap: 0.875rem;
  }

  .btn-start-trial {
    padding: 0.9375rem 1.5rem;
    font-size: 0.9375rem;
    font-weight: 700;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(43, 134, 245, 0.35);
  }

  .btn-watch-demo {
    padding: 0.9375rem 1.375rem;
    font-size: 0.9375rem;
    font-weight: 600;
    border-radius: 12px;
  }

  .hero-image {
    height: 340px;
    border-radius: 20px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 2rem 1.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .stat-item {
    flex: 1 1 calc(33.333% - 1rem);
    min-width: 90px;
  }

  .stat-value {
    font-size: 1.875rem;
    margin-bottom: 0.125rem;
  }

  .stat-label {
    font-size: 0.8125rem;
    line-height: 1.3;
  }
}

@media (max-width: 400px) {
  .hero-section {
    padding: 2rem 0 2.5rem;
  }

  .hero-container {
    padding: 0 1rem;
    gap: 2rem;
  }

  .hero-content {
    gap: 1.75rem;
  }

  .hero-heading {
    font-size: 2rem;
    letter-spacing: -0.035em;
  }

  .hero-description {
    font-size: 0.9375rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-start-trial,
  .btn-watch-demo {
    width: 100%;
    padding: 1rem 1.5rem;
  }

  .hero-stats {
    gap: 1.5rem 1rem;
  }

  .stat-item {
    flex: 1 1 calc(50% - 0.5rem);
  }

  .stat-value {
    font-size: 1.625rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .hero-image {
    height: 300px;
    border-radius: 18px;
  }
}
</style>
