import { CategoryCreateInput } from '../src/repository/database/generated/prisma'
import { repository } from '../src/repository/repository'

const categories: CategoryCreateInput[] = [
  {
    title: 'Economia',
    description: '',
    slug: 'economia',
    statistics: {
      create: [
        {
          title: 'Produto Interno Bruto (PIB) nominal',
          shortTitle: 'PIB',
          slug: 'pib',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Renda per capta',
          shortTitle: 'Renda per capta',
          slug: 'renda-per-capta',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Risco de investimento',
          shortTitle: 'Risco de investimento',
          slug: 'risco-de-investimento',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Inflação',
          shortTitle: 'Inflação',
          slug: 'inflacao',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Dívida pública',
          shortTitle: 'Dívida pública',
          slug: 'divida-publica',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Dívida externa',
          shortTitle: 'Dívida externa',
          slug: 'divida-externa',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Taxa de Desemprego',
          shortTitle: 'Taxa de Desemprego',
          slug: 'taxa-de-desemprego',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        }
      ]
    }
  },
  {
    title: 'Segurança Pública',
    description: '',
    slug: 'seguranca',
    statistics: {
      create: [
        {
          title: 'Homicídios per capta',
          shortTitle: 'Homicídios per capta',
          slug: 'homicidios',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        }
      ]
    }
  },
  {
    title: 'Educação',
    description: '',
    slug: 'educacao',
    statistics: {
      create: [
        {
          title: 'Escolaridade',
          shortTitle: 'Escolaridade',
          slug: 'escolaridade',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Alfabetização',
          shortTitle: 'Alfabetização',
          slug: 'alfabetizacao',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Distorção de idade/série',
          shortTitle: 'Distorção de idade/série',
          slug: 'distorcao-idade-serie',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
      ]
    }
  },
  {
    title: 'Moradia',
    description: '',
    slug: 'moradia',
    statistics: {
      create: [
        {
          title: 'Brasileiros sem teto',
          shortTitle: 'Brasileiros sem teto',
          slug: 'brasileiros-sem-teto',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Brasileiros sem terra',
          shortTitle: 'Brasileiros sem terra',
          slug: 'brasileiros-sem-terra',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Casas com saneamento básico',
          shortTitle: 'Casas com saneamento básico',
          slug: 'casas-saneamento-básico',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Casas com energia elétrica',
          shortTitle: 'Casas com energia elétrica',
          slug: 'casas-com-energia-eletrica',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        }
      ]
    }
  },
  {
    title: 'Corrupção',
    description: '',
    slug: 'corrupcao',
    statistics: {
      create: [
        {
          title: 'Índice de percepção da corrupção',
          shortTitle: 'Índice de percepção da corrupção',
          slug: 'indice-percepcao-corrupcao',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        }
      ]
    }
  },
  {
    title: 'Social',
    description: '',
    slug: 'social',
    statistics: {
      create: [
        {
          title: 'IDH - Índice de Desenvolvimento Humano',
          shortTitle: 'IDH',
          slug: 'idh',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        },
        {
          title: 'Índice de Gini',
          shortTitle: 'Índice de Gini',
          slug: 'indice-gini',
          dataURL: '',
          description: '',
          xLabel: '',
          yLabel: '',
          xHeader: '',
          yHeader: '',
          source: ''
        }
      ]
    }
  },
]

const main = async () => {
  for (const category of categories) {
    await repository.createCategory(category)
  }
}

main()