import mongoose from 'mongoose'

import { MONGODB_URL, MONGO_USER, MONGO_PASSWORD, NODE_ENV } from './constants'
import Document from '../models/document'

const defaultConfig = {
  user: MONGO_USER,
  pass: MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const devConfig = {
  ...defaultConfig,
  authSource: 'admin'
}

export const connectDatabase = () => {
  mongoose
    .connect(
      MONGODB_URL,
      NODE_ENV === 'development' ? devConfig : defaultConfig
    )
    .then(() => console.log('Database connected'))
    .catch((error) => console.log('Databased failed: ', error))
}

export const populateDatabase = async () => {
  const count = await Document.countDocuments({}).exec()
  if (count > 0) return

  const newDocuments = [
    {
      title:
        'Supremo Tribunal Federal STF - RECURSO EXTRAORDINÁRIO: RE 600091 MG',
      documentId: '855190585',
      artifact: 'JURISPRUDENCIA',
      body: 'EMENTA Recurso extraordinário – Competência – Processual Civil e do Trabalho – Repercussão geral reconhecida – Ação de indenização decorrente de danos sofridos em acidente de trabalho – Demanda diretamente decorrente de relação de trabalho, sendo irrelevante, para fins de fixação da competência, o fato de ter sido ajuizada por sucessores do trabalhador falecido – Aplicação da norma do art. 114, inciso VI, da Constituição Federal, com a redação que a ela foi dada pela Emenda Constitucional nº 45/04 – Reconhecimento da competência da Justiça Federal do Trabalho para o processamento do feito – Recurso não provido.',
      meritDecision: false,
      mandatoryPrecedent: true,
      readingTime: 397
    },
    {
      title: 'TJ-MG - Apelação Cível AC 10000190905844001 MG (TJ-MG)',
      documentId: '932582821',
      artifact: 'JURISPRUDENCIA',
      body: 'EMENTA: APELAÇÃO CÍVEL - AÇÃO DE REPARAÇÃO DE DANOS MORAIS- PROTESTO INDEVIDO - DANOS MORAIS - MAJORAÇÃO DO QUANTUM INDENIZATÓRIO. EMENTA: APELAÇÃO CÍVEL - AÇÃO DE REPARAÇÃO DE DANOS MORAIS- PROTESTO INDEVIDO - DANOS MORAIS - MAJORAÇÃO DO QUANTUM INDENIZATÓRIO.',
      mandatoryPrecedent: false,
      readingTime: 398
    },
    {
      title:
        'TST - AGRAVO DE INSTRUMENTO EM RECURSO DE REVISTA AIRR 111344220155150006 (TST)',
      documentId: '514504843',
      artifact: 'JURISPRUDENCIA',
      body: 'AGRAVO DE INSTRUMENTO EM RECURSO DE REVISTA. PRESCRIÇÃO. DANO MORAL. BANHEIROS INSUFICIENTES. SUSPEIÇÃO DE TESTEMUNHA. DANOS MORAIS. QUANTIFICAÇÃO DO DANO MORAL. Nega-se provimento ao Apelo quando não preenchidos os requisitos do art. 896 da CLT . Agravo de Instrumento conhecido e não provido.',
      readingTime: 399
    },
    {
      title: 'TJ-MG - Apelação Cível AC 10000200179265001 MG (TJ-MG)',
      documentId: '872996231',
      artifact: 'JURISPRUDENCIA',
      body: 'EMENTA: APELAÇÃO CÍVEL - INDENIZAÇÃO POR DANOS MORAIS E MATERIAIS - COMPANHIA AÉREA - ATRASO DE VOO E EXTRAVIO DE BAGAGEM - DANOS MORAIS - MAJORAÇÃO.',
      meritDecision: false,
      mandatoryPrecedent: true,
      readingTime: 400
    }
  ].map((doc) => new Document(doc))

  Document.bulkSave(newDocuments)
  console.log('Database populated')
}
