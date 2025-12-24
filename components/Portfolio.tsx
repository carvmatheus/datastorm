'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink, Monitor, Smartphone, ShoppingCart, BarChart3, Package, Truck } from 'lucide-react'

interface PortfolioImage {
  src: string
  title: string
  category: 'dashboard' | 'mobile' | 'store' | 'admin'
}

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const projectImages: PortfolioImage[] = [
    {
      src: '/portfolio/compredahorta/dashboard-pc.png',
      title: 'Dashboard Administrativo',
      category: 'dashboard',
    },
    {
      src: '/portfolio/compredahorta/dashboard-pedidos.png',
      title: 'Dashboard - Gestão de Pedidos',
      category: 'dashboard',
    },
    {
      src: '/portfolio/compredahorta/dashboard-ordem-produtos.png',
      title: 'Dashboard - Ordem de Produtos',
      category: 'dashboard',
    },
    {
      src: '/portfolio/compredahorta/dashboard-mobile.png',
      title: 'Dashboard Mobile',
      category: 'mobile',
    },
    {
      src: '/portfolio/compredahorta/pedidos-pc.png',
      title: 'Gestão de Pedidos',
      category: 'admin',
    },
    {
      src: '/portfolio/compredahorta/loja-pc.png',
      title: 'Loja - Página Inicial',
      category: 'store',
    },
    {
      src: '/portfolio/compredahorta/loja-menu-pc.png',
      title: 'Loja - Menu e Navegação',
      category: 'store',
    },
    {
      src: '/portfolio/compredahorta/loja-mobile.png',
      title: 'Loja - Versão Mobile',
      category: 'mobile',
    },
    {
      src: '/portfolio/compredahorta/carrinho-pc.png',
      title: 'Loja - Carrinho de Compras',
      category: 'store',
    },
    {
      src: '/portfolio/compredahorta/carrinho-pc-resumo.png',
      title: 'Loja - Resumo do Carrinho',
      category: 'store',
    },
  ]

  const categories = [
    { id: 'all', name: 'Todos', icon: Monitor },
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'admin', name: 'Administrativo', icon: Package },
    { id: 'store', name: 'Loja', icon: ShoppingCart },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
  ]

  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredImages =
    activeCategory === 'all'
      ? projectImages
      : projectImages.filter((img) => img.category === activeCategory)

  const openImage = (index: number) => {
    // Encontrar o índice real no array completo
    const realIndex = projectImages.findIndex(
      (img) => img.src === filteredImages[index].src
    )
    setSelectedImage(realIndex >= 0 ? realIndex : index)
    document.body.style.overflow = 'hidden'
  }

  const closeImage = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % projectImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + projectImages.length) % projectImages.length)
    }
  }

  return (
    <section
      id="portfolio"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Nosso</span>{' '}
            <span className="text-primary-400">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Soluções completas que transformam dados em resultados reais
          </p>
        </motion.div>

        {/* Project Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-gradient-to-br from-dark-700/50 to-dark-800/50 rounded-2xl p-8 md:p-12 border border-dark-600 hover:border-primary-500/50 transition-all"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Compredahorta
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Plataforma completa de e-commerce B2B para distribuição de produtos frescos.
                Sistema administrativo robusto com dashboards analíticos, gestão de pedidos,
                controle de transporte e loja virtual integrada.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Next.js', 'FastAPI', 'PostgreSQL', 'Python', 'TypeScript', 'Tailwind CSS', 'React Native'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg text-sm font-medium border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-primary-400">
                <ExternalLink className="w-5 h-5" />
                <span className="font-semibold">Sistema completo de gestão e-commerce</span>
              </div>
            </div>
            <div className="w-full md:w-96 h-64 md:h-80 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center border border-primary-500/30">
              <BarChart3 className="w-24 h-24 text-primary-400/50" />
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                    : 'bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            )
          })}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-dark-700/50 rounded-xl overflow-hidden border border-dark-600 hover:border-primary-500/50 transition-all cursor-pointer"
              onClick={() => openImage(index)}
            >
              <div className="relative aspect-video bg-dark-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/10 to-primary-600/10">
                          <div class="text-center p-4">
                            <p class="text-sm text-gray-400 mb-2">${image.title}</p>
                            <p class="text-xs text-gray-500">Clique para visualizar em tela cheia</p>
                          </div>
                        </div>
                      `
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 bg-primary-500/20 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-primary-400 font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-1">{image.title}</h4>
                <p className="text-xs text-gray-500 capitalize">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Telas', value: '10' },
            { label: 'Tecnologias', value: '7+' },
            { label: 'Módulos', value: '5+' },
            { label: 'Plataformas', value: '3' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-dark-700/30 rounded-xl p-6 text-center border border-dark-600"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-7xl w-full max-h-[95vh] bg-dark-800 rounded-xl overflow-hidden border border-dark-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {projectImages[selectedImage]?.title}
                </h3>
                <p className="text-primary-400 capitalize">
                  {projectImages[selectedImage]?.category}
                </p>
              </div>
              <button
                onClick={closeImage}
                className="text-gray-400 hover:text-white transition-colors bg-dark-800/80 p-2 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-[95vh] bg-dark-900 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectImages[selectedImage]?.src}
                  alt={projectImages[selectedImage]?.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const currentImage = projectImages[selectedImage]
                      parent.innerHTML = `
                        <div class="text-center text-gray-500">
                          <p class="text-lg mb-2">${selectedImage + 1} de ${projectImages.length}</p>
                          <p class="text-sm mb-4">${currentImage?.title}</p>
                          <p class="text-xs text-gray-600">Imagem não encontrada: ${currentImage?.src}</p>
                        </div>
                      `
                    }
                  }}
                />
              </div>

              {/* Navigation */}
              {projectImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-800/90 hover:bg-dark-800 text-white p-4 rounded-full transition-colors z-10 shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-800/90 hover:bg-dark-800 text-white p-4 rounded-full transition-colors z-10 shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Indicators */}
              {projectImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {projectImages.map((img, index) => {
                    const isActive = index === selectedImage
                    return (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedImage(index)
                        }}
                        className={`h-2 rounded-full transition-all ${
                          isActive
                            ? 'bg-primary-400 w-8'
                            : 'bg-gray-600 hover:bg-gray-500 w-2'
                        }`}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
