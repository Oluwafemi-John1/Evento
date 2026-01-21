<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <a href="#" class="navbar-brand">
        <div class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="16" height="16" rx="2" fill="white" />
            <rect x="4" y="8" width="16" height="2" fill="white" />
            <line x1="8" y1="3" x2="8" y2="7" stroke="white" stroke-width="2" stroke-linecap="round" />
            <line x1="16" y1="3" x2="16" y2="7" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <span class="brand-text">Evento</span>
      </a>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
        <a href="#features" class="nav-link active">Features</a>
        <a href="#how-it-works" class="nav-link">How It Works</a>
        <a href="#pricing" class="nav-link">Pricing</a>
        <a href="#testimonials" class="nav-link">Testimonials</a>
      </div>

      <!-- Auth Buttons -->
      <div class="nav-actions">
        <a href="#signin" class="btn-signin">Sign In</a>
        <a href="#get-started" class="btn-get-started">Get Started</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.navbar-container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.navbar-brand:hover {
  opacity: 0.8;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2B86F5 0%, #1E6FDB 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(43, 134, 245, 0.2);
}

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #2B86F5;
}

.nav-link.active {
  color: #2B86F5;
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-signin {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #0f172a;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.btn-signin:hover {
  color: #2B86F5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.btn-get-started {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: white;
  background: #2B86F5;
  padding: 0.625rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn-get-started:hover {
  background: #1E6FDB;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(43, 134, 245, 0.4), 0 2px 6px rgba(0, 0, 0, 0.1);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #0f172a;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: -0.5rem;
}

.mobile-menu-toggle:hover {
  color: #2B86F5;
}

/* Responsive */
@media (max-width: 992px) {
  .navbar-container {
    padding: 1rem 1rem;
    gap: 1.5rem;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    display: none;
  }

  .nav-links.mobile-open {
    display: flex;
  }

  .nav-link {
    width: 100%;
    padding: 0.5rem 0;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0.875rem 1rem;
  }

  .btn-signin {
    display: none;
  }
}

@media (max-width: 576px) {
  .navbar-container {
    padding: 0.75rem 1rem;
  }

  .brand-text {
    font-size: 1.25rem;
  }

  .logo-icon {
    width: 36px;
    height: 36px;
  }

  .btn-get-started {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 400px) {
  .navbar-container {
    padding: 0.75rem 0.75rem;
  }

  .brand-text {
    font-size: 1.125rem;
  }

  .btn-get-started {
    padding: 0.5rem 0.875rem;
    font-size: 0.8125rem;
  }
}
</style>
