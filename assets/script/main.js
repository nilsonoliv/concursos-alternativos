 /**
         * Lógica Principal do Aplicativo
         * Usamos um padrão chamado "Module Pattern" (IIFE) para manter nosso código
         * isolado e seguro, evitando misturar com outros scripts da página.
         */
        const DashboardApp = (function() {
            'use strict';

            // 1. ESTADO DA APLICAÇÃO (STATE)
            // Aqui guardamos as informações que o aplicativo precisa lembrar.
            const state = {
                activeTab: 'fases', // Aba que aparece primeiro
                
                // Dados do nosso checklist. Você pode adicionar mais matérias aqui.
                checklistData: [
                    // 1. LÍNGUA PORTUGUESA
                    { id: 'di1', category: 'Dias', text: 'Dia 1' },
                    { id: 'di2', category: 'Dias', text: 'Dia 2' },
                    { id: 'di3', category: 'Dias', text: 'Dia 3' },
                    { id: 'di4', category: 'Dias', text: 'Dia 4' },
                    { id: 'di5', category: 'Dias', text: 'Dia 5' },

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

                    // 2. RACIOCÍNIO LÓGICO E MATEMÁTICA
                    { id: 'rlm1', category: 'Raciocínio Lógico e Matemática', text: '🔥 QUENTE - Proposições e conectivos.' },
                    { id: 'rlm2', category: 'Raciocínio Lógico e Matemática', text: '🔥 QUENTE - Estruturas lógicas e argumentação (dedução, indução).' },
                    { id: 'rlm3', category: 'Raciocínio Lógico e Matemática', text: '🔥 QUENTE - Razão, proporção, porcentagem e regra de três (simples e composta).' },
                    { id: 'rlm4', category: 'Raciocínio Lógico e Matemática', text: '🔥 QUENTE - Análise de Dados: Estatística básica (média, moda, mediana) e Interpretação de gráficos e tabelas.' },
                    { id: 'rlm5', category: 'Raciocínio Lógico e Matemática', text: '🟡 MORNO - Princípios de contagem (arranjos, combinações, permutações).' },
                    { id: 'rlm6', category: 'Raciocínio Lógico e Matemática', text: '🟡 MORNO - Noções de probabilidade.' },
                    { id: 'rlm7', category: 'Raciocínio Lógico e Matemática', text: '🟡 MORNO - Juros simples e compostos.' },
                    { id: 'rlm8', category: 'Raciocínio Lógico e Matemática', text: '🟡 MORNO - Diagramas lógicos.' },
                    { id: 'rlm9', category: 'Raciocínio Lógico e Matemática', text: '❄️ FRIO - Operações com conjuntos numéricos.' },
                    { id: 'rlm10', category: 'Raciocínio Lógico e Matemática', text: '❄️ FRIO - Descontos e taxas (Mat. Financeira).' },
                    { id: 'rlm11', category: 'Raciocínio Lógico e Matemática', text: '❄️ FRIO - Funções e equações (1º e 2º graus).' },
                    { id: 'rlm12', category: 'Raciocínio Lógico e Matemática', text: '❄️ FRIO - Progressões (aritmética e geométrica).' },
                    { id: 'rlm13', category: 'Raciocínio Lógico e Matemática', text: '❄️ FRIO - Raciocínio verbal, matemático e sequencial.' },
                    { id: 'rlm14', category: 'Raciocínio Lógico e Matemática', text: '❄️ FRIO - Orientação no espaço e no tempo.' },

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

            // 2. REFERÊNCIAS DA TELA (DOM)
            // Aqui "pegamos" os elementos do HTML para poder mexer neles pelo JavaScript.
            const DOM = {
                tabButtons: document.querySelectorAll('.tab-btn'),
                tabContents: document.querySelectorAll('.tab-content'),
                checklistContainer: document.getElementById('checklist-container'),
                btnResetChecklist: document.getElementById('btn-reset-checklist'),
                btnExport: document.getElementById('btn-export'),
                btnImportTrigger: document.getElementById('btn-import-trigger'),
                fileImport: document.getElementById('file-import'),
                countdownDays: document.getElementById('countdown-days'),
                btnStudyToday: document.getElementById('btn-study-today'),
                currentStreakDisplay: document.getElementById('current-streak'),
                bestStreakDisplay: document.getElementById('best-streak'),
                phaseCheckboxes: document.querySelectorAll('.phase-checkbox')
            };

            // 3. FUNÇÕES DA APLICAÇÃO

            /**
             * Função para trocar as abas (Fases, Evolução, Checklist, Backup)
             */
            const switchTab = (targetId) => {
                state.activeTab = targetId;
                
                // Liga a cor no botão clicado e desliga nos outros
                DOM.tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.target === targetId));
                
                // Mostra o conteúdo da aba clicada e esconde os outros
                DOM.tabContents.forEach(content => content.classList.toggle('active', content.id === `content-${targetId}`));
            };

            /**
             * Organiza os itens do checklist agrupando-os por categoria/matéria
             */
            const groupChecklistByCategory = () => {
                return state.checklistData.reduce((acc, curr) => {
                    // Se a categoria ainda não existe na lista, cria uma lista vazia e depois adiciona o item
                    (acc[curr.category] = acc[curr.category] || []).push(curr);
                    return acc;
                }, {});
            };

            /**
             * Função executada quando o usuário clica para marcar/desmarcar um item do checklist
             */
            const handleCheckToggle = (e) => {
                // Confere se o que foi clicado foi realmente a caixinha de seleção (checkbox)
                if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
                    const { id, checked } = e.target;
                    
                    // Salva a ação (marcado ou não) no "banco de dados" do navegador (localStorage)
                    localStorage.setItem(id, checked);
                    
                    // Redesenha a lista para que a reordenação (itens marcados descem) aconteça
                    renderChecklist();
                }
            };

            /**
             * Desenha (renderiza) o checklist na tela, respeitando os itens concluídos e a ordem
             */
            const renderChecklist = () => {
                // Limpa o que estava na tela antes
                DOM.checklistContainer.innerHTML = '';
                
                // Pega os itens agrupados por categoria
                const groupedData = groupChecklistByCategory();
                
                // Para cada categoria, cria o HTML na tela
                for (const category in groupedData) {
                    let html = `<div class="checklist-category"><h3 class="checklist-category-title">${category}</h3><div class="space-y-1">`;
                    
                    // LÓGICA DE REORDENAÇÃO:
                    // Vamos ordenar os itens dessa categoria: os que não estão marcados ficam em cima.
                    const sortedItems = groupedData[category].sort((a, b) => {
                        const aMarcado = localStorage.getItem(a.id) === 'true';
                        const bMarcado = localStorage.getItem(b.id) === 'true';
                        
                        // Se o status for o mesmo (ambos marcados ou ambos desmarcados), mantém a ordem original (pelo originalIndex)
                        if (aMarcado === bMarcado) {
                            return a.originalIndex - b.originalIndex;
                        }
                        
                        // Se 'a' estiver marcado, ele vai para o final da lista (retorna 1)
                        // Se não estiver, ele sobe (retorna -1)
                        return aMarcado ? 1 : -1;
                    });

                    // Agora criamos o HTML de cada item já ordenado
                    sortedItems.forEach(item => {
                        // Verifica no navegador se ele foi salvo como concluído antes
                        const isChecked = localStorage.getItem(item.id) === 'true';
                        
                        html += `
                            <label class="check-container ${isChecked ? 'checked-text' : ''}" id="label-${item.id}">
                                ${item.text}
                                <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
                                <span class="checkmark"></span>
                            </label>`;
                    });
                    
                    html += `</div></div>`;
                    
                    // Adiciona o bloco pronto na tela
                    DOM.checklistContainer.innerHTML += html;
                }
            };

            /**
             * Limpa o progresso do checklist e volta tudo ao normal
             */
            const resetChecklist = () => {
                if(confirm('Tem certeza que deseja limpar todo o progresso do checklist?')) {
                    // Remove apenas os itens do checklist do armazenamento do navegador
                    state.checklistData.forEach(item => localStorage.removeItem(item.id));
                    // Desenha a lista de novo na tela (agora vazia)
                    renderChecklist();
                }
            };

            /**
             * Faz o download do progresso em um arquivo (Backup)
             * ANTIGA FUNÇÃO SIMPLES DE EXPORTAÇÃO, SEM PERMISSÃO DE ESCOLHER O LOCAL:
             * Mantida temporariamente para referência, mas a nova função exportData() abaixo é a recomendada.
            const exportData = () => {
                const dataToExport = {};
                
                // Coleta dados do checklist
                state.checklistData.forEach(item => {
                    const val = localStorage.getItem(item.id);
                    if (val !== null) dataToExport[item.id] = val;
                });
                
                // Coleta dados das fases e ofensivas (streaks)
                ['lastStudyDate', 'currentStreak', 'bestStreak', 'phase-1-done', 'phase-2-done', 'phase-3-done', 'phase-4-done'].forEach(key => {
                    const val = localStorage.getItem(key);
                    if (val !== null) dataToExport[key] = val;
                });
                
                // Cria o arquivo virtual e força o download
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport));
                const a = document.createElement('a');
                a.href = dataStr;
                a.download = `backup_estudos_${new Date().toISOString().split('T')[0]}.json`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            };
            */

            // ==============================================================================
            // MÓDULO DE BACKUP E EXPORTAÇÃO
            // ==============================================================================

            /**
             * Coleta e formata os dados do LocalStorage para exportação.
             * Responsabilidade: Apenas preparar e empacotar os dados do usuário.
             * @returns {string} Dados formatados em string JSON.
             */
            const collectDataForExport = () => {
                const dataToExport = {};
                
                // Coleta o status de cada item do checklist
                state.checklistData.forEach(item => {
                    const val = localStorage.getItem(item.id);
                    if (val !== null) dataToExport[item.id] = val;
                });
                
                // Coleta dados das fases e do sistema de ofensivas (streaks)
                const extraKeys = ['lastStudyDate', 'currentStreak', 'bestStreak', 'phase-1-done', 'phase-2-done', 'phase-3-done', 'phase-4-done'];
                extraKeys.forEach(key => {
                    const val = localStorage.getItem(key);
                    if (val !== null) dataToExport[key] = val;
                });

                return JSON.stringify(dataToExport, null, 2);
            };

            /**
             * Salva o arquivo permitindo ao usuário escolher o diretório (File System Access API).
             * Responsabilidade: Interagir com o sistema de arquivos do sistema operacional.
             * @param {string} content - O conteúdo do arquivo JSON.
             * @param {string} fileName - O nome sugerido para o arquivo.
             */
            const saveFileWithPicker = async (content, fileName) => {
                try {
                    // Abre a janela nativa do SO para o usuário escolher onde salvar
                    const handle = await window.showSaveFilePicker({
                        suggestedName: fileName,
                        types: [{
                            description: 'Arquivo JSON de Backup',
                            accept: { 'application/json': ['.json'] },
                        }],
                    });
                    
                    // Cria um stream de escrita, salva o conteúdo e fecha o arquivo
                    const writable = await handle.createWritable();
                    await writable.write(content);
                    await writable.close();
                    
                    alert('Backup salvo com sucesso no local escolhido!');
                } catch (error) {
                    // Silencia o erro caso o usuário simplesmente clique em "Cancelar" na janela
                    if (error.name !== 'AbortError') {
                        console.error('Erro ao salvar o arquivo:', error);
                        alert('Não foi possível salvar o arquivo. Verifique as permissões do navegador.');
                    }
                }
            };

            /**
             * Fallback tradicional para navegadores que não suportam a API moderna.
             * Responsabilidade: Forçar o download caso window.showSaveFilePicker não exista.
             * @param {string} content - O conteúdo do arquivo JSON.
             * @param {string} fileName - O nome sugerido para o arquivo.
             */
            const saveFileFallback = (content, fileName) => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(content);
                const a = document.createElement('a');
                a.href = dataStr;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                a.remove();
            };

            /**
             * Orquestrador principal da exportação de dados.
             * Responsabilidade: Coordenar a coleta de dados e decidir qual método de salvamento utilizar.
             */
            const exportData = async () => {
                const jsonContent = collectDataForExport();
                const defaultFileName = 'dashboard2.json';

                // Verifica se o navegador possui suporte para perguntar o local de salvamento
                if (window.showSaveFilePicker) {
                    await saveFileWithPicker(jsonContent, defaultFileName);
                } else {
                    // Método clássico caso o navegador seja incompatível com a nova API
                    saveFileFallback(jsonContent, defaultFileName);
                }
            };




            /**
             * Lê o arquivo de backup e restaura o progresso
             */

            const handleImportFile = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const importedData = JSON.parse(event.target.result);
                        const validKeys = [...state.checklistData.map(item => item.id), 'lastStudyDate', 'currentStreak', 'bestStreak', 'phase-1-done', 'phase-2-done', 'phase-3-done', 'phase-4-done'];
                        
                        // SOLUÇÃO: Varrer todas as chaves mapeadas pela aplicação
                        validKeys.forEach(key => {
                            if (importedData[key] !== undefined) {
                                // Se o dado existe no backup, restaura
                                localStorage.setItem(key, importedData[key]);
                            } else {
                                // Se não existe no backup, significa que a ação não havia sido feita na época.
                                // Limpamos do navegador para evitar acumulo de progresso irreal!
                                localStorage.removeItem(key);
                            }
                        });
                        
                        alert('Eba! Seu backup foi restaurado com sucesso!');
                        
                        // Atualiza todas as partes visuais garantindo sincronia total
                        renderChecklist();
                        initStreak();
                        initPhases();
                        initCountdown(); // Inserido para forçar o recálculo e renderização do Header
                        switchTab('check'); 
                        
                    } catch (err) {
                        alert('Ops! O arquivo parece inválido ou corrompido.');
                    }
                    DOM.fileImport.value = ''; // Limpa o campo
                };
                reader.readAsText(file);
            };


            // Funções de utilidade para lidar com as datas
            const getTodayStr = () => {
                const d = new Date();
                return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            };

            const getDaysDiff = (dateStr1, dateStr2) => {
                const d1 = new Date(dateStr1 + 'T00:00:00');
                const d2 = new Date(dateStr2 + 'T00:00:00');
                return Math.floor((d2 - d1) / 86400000);
            };

            /**
             * Calcula os dias restantes para a prova
             */
            const initCountdown = () => {
                // Substitua esta data pela data real da prova
                const targetDate = new Date('2026-06-27T00:00:00'); 
                const today = new Date();
                today.setHours(0,0,0,0);
                
                const diffDays = Math.ceil((targetDate - today) / 86400000);
                if(DOM.countdownDays) DOM.countdownDays.innerText = diffDays > 0 ? `${diffDays} dias` : "Chegou o dia!";
            };

            /**
             * Verifica se o aluno perdeu a ofensiva (dias seguidos) e atualiza o visual
             */
            const initStreak = () => {
                const todayStr = getTodayStr();
                let lastStudy = localStorage.getItem('lastStudyDate');
                let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
                let bestStreak = parseInt(localStorage.getItem('bestStreak')) || 0;

                // Se o último dia que ele estudou faz mais de 1 dia (ontem), ele perde a sequência
                if (lastStudy && getDaysDiff(lastStudy, todayStr) > 1) {
                    currentStreak = 0;
                    localStorage.setItem('currentStreak', 0);
                }
                updateStreakUI(currentStreak, bestStreak, lastStudy === todayStr);
            };

            const updateStreakUI = (current, best, isDoneToday) => {
                if(DOM.currentStreakDisplay) DOM.currentStreakDisplay.innerText = current;
                if(DOM.bestStreakDisplay) DOM.bestStreakDisplay.innerText = best;
                
                // Atualiza o botão dependendo se já foi clicado hoje
                if(DOM.btnStudyToday) {
                    DOM.btnStudyToday.innerHTML = isDoneToday ? '<i class="fas fa-check-double"></i> Concluído!' : '<i class="fas fa-check-circle"></i> Estudei Hoje!';
                    DOM.btnStudyToday.className = isDoneToday ? 'btn-streak btn-streak-done' : 'btn-streak btn-streak-todo';
                    DOM.btnStudyToday.disabled = isDoneToday;
                }
            };

            /**
             * Botão "Estudei hoje": Conta um dia na sequência
             */
            const markStudyToday = () => {
                const todayStr = getTodayStr();
                let lastStudy = localStorage.getItem('lastStudyDate');
                let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
                let bestStreak = parseInt(localStorage.getItem('bestStreak')) || 0;

                if (!lastStudy) {
                    currentStreak = 1; // Primeiro dia de todos
                } else {
                    const diff = getDaysDiff(lastStudy, todayStr);
                    if (diff === 1) currentStreak += 1; // Estudou ontem, aumenta a sequência
                    else if (diff > 1) currentStreak = 1; // Furou dias, recomeça do 1
                }

                bestStreak = Math.max(bestStreak, currentStreak);
                localStorage.setItem('lastStudyDate', todayStr);
                localStorage.setItem('currentStreak', currentStreak);
                localStorage.setItem('bestStreak', bestStreak);
                updateStreakUI(currentStreak, bestStreak, true);
            };

            /**
             * Lida com o clique nos cartões de Fase (Fase 1: Base, Fase 2...)
             */
            const handlePhaseToggle = (e) => {
                const { id, checked } = e.target;
                const cardId = e.target.dataset.card;
                
                localStorage.setItem(id, checked);
                document.getElementById(cardId).classList.toggle('phase-completed', checked);
            };

            const initPhases = () => {
                DOM.phaseCheckboxes.forEach(chk => {
                    const isChecked = localStorage.getItem(chk.id) === 'true';
                    chk.checked = isChecked;
                    document.getElementById(chk.dataset.card).classList.toggle('phase-completed', isChecked);
                });
            };

            /**
             * "Ouvintes" de eventos: eles ficam esperando o usuário clicar nas coisas
             */
            const bindEvents = () => {
                // Cliques nas abas
                DOM.tabButtons.forEach(btn => btn.addEventListener('click', e => switchTab(e.currentTarget.dataset.target)));
                
                // Botões do Checklist
                DOM.btnResetChecklist.addEventListener('click', resetChecklist);
                DOM.checklistContainer.addEventListener('change', handleCheckToggle);
                
                // Fases
                DOM.phaseCheckboxes.forEach(chk => chk.addEventListener('change', handlePhaseToggle));
                
                // Backup
                if(DOM.btnExport) DOM.btnExport.addEventListener('click', exportData);
                if(DOM.btnImportTrigger) DOM.btnImportTrigger.addEventListener('click', () => DOM.fileImport.click());
                if(DOM.fileImport) DOM.fileImport.addEventListener('change', handleImportFile);
                
                // Estudei Hoje
                if(DOM.btnStudyToday) DOM.btnStudyToday.addEventListener('click', markStudyToday);
            };

            // 4. INICIALIZAÇÃO
            // Essa é a parte do código exposta para fora (public), que inicia tudo.
            return {
                init: () => {
                    // Salva a posição original de cada item do checklist para que eles saibam pra onde voltar se desmarcados
                    state.checklistData.forEach((item, index) => {
                        item.originalIndex = index;
                    });

                    // Inicia as funcionalidades
                    renderChecklist();
                    initCountdown();
                    initStreak();
                    initPhases();
                    bindEvents(); // Liga os "botões" e escutadores
                }
            };

        })();

        

        // Quando a página terminar de carregar, inicie o Aplicativo
        document.addEventListener('DOMContentLoaded', DashboardApp.init);