import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { SERVICES, TESTIMONIALS } from './constants';
import * as Icons from 'lucide-react';import ScrollToTop from './components/ScrollToTop';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Why Choose Vantage Security?</h2>
            <p className="text-gray-600 text-lg">
              We combine experience with cutting-edge technology to provide a safety net that never fails.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-brand-700">
                <Icons.Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Certified Excellence</h3>
              <p className="text-gray-600">Licensed under PSARA, ISO 9001 certified, and fully compliant with all government regulations.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-brand-700">
                <Icons.UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Authorized Personnel</h3>
              <p className="text-gray-600">Rigorous background checks and intensive training for every guard.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-brand-700">
                <Icons.Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">24/7 dedicated control room ensuring immediate deployment in case of emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
              <p className="text-brand-200 max-w-xl">Comprehensive security solutions tailored to your specific requirements.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-400">
              View All Services <Icons.ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => {
              const Icon = service.icon || (Icons as any)[service.iconName] || Icons.Shield;
               return (
                <div key={service.id} className="bg-brand-800 p-8 rounded-xl border border-brand-700 hover:border-accent-500 transition-colors group">
                  <Icon size={40} className="text-accent-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-brand-200 mb-4 text-sm leading-relaxed">{service.description}</p>
                </div>
               )
            })}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-accent-500 font-semibold">
                View All Services <Icons.ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-900 mb-2">50+</div>
                <div className="text-brand-900 font-medium">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-900 mb-2">500</div>
                <div className="text-brand-900 font-medium">Security Guards</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-900 mb-2">1+</div>
                <div className="text-brand-900 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-900 mb-2">24/7</div>
                <div className="text-brand-900 font-medium">Support Center</div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#112240] mb-4">Our Services</h1>
          <p className="text-[#112240] max-w-2xl mx-auto">
            From physical guarding to digital surveillance, we offer a 360-degree approach to security.
          </p>
        </div>
        <div className="bg-gray-100 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon || (Icons as any)[service.iconName] || Icons.Shield;
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-700">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icons.CheckCircle2 size={16} className="text-accent-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
                   <Link to="/contact" className="text-brand-700 font-semibold hover:text-brand-900 text-sm">
                     Inquire About This Service &rarr;
                   </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
             <h1 className="text-4xl font-bold text-brand-900 mb-6">Securing the Future Since 2024</h1>
             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               Vantage Security and Facility Management was founded with a singular mission: to provide peace of mind in an uncertain world. 
               Starting with a small team of ex-servicemen, we have grown into a premier security agency trusted by multinational corporations, industrial giants, and residential complexes alike.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               Our approach blends the discipline of military heritage with modern corporate service standards. We believe that true security is not just about presence, but about prevention.
             </p>
          </div>
          <div className="relative">
             <img 
               src="src/meeting2.avif" 
               alt="Team meeting" 
               className="rounded-2xl shadow-2xl"
             />
             <div className="absolute -bottom-2 -left-2 bg-accent-500 p-2 rounded-lg shadow-md hidden md:block">
               <p className="font-bold text-brand-900 text-base">100%</p>
               <p className="text-brand-800 text-xs">Compliance Record</p>
             </div>
          </div>
        </div>

        <div className="mb-20">
           <h2 className="text-3xl font-bold text-brand-900 text-center mb-12">Our Core Values</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-100 text-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icons.Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">Honesty and transparency are the foundations of our operations. We are accountable for every action.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-100 text-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icons.Eye size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Vigilance</h3>
                <p className="text-gray-600">Always alert, always ready. Our rigorous training ensures our team spots threats before they materialize.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-100 text-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icons.HeartHandshake size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Service</h3>
                <p className="text-gray-600">We serve with pride. Our client's safety is our highest priority, delivered with courtesy and respect.</p>
              </div>
           </div>
        </div>
        
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12">
           <h2 className="text-3xl font-bold text-brand-900 text-center mb-12">What Our Clients Say</h2>
           <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-brand-100">
                  <div className="flex gap-1 text-accent-500 mb-4">
                    {[1,2,3,4,5].map(s => <Icons.Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-brand-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formState, setFormState] = React.useState({ name: '', email: '', phone: '', message: '', service: 'General Inquiry' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
      .then(async (res) => {
        setIsSubmitting(false);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.error || 'Failed to send message')
        }
        setSubmitted(true)
        setFormState({ name: '', email: '', phone: '', message: '', service: 'General Inquiry' })
      })
      .catch(err => {
        console.error('Contact form error:', err)
        setIsSubmitting(false)
        alert('Failed to send message. Please try again later.')
      })
  };

  return (
    <div className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
           <div>
              <h1 className="text-4xl font-bold text-brand-900 mb-6">Get in Touch</h1>
              <p className="text-gray-600 text-lg mb-8">
                Ready to secure your premises? Contact us today for a free consultation and quote. Our team is available 24/7 to answer your queries.
              </p>

              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-accent-500">
                      <Icons.MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-900">Headquarters</h3>
                      <p className="text-gray-600">#235, 1st cross, Subramanya nagar, Hebbal <br />MYSORE, India 570016</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-accent-500">
                      <Icons.Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-900">Phone</h3>
                      <p className="text-gray-600">+91 7483314499</p>
                      <p className="text-xs text-gray-400">Mon-Sat, 9am - 9pm</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-accent-500">
                      <Icons.Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-900">Email</h3>
                      <p className="text-gray-600">info@vantagesecurityservices.com</p>
                      <p className="text-xs text-gray-400">Response within 24 hours</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                   <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                     <Icons.Check size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-brand-900 mb-2">Message Sent!</h3>
                   <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                   <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-accent-600 font-semibold hover:text-accent-700"
                   >
                     Send another message
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <h3 className="text-xl font-bold text-brand-900 mb-6">Send us a Message</h3>
                    
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formState.phone}
                          onChange={e => setFormState({...formState, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                      <select 
                        value={formState.service}
                        onChange={e => setFormState({...formState, service: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                      >
                         <option>General Inquiry</option>
                         {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                   </div>

                   <button 
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-brand-900 text-white py-3 rounded-lg font-bold hover:bg-brand-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                   >
                     {isSubmitting ? (
                       <>
                         <Icons.Loader2 className="animate-spin" size={20} />
                         Sending...
                       </>
                     ) : (
                       'Send Message'
                     )}
                   </button>
                </form>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
