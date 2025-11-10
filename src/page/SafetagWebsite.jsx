import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TrueinPartner from "../components/TrueinPartner";

import {
  Menu,
  X,
  Cloud,
  Code,
  Network,
  Shield,
  Users,
  Zap,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Server,
  Smartphone,
  Building2,
  Target,
  Award,
  Clock,
  Ticket,
  ArrowUpRight,
} from "lucide-react";

export default function SafetagWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "partners", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Inquiry from Safetag Website%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AService: ${formData.service}%0AMessage: ${formData.message}`;

    const mailtoLink = `mailto:info@safetag.co.in?subject=New Website Inquiry&body=${message}`;
    window.location.href = mailtoLink;

    const whatsappMessage = `New Inquiry:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    setTimeout(() => {
      window.open(
        `https://wa.me/919876543210?text=${whatsappMessage}`,
        "_blank"
      );
    }, 500);

    setFormStatus("Thank you! Your inquiry has been sent.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

    setTimeout(() => setFormStatus(""), 5000);
  };

  const services = [
    // {
    //   icon: <Ticket className="w-12 h-12" />,
    //   title: "InfraDesk AI",
    //   description:
    //     "AI-powered IT helpdesk and infrastructure asset management platform for streamlined ticket management and comprehensive asset tracking",
    //   features: [
    //     "Smart Ticketing System",
    //     "Asset Management",
    //     "AI-Powered Automation",
    //   ],
    // },
    // {
    //   icon: <Ticket className="w-12 h-12" />,
    //   title: (
    //     <a
    //       href="https://infradeskai.safetag.co.in"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="hover:text-blue-600 transition-colors"
    //     >
    //       InfraDesk AI
    //     </a>
    //   ),
    //   description:
    //     "AI-powered IT helpdesk and infrastructure asset management platform for streamlined ticket management and comprehensive asset tracking",
    //   features: [
    //     "Smart Ticketing System",
    //     "Asset Management",
    //     "AI-Powered Automation",
    //   ],
    // },

    {
      icon: <Ticket className="w-12 h-12" />,
      title: (
        <a
          href="https://infradeskai.safetag.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors inline-flex items-center gap-2"
        >
          <span>InfraDesk AI</span>
          <span className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600">
            <span className="text-xs">click me</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      ),
      description:
        "AI-powered IT helpdesk and infrastructure asset management platform for streamlined ticket management and comprehensive asset tracking",
      features: [
        "Smart Ticketing System",
        "Asset Management",
        "AI-Powered Automation",
      ],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Enterprise cloud infrastructure and migration services as Authorized Gold Partner for Yotta Cloud",
      features: ["Cloud Migration", "Infrastructure Setup", "24/7 Support"],
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Networking & Telephony",
      description:
        "Complete telephony systems and network infrastructure for seamless business communication",
      features: ["VoIP Systems", "Network Design", "Infrastructure Setup"],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description:
        "Custom web and mobile applications tailored to your business requirements",
      features: ["Web Development", "Mobile Apps", "Custom Solutions"],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "HRMS & Biometric",
      description:
        "Advanced HR management and face recognition solutions through Facto HRMS and Truein partnerships",
      features: ["HRMS Integration", "Face Recognition", "Attendance Systems"],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Digital Infrastructure",
      description:
        "Secure and scalable digital infrastructure solutions for modern enterprises",
      features: ["Security Systems", "Data Centers", "Backup Solutions"],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation Solutions",
      description:
        "Business process automation to enhance efficiency and reduce operational costs",
      features: [
        "Process Automation",
        "Workflow Design",
        "Integration Services",
      ],
    },
  ];

  // const partners = [
  //   { name: "Yotta Cloud", type: "Authorized Gold Partner" },
  //   { name: "Facto HRMS", type: "Authorized Gold Partner" },
  //   { name: "Truein Face Recognition", type: "Authorized Gold Partner" },
  // ];

  const partners = [
    { id: "yotta", name: "Yotta Cloud", type: "Authorized Gold Partner" },
    { id: "factohr", name: "Facto HRMS", type: "Authorized Gold Partner" },
    {
      id: "truein",
      name: "Truein Face Recognition",
      type: "Authorized Gold Partner",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Safetag Enterprises
                </h1>
                <p className="text-xs text-gray-600">LLP</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "services", "partners", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium transition-colors ${
                      activeSection === item
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["home", "about", "services", "partners", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Trusted Technology Partner
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "}
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end solutions for telephony, networking, cloud
                infrastructure, and automation. Delivering excellence across
                India with certified expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[Cloud, Server, Smartphone, Building2].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-12 h-12 text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Safetag Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Hyderabad-based registered firm delivering excellence in digital
              transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Registered & Certified
                  </h3>
                  <p className="text-gray-600">
                    Safetag Enterprises LLP is a registered firm with certified
                    experts emphasizing quality, ethics, and timely delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Authorized Gold Partner
                  </h3>
                  <p className="text-gray-600">
                    Recognized partner for Yotta Cloud, Facto HRMS, and Truein
                    Face Recognition applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Solutions
                  </h3>
                  <p className="text-gray-600">
                    Specializing in telephony, networking, cloud infrastructure,
                    automation, and custom software development.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Serving Telangana & India
                  </h3>
                  <p className="text-gray-600">
                    Supporting businesses across Telangana and pan-India with
                    reliable digital infrastructure solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To empower modern enterprises with cutting-edge digital
                  solutions that drive growth, efficiency, and innovation
                  through reliable technology partnerships and ethical business
                  practices.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Quality-driven project delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Ethical business practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Certified expert team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authorized Gold Partner status with industry-leading platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-600 font-semibold">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authorized Gold Partner status with industry-leading platforms
            </p>
          </div>

          {/* Your existing grid of simple partners */}
          {/* <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-600 font-semibold">{partner.type}</p>
              </div>
            ))}
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => {
              // Construct dynamic path based on partner id
              let path = `/partners/${partner.id}`;

              // Or you can use explicit if conditions:
              // let path = '/partners';
              // if (partner.id === 'truein') path = '/partners/truein';
              // else if (partner.id === 'factohr') path = '/partners/factohr';
              // else if (partner.id === 'yotta') path = '/partners/yotta';

              return (
                <Link
                  key={idx}
                  to={path}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 block"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">{partner.type}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a
              consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@safetag.co.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="mt-6 text-blue-100">
                  24/7 Support Available for Critical Issues
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="networking">Networking & Telephony</option>
                    <option value="development">Software Development</option>
                    <option value="hrms">HRMS & Biometric</option>
                    <option value="infrastructure">
                      Digital Infrastructure
                    </option>
                    <option value="automation">Automation Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {formStatus && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Safetag Enterprises</h3>
                  <p className="text-sm text-gray-400">LLP</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering businesses with cutting-edge digital solutions across
                India. Your trusted partner for technology transformation.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 Safetag Enterprises LLP. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("partners")}
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, Telangana</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@safetag.co.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              Built with excellence by Safetag Enterprises | Authorized Gold
              Partner for Yotta Cloud, Facto HRMS & Truein
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
