

            const state = {
                activeTab: 'fases',
                checklistData: [
    // 1. LÍNGUA PORTUGUESA
    { id: 'lp1', category: 'Língua Portuguesa', text: '🔥 QUENTE - Compreensão e Interpretação de Textos: Análise de textos variados, digitais (e-mails, redes sociais) e multimodais (gráficos, tabelas).' },
    { id: 'lp2', category: 'Língua Portuguesa', text: '🔥 QUENTE - Coesão, coerência e uso de conectores.' },
    { id: 'lp3', category: 'Língua Portuguesa', text: '🔥 QUENTE - Pontuação: Uso correto dos sinais de pontuação.' },
    { id: 'lp4', category: 'Língua Portuguesa', text: '🔥 QUENTE - Concordância verbal e nominal.' },
    { id: 'lp5', category: 'Língua Portuguesa', text: '🔥 QUENTE - Regência verbal e nominal e uso da crase.' },
    { id: 'lp6', category: 'Língua Portuguesa', text: '🔥 QUENTE - Reescrita de frases e textos.' },
    { id: 'lp7', category: 'Língua Portuguesa', text: '🟡 MORNO - Emprego das classes de palavras e colocação de pronomes.' },
    { id: 'lp8', category: 'Língua Portuguesa', text: '🟡 MORNO - Emprego correto de tempos e modos verbais.' },
    { id: 'lp9', category: 'Língua Portuguesa', text: '🟡 MORNO - Estrutura de orações e períodos (Sintaxe).' },
    { id: 'lp10', category: 'Língua Portuguesa', text: '🟡 MORNO - Relações de coordenação e subordinação.' },
    { id: 'lp11', category: 'Língua Portuguesa', text: '🟡 MORNO - Significado de palavras (sinônimos, antônimos, etc.).' },
    { id: 'lp12', category: 'Língua Portuguesa', text: '❄️ FRIO - Ortografia oficial.' },
    { id: 'lp13', category: 'Língua Portuguesa', text: '❄️ FRIO - Identificação de tipos textuais.' },
    { id: 'lp14', category: 'Língua Portuguesa', text: '❄️ FRIO - Figuras de linguagem, denotação e conotação.' },
    { id: 'lp15', category: 'Língua Portuguesa', text: '❄️ FRIO - Adequação da linguagem a diferentes contextos.' },

    // 2. RACIOCÍNIO LÓGICO
    { id: 'rlm1', category: 'Raciocínio Lógico', text: '🔥 QUENTE - Proposições e conectivos.' },
    { id: 'rlm2', category: 'Raciocínio Lógico', text: '🔥 QUENTE - Estruturas lógicas e argumentação (dedução, indução).' },
    { id: 'rlm3', category: 'Raciocínio Lógico', text: '❄️ FRIO - Progressões (aritmética e geométrica).' },
    { id: 'rlm4', category: 'Raciocínio Lógico', text: '❄️ FRIO - Raciocínio verbal, matemático e sequencial.' },
    { id: 'rlm5', category: 'Raciocínio Lógico', text: '❄️ FRIO - Orientação no espaço e no tempo.' },
    
    // MATEMÁTICA BÁSICA
    { id: 'mB1', category: 'Matemática Básica', text: '🔥 QUENTE - Razão, proporção, porcentagem e regra de três (simples e composta).' },
    { id: 'mB2', category: 'Matemática Básica', text: '🔥 QUENTE - Análise de Dados: Estatística básica (média, moda, mediana) e Interpretação de gráficos e tabelas.' },
    { id: 'mB3', category: 'Matemática Básica', text: '🟡 MORNO - Princípios de contagem (arranjos, combinações, permutações).' },
    { id: 'mB4', category: 'Matemática Básica', text: '🟡 MORNO - Noções de probabilidade.' },
    { id: 'mB5', category: 'Matemática Básica', text: '🟡 MORNO - Juros simples e compostos.' },
    { id: 'mB6', category: 'Matemática Básica', text: '🟡 MORNO - Diagramas lógicos.' },
    { id: 'mB7', category: 'Matemática Básica', text: '❄️ FRIO - Operações com conjuntos numéricos.' },
    { id: 'mB8', category: 'Matemática Básica', text: '❄️ FRIO - Descontos e taxas (Mat. Financeira).' },
    { id: 'mB9', category: 'Matemática Básica', text: '❄️ FRIO - Funções e equações (1º e 2º graus).' },

    // 3. NOÇÕES DE INFORMÁTICA
    { id: 'inf1', category: 'Noções de Informática', text: '🔥 QUENTE - Segurança da Informação: vírus, antivírus, firewall e procedimentos de backup.' },
    { id: 'inf2', category: 'Noções de Informática', text: '🔥 QUENTE - Editores de texto, planilhas e apresentações (Microsoft 365, Google Workspace).' },
    { id: 'inf3', category: 'Noções de Informática', text: '🔥 QUENTE - Navegadores (Chrome, Firefox, Edge) e sites de busca.' },
    { id: 'inf4', category: 'Noções de Informática', text: '🟡 MORNO - Noções de Windows (10 e 11).' },
    { id: 'inf5', category: 'Noções de Informática', text: '🟡 MORNO - Armazenamento em nuvem (OneDrive, Google Drive).' },
    { id: 'inf6', category: 'Noções de Informática', text: '🟡 MORNO - Conceitos básicos de redes, internet e intranet.' },
    { id: 'inf7', category: 'Noções de Informática', text: '🟡 MORNO - Transformação Digital: Inteligência Artificial e computação em nuvem.' },
    { id: 'inf8', category: 'Noções de Informática', text: '❄️ FRIO - Hardware, software e periféricos.' },
    { id: 'inf9', category: 'Noções de Informática', text: '❄️ FRIO - Organização de arquivos e pastas.' },
    { id: 'inf10', category: 'Noções de Informática', text: '❄️ FRIO - Uso de e-mail (Outlook, webmail).' },
    { id: 'inf11', category: 'Noções de Informática', text: '❄️ FRIO - Sistemas móveis (Android e iOS).' },
    { id: 'inf12', category: 'Noções de Informática', text: '❄️ FRIO - Ferramentas de comunicação (Teams, Meet).' },

    // 4. LEGISLAÇÃO E ÉTICA NA ADMINISTRAÇÃO PÚBLICA
    { id: 'leg1', category: 'Legislação e Ética na Adm. Pública', text: '🔥 QUENTE - Lei nº 8.429/1992 (Improbidade Administrativa).' },
    { id: 'leg2', category: 'Legislação e Ética na Adm. Pública', text: '🔥 QUENTE - Lei nº 9.784/1999 (Processo Administrativo), direitos e deveres.' },
    { id: 'leg3', category: 'Legislação e Ética na Adm. Pública', text: '🔥 QUENTE - Princípios fundamentais da Administração Pública.' },
    { id: 'leg4', category: 'Legislação e Ética na Adm. Pública', text: '🟡 MORNO - Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018).' },
    { id: 'leg5', category: 'Legislação e Ética na Adm. Pública', text: '🟡 MORNO - Lei nº 12.527/2011 (Transparência e Acesso à Informação) e seus decretos.' },
    { id: 'leg6', category: 'Legislação e Ética na Adm. Pública', text: '❄️ FRIO - Conceito de ética na função pública.' },

    // 5. ADMINISTRAÇÃO, ATENDIMENTO E ARQUIVO
    { id: 'adm1', category: 'Administração, Atendimento e Arquivo', text: '🔥 QUENTE - Atendimento ao Público: Qualidade, postura profissional, atendimento telefônico e presencial.' },
    { id: 'adm2', category: 'Administração, Atendimento e Arquivo', text: '🔥 QUENTE - Comunicação Organizacional: Redação oficial de documentos e tipos de documentos administrativos.' },
    { id: 'adm3', category: 'Administração, Atendimento e Arquivo', text: '🔥 QUENTE - Noções de arquivologia: Tipos de arquivos, métodos de arquivamento e gestão eletrônica/digitalização.' },
    { id: 'adm4', category: 'Administração, Atendimento e Arquivo', text: '🔥 QUENTE - Funções administrativas: planejamento, organização, direção e controle.' },
    { id: 'adm5', category: 'Administração, Atendimento e Arquivo', text: '🟡 MORNO - Trabalho em Equipe: Personalidade, relacionamento interpessoal, empatia e comportamento.' },
    { id: 'adm6', category: 'Administração, Atendimento e Arquivo', text: '🟡 MORNO - Protocolo: recepção, classificação, registro, distribuição e expedição de documentos.' },
    { id: 'adm7', category: 'Administração, Atendimento e Arquivo', text: '🟡 MORNO - Noções de Administração de Pessoas e Administração de Materiais.' },
    { id: 'adm8', category: 'Administração, Atendimento e Arquivo', text: '🟡 MORNO - Gestão de estoque e suprimentos de escritório.' },
    { id: 'adm9', category: 'Administração, Atendimento e Arquivo', text: '❄️ FRIO - Noções de Administração Financeira.' },
    { id: 'adm10', category: 'Administração, Atendimento e Arquivo', text: '❄️ FRIO - Procedimentos Administrativos e Manuais Administrativos.' },
    { id: 'adm11', category: 'Administração, Atendimento e Arquivo', text: '❄️ FRIO - Organização e Métodos.' },
    { id: 'adm12', category: 'Administração, Atendimento e Arquivo', text: '❄️ FRIO - Estrutura Organizacional: Conceito e tipos.' },
    { id: 'adm13', category: 'Administração, Atendimento e Arquivo', text: '❄️ FRIO - Noções de cidadania e relações públicas.' },

    // 6. LEGISLAÇÃO ESPECÍFICA
    { id: 'esp1', category: 'Legislação Específica', text: '🔥 QUENTE - Lei nº 6.530/1978 (Regulamentação da profissão e órgãos de fiscalização).' },
    { id: 'esp2', category: 'Legislação Específica', text: '🔥 QUENTE - Decreto nº 81.871/1978 (Regulamenta a Lei nº 6.530/1978).' },
    { id: 'esp3', category: 'Legislação Específica', text: '🔥 QUENTE - Resolução COFECI nº 326/1992 (Código de Ética Profissional).' },
    { id: 'esp4', category: 'Legislação Específica', text: '🔥 QUENTE - Resolução COFECI nº 146/1982 (Código de Processo Disciplinar).' },
    { id: 'esp5', category: 'Legislação Específica', text: '🔥 QUENTE - Lei nº 10.406/2002 (Código Civil - Cap. XIII: Da Corretagem).' },
    { id: 'esp6', category: 'Legislação Específica', text: '🟡 MORNO - Resolução COFECI nº 1.126/2009 (Regimento COFECI e Padrão para Regionais).' },
    { id: 'esp7', category: 'Legislação Específica', text: '🟡 MORNO - Resolução COFECI nº 327/1992 (Normas para inscrição PF e PJ).' },
    { id: 'esp8', category: 'Legislação Específica', text: '🟡 MORNO - Resolução COFECI nº 1.065/2007 (Nome abreviado, fantasia e publicidade).' },
    { id: 'esp9', category: 'Legislação Específica', text: '🟡 MORNO - Resolução COFECI nº 458/1995 (Destaque do registro em anúncios).' },
    { id: 'esp10', category: 'Legislação Específica', text: '🟡 MORNO - Resolução COFECI nº 1.484/2022 (Isenção e remissão de débitos).' },
    { id: 'esp11', category: 'Legislação Específica', text: '❄️ FRIO - Decreto-Lei nº 2.848/1940 (Código Penal - Art. 205).' },
    { id: 'esp12', category: 'Legislação Específica', text: '❄️ FRIO - Decreto-Lei nº 3.688/1941 (LCP - Art. 47).' },
    { id: 'esp13', category: 'Legislação Específica', text: '❄️ FRIO - Resolução COFECI nº 315/1991 (Pena pecuniária).' },
    { id: 'esp14', category: 'Legislação Específica', text: '❄️ FRIO - Resolução COFECI nº 325/1992 (Comissão de Atendimento ao Consumidor).' },
    { id: 'esp15', category: 'Legislação Específica', text: '❄️ FRIO - Resolução COFECI nº 1.452/2021 (Emenda Regimental).' }
]
            };
