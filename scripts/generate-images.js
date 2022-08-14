const src = document.location.origin + '/';
const articles = [
    {
        title: 'Parque Estadual da Cachoeira da Fumaça',
        images: [
            {
                source: src + 'images/cachoeira_03.jpg',
                title: 'Cachoeira da Fumaça',
                description: 'Entrada Franca'
            },
            {
                source: src + 'images/cachoeira_02.jpg',
            },
            {
                source: src + 'images/cachoeira_01.jpg',
            },
        ],
        informations: [
            'O Parque Estadual da Cachoeira da Fumaça foi criado através do Decreto nº 2.791-ES (24 de agosto de 1984) e complementado através do Decreto nº 4.568-E (21 de setembro de 1990), quando então o Governo do Estado, atendendo uma demanda dos moradores dos municípios de Alegre, Guaçuí e Castelo e de outros Estados da Federação, desapropriou uma área de 27 ha, coberta basicamente de pastagem, mas que continha em seu interior a cachoeira do rio Braço Norte Direito ou Cachoeira da Fumaça, que atraía milhares de visitantes devido à sua grande beleza cênica.',
            'A sua cobertura original é do tipo Floresta Estacional Semidecidual, que, ao longo dos anos, foi sendo recomposta, com plantios de essências nativas/frutíferas. Apesar de suas dimensões implicarem em uma fauna reduzida, observou-se, com o replantio, o retorno de aves e pássaros como siriema, beija-flor, rolinha, bem-te-vi, gavião, jurutí, dentre outros.',
            'O rio Braço Norte Direito além de contribuir com a beleza cênica do local, através da Cachoeira da Fumaça com seus 140 metros de queda, é um afluente do rio Itapemirim, abastecendo vários centros urbanos.',
        ],
        moreInformationsUrl: 'https://iema.es.gov.br/PECF',
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29871.639012075284!2d-41.604323!3d-20.630696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd25574c4bf747e27!2sCachoeira%20da%20Fuma%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1660430455402!5m2!1spt-BR!2sbr'
    },
    {
        title: 'Igreja Matriz Nossa Senhora da Penha',
        images: [
            {
                source: src + 'images/igreja_01.jpg',
            },
            {
                source: src + 'images/igreja_02.jpg'
            },
            {
                source: src + 'images/igreja_03.jpg'
            },
        ],
        informations: [
            'A capela Mor de Alegre começou a ser construída em barro e madeira no ano de 1851, por iniciativa dos primeiros exploradores da região. Oficialmente, as terras do patrimônio de Alegre ficaram sobre responsabilidade da igreja com a condição de que esta doaria as terras à Nossa Senhora da Penha. Em 1868 o corpo da igreja foi edificado e a Capela Mor reparada.',
            'Novas ampliações foram realizadas entre 1914 e 1916 e também entre 1953 e 1968. Todas essas reformas resultaram num estilo barroco-gótico. A igreja de Nossa Senhora da Penha possui ainda magníficos vitrais retratando a vida de cristo e pinturas do Indiano Diwali.'
        ],
        moreInformationsUrl: 'https://pt-br.facebook.com/senhoradapenha/',
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29845.498917091347!2d-41.532584!3d-20.763462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1df82cb843e47b5f!2sPar%C3%B3quia%20Nossa%20Senhora%20da%20Penha!5e0!3m2!1spt-BR!2sbr!4v1660430659700!5m2!1spt-BR!2sbr'
    },
    {
        title: 'ARIE - Laerth Paiva Gama',
        images: [
            {
                source: src + 'images/arie_01.jpg',
            },
            {
                source: src + 'images/arie_02.jpg'
            },
            {
                source: src + 'images/arie_03.jpg'
            },
        ],
        informations: [
            'Possui um bosque reflorestado e várias nascentes, proporcionando um agradável contato com a natureza.',
            'É um local destinado ao estudo e preservação do meio ambiente, no qual é desenvolvido educação ambiental, produção de mudas nativas, exóticas e muito usado em estudos pelos universitários.'
        ],
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.2912800579024!2d-41.549226!3d-20.767707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda9260208aabe9e1!2sHorto%20Florestal!5e0!3m2!1spt-BR!2sbr!4v1660430988762!5m2!1spt-BR!2sbr'
    },
    {
        title: 'Antiga Estação Ferroviária',
        images: [
            {
                source: src + 'images/estacao_01.jpg',
            },
            {
                source: src + 'images/estacao_02.jpg'
            },
            {
                source: src + 'images/estacao_03.jpg'
            },
        ],
        informations: [
            'A edificação faz parte da história da estrada de ferro que cortava o município de Alegre, transportando passageiros e cargas. Era local de embarque e desembarque, além de ser ponto de encontro de moradores locais.',
            'Traz a inscrição ALEGRE em sua lateral e a cobertura frontal é sustentada por estrutura de ferro, original da construção em torno da década de 1920.'
        ],
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.3235990813469!2d-41.530669!3d-20.765089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90b07e17107a4361!2zRXN0YcOnw6NvIEZlcnJvdmnDoXJpYSBkZSBBbGVncmU!5e0!3m2!1spt-BR!2sbr!4v1660431143460!5m2!1spt-BR!2sbr'
    },
    {
        title: 'IFES',
        images: [
            {
                source: src + 'images/ifes_01.jpg',
            },
            {
                source: src + 'images/ifes_02.jpg'
            },
            {
                source: src + 'images/ifes_03.jpg'
            },
        ],
        informations: [
            'Há programação cultural diversificada e encontro de ex-alunos da época da EAFA, hoje conhecida IFES, que é a união de quatro antigas instituições federais de educação: o Centro Federal de Educação Tecnológica do Espírito Santo (Cefetes), a Escola Agrotécnica Federal de Alegre, a Escola Agrotécnica Federal de Colatina e a Escola Agrotécnica Federal de Santa Teresa.'
        ],
        moreInformationsUrl: 'https://alegre.ifes.edu.br/',
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14923.008355151642!2d-41.457049000000005!3d-20.76084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f6d50411da14cb2!2sInstituto%20Federal%20do%20Esp%C3%ADrito%20Santo%20-%20Campus%20de%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1660431326377!5m2!1spt-BR!2sbr'
    }
];


const element = document.getElementById('conteudo');
articles.forEach((article, index) => {
    const lugar = document.createElement('article');
    lugar.classList.add('lugar');

    if(index ==0){lugar.classList.add('mt-navbar');}

    const h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(article.title));
    lugar.appendChild(h2);

    const carousel = gerarCarousel(article.images, index);
    lugar.appendChild(carousel);

    const modais = document.createElement('div');
    const modalInfo = gerarModalInfo(article, index);
    modais.appendChild(modalInfo);
    const modalLocalizacao = gerarModalLocalizacao(article, index);
    modais.appendChild(modalLocalizacao);

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    btnGroup.setAttribute('role', 'group');
    btnGroup.setAttribute('aria-label', 'Basic Example');
    
    const btnInfo = document.createElement('button');
    btnInfo.type = 'button';
    ['btn', 'btn-info'].forEach(c => btnInfo.classList.add(c) );
    btnInfo.setAttribute('data-bs-toggle', 'modal');
    btnInfo.setAttribute('data-bs-target', '#' + modalInfo.id);
    btnInfo.appendChild(gerarSvgPlus());
    btnInfo.appendChild(document.createTextNode('Mais sobre este local'));
    btnGroup.appendChild(btnInfo);

    const btnMap = document.createElement('button');
    btnMap.type = 'button';
    ['btn', 'btn-primary'].forEach(c => btnMap.classList.add(c) );
    btnMap.setAttribute('data-bs-toggle', 'modal');
    btnMap.setAttribute('data-bs-target', '#' + modalLocalizacao.id);
    btnMap.appendChild(gerarSvgMap());
    btnMap.appendChild(document.createTextNode('Localização'));
    btnGroup.appendChild(btnMap);

    modais.appendChild(btnGroup);

    lugar.appendChild(modais);

    element.appendChild(lugar);
});


function gerarCarousel(images, index) {
    const carousel = document.createElement('div');
    carousel.id = 'carouselImagemsLugar' + index;
    ['carousel', 'slide'].forEach(c=>carousel.classList.add(c));
    carousel.setAttribute( 'data-ride', 'carousel' );

    const carouselIndicators = document.createElement('div');
    carouselIndicators.classList.add('carousel-indicators');

    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');
    images.forEach((imagem, j) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target','#' + carousel.id );
        button.setAttribute('data-bs-slide-to',j );

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        const img = document.createElement('img');
        ['d-block', 'w-100'].forEach(c=>img.classList.add(c));
        img.src = imagem.source;
        carouselItem.appendChild(img);
        if(!!imagem.title || !!imagem.description) {
            const carouselCaption = document.createElement('div');
            carouselCaption.classList.add('carousel-caption');

            if(!!imagem.title) {
                const h3 = document.createElement('h3');
                h3.appendChild(document.createTextNode(imagem.title));
                carouselCaption.appendChild(h3);
                img.alt = imagem.title;
            }

            if(!!imagem.description) {
                const p = document.createElement('p');
                p.appendChild(document.createTextNode(imagem.description));
                carouselCaption.appendChild(p);
                img.alt = imagem.description;
            }
            carouselItem.appendChild(carouselCaption);
        }

        if(j==0) {
            button.classList.add('active');
            carouselItem.classList.add('active');
        }

        carouselIndicators.appendChild(button);
        carouselInner.appendChild(carouselItem);
    });

    carousel.appendChild(carouselIndicators)
    carousel.appendChild(carouselInner)

    carousel.appendChild(generateCarouselControl('prev', carousel.id));
    carousel.appendChild(generateCarouselControl('next', carousel.id));
    
    return carousel;
}

function generateCarouselControl(slide, id) {
    const carouselControl = document.createElement('button');
    carouselControl.type = 'button';
    carouselControl.classList.add('carousel-control-' + slide);

    carouselControl.setAttribute('data-bs-target','#' + id );
    carouselControl.setAttribute('data-bs-slide',slide );
    carouselControl.appendChild(document.createTextNode(slide == 'prev' ? '❮' : '❯'));
    return carouselControl
}

function gerarBaseModal(id) {
    const modal = document.createElement('div');
    modal.id = id;
    ['modal', 'fade'].forEach(c=>modal.classList.add(c));
    modal.setAttribute('aria-labelledby', modal.id + '_title');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');
    modal.style.display = 'none';
    modal.tabIndex = -1;
    return modal;
}

function gerarBaseDiv(classList) {
    const div = document.createElement('div');
    classList.forEach(c=>div.classList.add(c));
    return div;
}

function gerarBaseModalHeader(titulo) {
    const div = document.createElement('div');
    div.classList.add('modal-header');
    const h5 = document.createElement('h5');
    h5.appendChild(document.createTextNode(titulo));
    div.appendChild(h5);
    div.appendChild(buttonCloseModal());
    return div;
}

function gerarModalInfo(lugar, index) {
    const modal = gerarBaseModal('modalLugar' + index);
    const modalDialog = gerarBaseDiv(['modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable']);
    const modalContent = gerarBaseDiv(['modal-content']);

    const modalHeader = gerarBaseModalHeader(lugar.title);
    modalContent.appendChild(modalHeader);

    const modalBody = gerarBaseDiv(['modal-body']);
    lugar.informations.forEach( informacao => {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(informacao));
        modalBody.appendChild(p);
    });
    if(!!lugar.moreInformationsUrl) {
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.href = lugar.moreInformationsUrl;
        a.appendChild(document.createTextNode('Mais informações aqui.'));
        p.appendChild(a);
        modalBody.appendChild(p);
    }
    modalContent.appendChild(modalBody);

    const modalFooter = gerarBaseDiv(['modal-footer']);
    modalFooter.appendChild(buttonModalDismiss( ['btn', 'btn-primary']));
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    return modal;
}

function buttonModalDismiss(classList) {
    const button = document.createElement('button');
    classList.forEach(c=>button.classList.add(c));
    button.type = 'button';
    button.setAttribute('data-bs-dismiss', 'modal');
    button.appendChild(document.createTextNode('OK'));
    return button;
}

function buttonCloseModal() {
    const buttonClose = document.createElement('button');
    buttonClose.classList.add('btn-close');
    buttonClose.type = 'button';
    buttonClose.setAttribute('data-bs-dismiss', 'modal');
    buttonClose.setAttribute('aria-label', 'Close');
    return buttonClose;
}

function gerarModalLocalizacao(lugar, index) {
    const modal = gerarBaseModal('modalLugarLocalizacao' + index);
    const modalDialog = gerarBaseDiv(['modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable']);
    const modalContent = gerarBaseDiv(['modal-content']);

    const modalHeader = gerarBaseModalHeader(lugar.title);
    modalContent.appendChild(modalHeader);

    const modalBody = gerarBaseDiv(['modal-body']);
    const iframe = document.createElement('iframe');
    iframe.classList.add( 'mapa' );
    iframe.src = lugar.mapaSource;
    iframe.width = '100%';
    iframe.height = '500px';
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.style.border = '0';
    modalBody.appendChild(iframe);
    modalContent.appendChild(modalBody);

    const modalFooter = gerarBaseDiv(['modal-footer']);
    modalFooter.appendChild(buttonModalDismiss( ['btn', 'btn-primary']));
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    return modal;
}

function gerarSvgPlus() {
    const svg = document.createElement('svg');
    svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
    svg.width = '16';
    svg.height = '16';
    svg.setAttribute('fill', 'currentColor');
    ['bi', 'bi-info-circle'].forEach(c=>svg.classList.add(c));
    svg.setAttribute('viewBox', '0 0 16 16');
    const path1 = document.createElement('path');
    path1.setAttribute('d', 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z');
    const path2 = document.createElement('path');
    path2.setAttribute('d', 'm8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z');

    svg.appendChild(path1);
    svg.appendChild(path2);
    return svg;
}

function gerarSvgMap() {
    const svg = document.createElement('svg');
    svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
    svg.width = '16';
    svg.height = '16';
    svg.setAttribute('fill', 'currentColor');
    ['bi', 'bi-map'].forEach(c=>svg.classList.add(c));
    svg.setAttribute('viewBox', '0 0 16 16');
    const path = document.createElement('path');
    path.setAttribute( 'fill-rule', 'evenodd' );
    path.setAttribute('d', 'M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z');

    svg.appendChild(path);
    return svg;
}