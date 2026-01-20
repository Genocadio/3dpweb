import { Mail, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, serviceName: string) => {
    e.preventDefault()
    
    // Scroll to services section
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "center" })
      
      // Find and highlight the specific service card
      setTimeout(() => {
        const serviceCards = servicesSection.querySelectorAll(".service-card")
        const serviceMap: { [key: string]: number } = {
          "Data Strategy": 0,
          "Data Management": 1,
          "Business Intelligence": 2,
          "Data Protection": 5,
        }
        
        const cardIndex = serviceMap[serviceName]
        if (cardIndex !== undefined && serviceCards[cardIndex]) {
          const card = serviceCards[cardIndex] as HTMLElement
          card.scrollIntoView({ behavior: "smooth", block: "center" })
          card.classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-background", "rounded-3xl")
          setTimeout(() => {
            card.classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-background")
          }, 3000)
        }
      }, 500)
    }
  }

  const handleTrainingClick = (e: React.MouseEvent<HTMLAnchorElement>, trainingName: string) => {
    e.preventDefault()
    
    // Scroll to training section
    const trainingSection = document.getElementById("training")
    if (trainingSection) {
      trainingSection.scrollIntoView({ behavior: "smooth", block: "center" })
      
      // Find and highlight the specific training card
      setTimeout(() => {
        const trainingCards = trainingSection.querySelectorAll(".training-card")
        const trainingMap: { [key: string]: number } = {
          "Data Analysis": 1,
          "Data Engineering": 2,
          "DPO Training": 3,
          "After-Work Programs": 0,
        }
        
        const cardIndex = trainingMap[trainingName]
        if (cardIndex !== undefined && trainingCards[cardIndex]) {
          const card = trainingCards[cardIndex] as HTMLElement
          card.scrollIntoView({ behavior: "smooth", block: "center" })
          card.classList.add("ring-2", "ring-accent", "ring-offset-2", "ring-offset-background", "rounded-3xl")
          setTimeout(() => {
            card.classList.remove("ring-2", "ring-accent", "ring-offset-2", "ring-offset-background")
          }, 3000)
        }
      }, 500)
    }
  }

  return (
    <footer className="relative py-16 border-t border-white/20" style={{ backgroundColor: "#102C43" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/60 rounded-xl px-3 py-2">
                <Image 
                  src="/loggo.webp" 
                  alt="3DP DataPro Logo" 
                  width={280} 
                  height={120}
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering businesses to discover and harness the full potential of data.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://x.com/3dpRwanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white/80 group-hover:text-[#112B44]" />
              </a>
              <a 
                href="https://www.linkedin.com/company/106318788/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/80 group-hover:text-[#112B44]" />
              </a>
              <a 
                href="https://www.instagram.com/datadrivendecisionpartners/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/80 group-hover:text-[#112B44]" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61572571655706" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white/80 group-hover:text-[#112B44]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" onClick={(e) => handleServiceClick(e, "Data Strategy")} className="text-white/80 hover:text-white transition-colors">
                  Data Strategy
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleServiceClick(e, "Data Management")} className="text-white/80 hover:text-white transition-colors">
                  Data Management
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleServiceClick(e, "Business Intelligence")} className="text-white/80 hover:text-white transition-colors">
                  Business Intelligence
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleServiceClick(e, "Data Protection")} className="text-white/80 hover:text-white transition-colors">
                  Data Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Training */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Training</h3>
            <ul className="space-y-2">
              <li>
                <a href="#training" onClick={(e) => handleTrainingClick(e, "Data Analysis")} className="text-white/80 hover:text-white transition-colors">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleTrainingClick(e, "Data Engineering")} className="text-white/80 hover:text-white transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleTrainingClick(e, "DPO Training")} className="text-white/80 hover:text-white transition-colors">
                  DPO Training
                </a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleTrainingClick(e, "After-Work Programs")} className="text-white/80 hover:text-white transition-colors">
                  After-Work Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-primary" />
                <span>3dp.rwanda@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kigali, Rwanda</span>
              </div>
              <a 
                href="mailto:3dp.rwanda@gmail.com"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} 3DP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
