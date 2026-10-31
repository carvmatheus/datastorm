'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { name: 'Gasto Claro', description: 'Auditoria de gastos SaaS', href: 'https://auditoria-saas.datastorm.cloud' },
  { name: 'Radar Concorrente', description: 'Monitoramento de concorrentes', href: 'https://monitoramento-concorrentes.datastorm.cloud' },
  { name: 'Fluxo Documental', description: 'Automação de documentos', href: 'https://automacao-documentos.datastorm.cloud' },
  { name: 'Contestação em Ordem', description: 'Recuperação de chargebacks', href: 'https://recuperacao-chargeback.datastorm.cloud' },
  { name: 'Resposta Segura', description: 'Questionários de segurança', href: 'https://questionario-seguranca.datastorm.cloud' },
  { name: 'Custo de API Claro', description: 'Auditoria de custos de APIs', href: 'https://auditoria-apis.datastorm.cloud' },
  { name: 'Argumento Comercial', description: 'Inteligência competitiva', href: 'https://inteligencia-competitiva.datastorm.cloud' },
]

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isProjectsOpen) return
    const handleClick = (e: MouseEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) {
        setIsProjectsOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProjectsOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isProjectsOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
              className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DataStorm
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="relative" ref={projectsRef}>
              <button
                type="button"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                aria-expanded={isProjectsOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
              >
                Projetos
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-3 w-80 rounded-lg bg-dark-800 border border-dark-700 shadow-xl py-2"
                  >
                    {projects.map((project) => (
                      <a
                        key={project.href}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsProjectsOpen(false)}
                        className="flex items-start justify-between gap-3 px-4 py-2 hover:bg-dark-700 transition-colors"
                      >
                        <span>
                          <span className="block text-sm font-medium text-gray-100">{project.name}</span>
                          <span className="block text-xs text-gray-400">{project.description}</span>
                        </span>
                        <ExternalLink size={14} className="mt-1 shrink-0 text-gray-500" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800 border-t border-dark-700"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="block text-gray-300 hover:text-primary-400 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-dark-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 pb-2">
                  Projetos
                </p>
                {projects.map((project) => (
                  <a
                    key={project.href}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    <span className="block text-gray-300 hover:text-primary-400 transition-colors">
                      {project.name}
                    </span>
                    <span className="block text-xs text-gray-500">{project.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

