'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Target } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Database,
      title: 'Arquitetura de Dados',
      description: 'Projetamos e implementamos arquiteturas escaláveis e eficientes para seus dados.',
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Aplicamos IA e Machine Learning para extrair insights valiosos dos seus dados.',
    },
    {
      icon: Code,
      title: 'Desenvolvimento Customizado',
      description: 'Criamos soluções sob medida que se adaptam perfeitamente ao seu negócio.',
    },
    {
      icon: Target,
      title: 'Resultados Mensuráveis',
      description: 'Focamos em entregar valor real com métricas claras e resultados tangíveis.',
    },
  ]

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-800"
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
            <span className="text-white">Sobre a</span>{' '}
            <span className="text-primary-400">DataStorm</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Somos uma software house especializada em criar soluções inteligentes para negócios,
            transformando dados em vantagem competitiva. Desde o início, trabalhamos
            incansavelmente para tornar a tecnologia de dados acessível e poderosa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-700/50 p-6 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto italic">
            &ldquo;Não importa onde você começa, é como você progride a partir daí.&rdquo;
          </p>
          <p className="text-primary-400 mt-4 font-semibold">— DataStorm</p>
        </motion.div>
      </div>
    </section>
  )
}

