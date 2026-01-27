<template>
  <div class="signup-page">
    <!-- Animated Background -->
    <div class="starry-background">
      <!-- Stars -->
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>

      <!-- Floating Event Icons -->
      <div class="floating-icon icon-1">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="15" rx="2" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <path d="M3 10h18" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <circle cx="7" cy="14" r="1" fill="white" fill-opacity="0.4" />
          <circle cx="12" cy="14" r="1" fill="white" fill-opacity="0.4" />
        </svg>
      </div>

      <div class="floating-icon icon-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8.5L22 9.5L17 15L18 22L12 18.5L6 22L7 15L2 9.5L9 8.5L12 2Z" stroke="white"
            stroke-width="1.5" stroke-opacity="0.3" />
        </svg>
      </div>

      <div class="floating-icon icon-3">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <path d="M12 7v5l3 3" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
        </svg>
      </div>

      <div class="floating-icon icon-4">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
        </svg>
      </div>

      <div class="floating-icon icon-5">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <circle cx="9" cy="7" r="4" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" stroke-width="1.5"
            stroke-opacity="0.3" />
        </svg>
      </div>

      <div class="floating-icon icon-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="15" rx="2" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="white" stroke-width="1.5" stroke-opacity="0.3" />
        </svg>
      </div>
    </div>

    <!-- Signup Form Container -->
    <div class="signup-container">
      <div class="signup-card">
        <!-- Header -->
        <div class="signup-header">
          <router-link to="/" class="logo-section">
            <div class="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="16" rx="2" fill="white" />
                <rect x="4" y="8" width="16" height="2" fill="white" />
                <line x1="8" y1="3" x2="8" y2="7" stroke="white" stroke-width="2" stroke-linecap="round" />
                <line x1="16" y1="3" x2="16" y2="7" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="brand-text">Evento</span>
          </router-link>
          <h1 class="signup-title">Create Your Account</h1>
          <p class="signup-subtitle">Join thousands creating unforgettable events</p>
        </div>

        <!-- Social Sign Up -->
        <div class="social-signup">
          <button class="social-btn google-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4" />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853" />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05" />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335" />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        <div class="divider">
          <span>or</span>
        </div>

        <!-- Signup Form -->
        <form @submit.prevent="handleSignup" class="signup-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" v-model="state.firstName" placeholder="John" required />
            </div>

            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" v-model="state.lastName" placeholder="Doe" required />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="state.email" placeholder="john@example.com" required />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <div class="password-input">
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="state.password"
                  placeholder="Create a strong password" required />
                <button type="button" class="toggle-password" @click="showPassword = !showPassword"
                  aria-label="Toggle password visibility">
                  <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                    </path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <div class="password-input">
                <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword"
                  v-model="state.confirmPassword" placeholder="Confirm your password" required />
                <button type="button" class="toggle-password" @click="showConfirmPassword = !showConfirmPassword"
                  aria-label="Toggle confirm password visibility">
                  <svg v-if="!showConfirmPassword" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                    </path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="form-checkbox">
            <input type="checkbox" id="terms" v-model="state.agreeToTerms" required />
            <label for="terms">
              I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
            </label>
          </div>

          <button :disabled="v$.$invalid" type="submit" class="btn-signup">Create Account</button>
        </form>

        <!-- Footer -->
        <div class="signup-footer">
          <p>Already have an account? <router-link to="/login" class="signin-link">Sign In</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from '@vuelidate/core'
import { email, helpers, minLength, required } from '@vuelidate/validators';
import { ref, reactive } from 'vue'
// import { useRouter } from 'vue-router'

// const router = useRouter()
const hasLowercase = helpers.regex(/[a-z]/);
const hasUppercase = helpers.regex(/[A-Z]/);
const hasNumber = helpers.regex(/\d/);
const hasSpecialChar = helpers.regex(/[@$!%*?&]/);

const state = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  password: {
    required,
    minLength: minLength(8),
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar
  },
  confirmPassword: '',
  agreeToTerms: { required }
}

const v$ = useVuelidate(rules, state)

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleSignup = () => {
  if (state.password !== state.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  // Handle signup logic here
  console.log('Signup data:', state)
  // router.push('/')
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  overflow: hidden;
}

/* Starry Background */
.starry-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #0a1628 0%, #1a2847 50%, #2B86F5 100%);
  z-index: 0;
}

/* Stars Animation */
.stars,
.stars2,
.stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.stars {
  background-image:
    radial-gradient(2px 2px at 20px 30px, white, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 60px 70px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 50px 50px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 130px 80px, white, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 10px, white, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: moveStars 50s linear infinite;
  opacity: 0.5;
}

.stars2 {
  background-image:
    radial-gradient(1px 1px at 100px 120px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 150px 160px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 80px 10px, white, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 80px, white, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 250px 250px;
  animation: moveStars 100s linear infinite;
  opacity: 0.3;
}

.stars3 {
  background-image:
    radial-gradient(1px 1px at 10px 60px, white, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 170px 120px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 120px 180px, white, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 300px 300px;
  animation: moveStars 150s linear infinite;
  opacity: 0.4;
}

@keyframes moveStars {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-200px);
  }
}

/* Floating Event Icons */
.floating-icon {
  position: absolute;
  animation: float 20s ease-in-out infinite;
  opacity: 0.15;
}

.icon-1 {
  top: 10%;
  left: 10%;
  animation-duration: 25s;
  animation-delay: 0s;
}

.icon-2 {
  top: 20%;
  right: 15%;
  animation-duration: 30s;
  animation-delay: 2s;
}

.icon-3 {
  bottom: 20%;
  left: 15%;
  animation-duration: 28s;
  animation-delay: 4s;
}

.icon-4 {
  top: 60%;
  right: 10%;
  animation-duration: 32s;
  animation-delay: 1s;
}

.icon-5 {
  bottom: 10%;
  right: 20%;
  animation-duration: 26s;
  animation-delay: 3s;
}

.icon-6 {
  top: 40%;
  left: 8%;
  animation-duration: 29s;
  animation-delay: 5s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  25% {
    transform: translateY(-30px) rotate(5deg);
  }

  50% {
    transform: translateY(-15px) rotate(-5deg);
  }

  75% {
    transform: translateY(-40px) rotate(3deg);
  }
}

/* Signup Container */
.signup-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 680px;
}

.signup-card {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 100px rgba(43, 134, 245, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

/* Header */
.signup-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.logo-section:hover {
  opacity: 0.85;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #2B86F5 0%, #1E6FDB 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(43, 134, 245, 0.3);
}

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.signup-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.375rem 0;
  letter-spacing: -0.02em;
}

.signup-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  color: #64748b;
  margin: 0;
}

/* Social Signup */
.social-signup {
  margin-bottom: 1.25rem;
}

.social-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #0f172a;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: #2B86F5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.social-btn svg {
  flex-shrink: 0;
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.25rem 0;
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e5e7eb;
}

.divider span {
  padding: 0 1rem;
}

/* Form */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* Email spans full width */
  .form-group:nth-child(3) {
    grid-column: 1 / -1;
  }

  /* Password and Confirm Password side by side */
  .form-group:nth-child(4) {
    grid-column: 1;
  }

  .form-group:nth-child(5) {
    grid-column: 2;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-group label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #0f172a;
}

.form-group input {
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  color: #0f172a;
  transition: all 0.2s ease;
  background: white;
}

.form-group input:focus {
  outline: none;
  border-color: #2B86F5;
  box-shadow: 0 0 0 4px rgba(43, 134, 245, 0.1);
}

.form-group input::placeholder {
  color: #94a3b8;
}

.password-input {
  position: relative;
}

.password-input input {
  padding-right: 3rem;
}

.toggle-password {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.toggle-password:hover {
  color: #2B86F5;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
}

.form-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 0.125rem;
  cursor: pointer;
  accent-color: #2B86F5;
}

.form-checkbox label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  cursor: pointer;
}

.form-checkbox label a {
  color: #2B86F5;
  text-decoration: none;
  font-weight: 600;
}

.form-checkbox label a:hover {
  text-decoration: underline;
}

.btn-signup {
  width: 100%;
  padding: 1rem 1.5rem;
  background: #2B86F5;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(43, 134, 245, 0.4);
  margin-top: 0.5rem;
}

.btn-signup:hover {
  background: #1E6FDB;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(43, 134, 245, 0.5);
}

.btn-signup:active {
  transform: translateY(0);
}

/* Footer */
.signup-footer {
  text-align: center;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
}

.signup-footer p {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  color: #64748b;
  margin: 0;
}

.signin-link {
  color: #2B86F5;
  text-decoration: none;
  font-weight: 600;
}

.signin-link:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .signup-page {
    padding: 1.5rem 1rem;
  }

  .signup-card {
    padding: 2.5rem 2rem;
    border-radius: 20px;
  }

  .signup-title {
    font-size: 1.75rem;
  }

  .brand-text {
    font-size: 1.5rem;
  }

  .logo-icon {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 576px) {
  .signup-page {
    padding: 1rem 0.75rem;
  }

  .signup-card {
    padding: 2rem 1.5rem;
    border-radius: 18px;
  }

  .signup-title {
    font-size: 1.5rem;
  }

  .signup-subtitle {
    font-size: 0.9375rem;
  }

  .brand-text {
    font-size: 1.375rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .floating-icon {
    opacity: 0.1;
  }
}

@media (max-width: 400px) {
  .signup-card {
    padding: 1.75rem 1.25rem;
  }

  .signup-header {
    margin-bottom: 1.5rem;
  }

  .logo-section {
    margin-bottom: 1.25rem;
  }

  .signup-title {
    font-size: 1.375rem;
  }

  .social-btn {
    font-size: 0.875rem;
    padding: 0.75rem 1.25rem;
  }
}
</style>
