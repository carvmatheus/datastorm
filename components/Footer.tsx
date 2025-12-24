'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'http://linkedin.com/in/matheus-carvalho-cardoso',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/carvmatheus',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'contato@datastorm.cloud',
      label: 'Email',
    },
  ]

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-2">DataStorm</h3>
            <p className="text-gray-400 text-sm">
              Transformando dados em resultados desde {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-700 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} DataStorm. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

