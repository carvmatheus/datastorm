'use client'

import { motion } from 'framer-motion'
import { BarChart3, Cloud, Shield, Zap, Layers, TrendingUp } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description:
        'Dashboards interativos e relatórios inteligentes para tomada de decisão baseada em dados.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Migração e otimização de infraestrutura na nuvem para máxima escalabilidade e performance.',
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description:
        'Políticas e processos para garantir qualidade, segurança e conformidade dos seus dados.',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description:
        'Sistemas de processamento em tempo real para insights instantâneos e ações imediatas.',
    },
    {
      icon: Layers,
      title: 'Data Pipelines',
      description:
        'Automação completa de pipelines de dados, desde a coleta até a visualização.',
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning',
      description:
        'Modelos preditivos e algoritmos de ML para prever tendências e otimizar processos.',
    },
  ]

  return (
    <section
      id="services"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Nossos</span>{' '}
            <span className="text-primary-400">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas para transformar seus dados em vantagem competitiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800/50 p-8 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all group hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

