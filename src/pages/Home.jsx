import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Home() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    members: 0,
    events: 0,
    papers: 0,
    institutions: 0
  })

  const targetNumbers = {
    members: 500,
    events: 50,
    papers: 100,
    institutions: 20
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate numbers when section is in view
            const duration = 2000 // 2 seconds
            const steps = 60
            const interval = duration / steps

            let currentStep = 0

            const timer = setInterval(() => {
              currentStep++
              const progress = currentStep / steps

              setAnimatedNumbers({
                members: Math.round(targetNumbers.members * progress),
                events: Math.round(targetNumbers.events * progress),
                papers: Math.round(targetNumbers.papers * progress),
                institutions: Math.round(targetNumbers.institutions * progress)
              })

              if (currentStep === steps) {
                clearInterval(timer)
              }
            }, interval)

            // Disconnect observer after animation starts
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    const statsSection = document.querySelector('#stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="container">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <p className="text-sm sm:text-base font-medium text-primary-blue tracking-wide uppercase mb-4">Welcome to</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
              <span className="block text-primary-blue mb-2">Bachelor of Science</span>
              <span className="block text-primary-blue mb-2">Information Systems</span>
              <span className="block text-gray-900 mb-6">Education Community on Campus</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">Unlock Tech Opportunities & Connect with Industry Leaders</p>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Join the PSITE DFCAMCLP Chapter and be part of exciting technology events, a strong network of partners, a thriving community, and a growing family of members and alumni.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-t border-gray-100 bg-white py-12 sm:py-16">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">Our Partners</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Technology Partners */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Technology Partners</h3>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.digitalocean.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50">
                  <img
                    src="/Digital Ocean.png"
                    alt="Digital Ocean"
                    className="h-12 w-auto object-contain"
                  />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.notion.so/education" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50">
                  <img
                    src="/Notion.png"
                    alt="Notion Education"
                    className="h-12 w-auto object-contain"
                  />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50">
                  <img
                    src="/Github.png"
                    alt="GitHub"
                    className="h-12 w-auto object-contain"
                  />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.facebook.com/Guidlify" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50">
                  <img
                    src="/Guidlify.png"
                    alt="Guidlify"
                    className="h-12 w-auto object-contain"
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* Organization Partners */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Organization Partners</h3>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col space-y-6">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="https://theblokc.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-6 rounded-lg hover:bg-gray-50">
                  <img
                    src="/TheBlock.png"
                    alt="The Block"
                    className="h-16 w-auto object-contain"
                  />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-6 rounded-lg hover:bg-gray-50">
                  <img
                    src="/selyo.png"
                    alt="Selyo"
                    className="h-16 w-auto object-contain"
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* Venue Partners */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Venue Partners</h3>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center items-center min-h-[200px]">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.linkedin.com/company/ing-hubs-philippines/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-6 rounded-lg hover:bg-gray-50 w-full max-w-[240px]">
                  <img
                    src="/ing.png"
                    alt="ING"
                    className="w-full h-auto object-contain"
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container section bg-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Development</h3>
            <p className="text-gray-500">Access workshops, seminars, and training programs to enhance your teaching skills.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Networking Opportunities</h3>
            <p className="text-gray-500">Connect with fellow IT educators and industry professionals.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div id="stats-section" className="bg-white py-16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bachelor of Science in Information System Shaping the Future Since 2022</h2>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-primary-blue">{animatedNumbers.members}+</p>
                  <p className="text-gray-600">Active Members</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-primary-blue">{animatedNumbers.events}+</p>
                  <p className="text-gray-600">Annual Events</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-primary-blue">{animatedNumbers.papers}+</p>
                  <p className="text-gray-600">Research Papers</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-primary-blue">{animatedNumbers.institutions}+</p>
                  <p className="text-gray-600">Partner Institutions</p>
                </motion.div>
              </div>
            </div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6">
              <p className="text-lg text-gray-600">PSITE DFCAMCLP Chapter has been at the forefront of IT education excellence, fostering collaboration and innovation among educators.</p>
              <p className="text-lg text-gray-600">Through our programs and initiatives, we've helped shape the future of IT education in our region.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Social Proof Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Members Say</motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"PSITE has been instrumental in my growth as an IT educator. The networking opportunities and professional development programs are invaluable."</p>
              <div>
                <p className="font-semibold text-gray-900">Dr. Maria Santos</p>
                <p className="text-gray-500">Department Head, Computer Science</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"The collaborative research opportunities provided by PSITE have led to significant breakthroughs in IT education methodologies."</p>
              <div>
                <p className="font-semibold text-gray-900">Prof. James Rodriguez</p>
                <p className="text-gray-500">Senior IT Instructor</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"Being part of PSITE has opened doors to countless opportunities for both professional growth and student development."</p>
              <div>
                <p className="font-semibold text-gray-900">Ms. Anna Lee</p>
                <p className="text-gray-500">IT Program Coordinator</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-primary-blue py-16">
        <div className="container">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-white mb-8">Become a member today and be part of the leading Bachelor of Science in Information Systems network on campus.</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="inline-block bg-primary-white text-primary-blue px-8 py-4 rounded-lg font-medium hover:bg-primary-yellow transition-colors duration-200"
              >
                Join PSITE Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home