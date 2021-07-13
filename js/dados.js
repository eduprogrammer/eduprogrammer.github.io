var pos;
var slideHeader, slideImg, slideCaption, slideLink;
var description, year, owner, source, link;
var dotOne, dotTwo, dotThree, dotFour;

var imgs = ["bigdata/pop_uf.png", "bigdata/pib_uf.png", "bigdata/obito_pe.png", "bigdata/analise_dados_tarifa_aneel.png"];
var pdfs = ["bigdata/pop_uf.pdf", "bigdata/pib_uf.pdf", "bigdata/obito_pe.pdf", "bigdata/analise_dados_tarifa_aneel.pdf"];
var captions = ["Contagem de População por UF", "Produto Interno Bruto (PIB) por UF", "Ocorrência de Óbitos por Morte Violenta em Pernambuco", "Tarifas de Energia Elétrica"];
var descriptions = ["Contagem de Pupulação por Estado da Federação.", "Comparativo do PIB por ente federativo, evidenciando a economia dos estados", "Quantidade de óbitos ocorridos em Pernambuco, em escala logarítmica, com agrangência do ano de 2010 até 2019", "Análise de dados das tarifas cobradas pela Aneel, mediante o emprego de técnicas de estatística descritiva e gráficos que evidenciam detalhes dos preços."];
var years = ["2007","2018","2010 a 2019", "2017"];
var authors = ["Eduardo Programador", "Eduardo Programador", "Eduardo Programador", "Eduardo Programador"];
var sources = ["IBGE", "IBGE", "IBGE", "Aneel"];
var links = ["https://sidra.ibge.gov.br/tabela/793#/n3/all/v/all/p/all/l/v,p,t/resultado", "https://sidra.ibge.gov.br/tabela/5938#/n3/all/v/37/p/last%201/d/v37%200/l/v,p,t/resultado", "https://sidra.ibge.gov.br/Tabela/2654#/k/-1351706881/resultado", "https://dados.gov.br/dataset/tarifas-residenciais-de-energia-eletrica/resource/8778a107-e720-4a4d-aad0-5c98e5c06b04"];



function doTransform() {


    slideHeader.innerHTML = "Análise de Dados " + (pos + 1) + " de " + getCount();
    slideCaption.innerHTML = captions[pos];
    description.innerHTML = "Descrição: " + descriptions[pos];
    year.innerHTML = "Ano da Pesquisa: " + years[pos];
    owner.innerHTML = "Elaborador do Mapa ou Gráfico: " + authors[pos];
    source.innerHTML = "Responsável pelos Dados: " + sources[pos];
    link.innerHTML = "Link da Fonte de Dados: " + links[pos];

    slideImg.src = imgs[pos];
    slideLink.href = pdfs[pos];

    switch (pos) {
        case 0:
            dotOne.style.backgroundColor = "rgba(224,11,11,1)";
            dotTwo.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotThree.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotFour.style.backgroundColor = "rgba(224,11,11,0.4)";
            break;

        case 1:
            dotOne.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotTwo.style.backgroundColor = "rgba(224,11,11,1)";
            dotThree.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotFour.style.backgroundColor = "rgba(224,11,11,0.4)";
            break;
    
        case 2:
            dotOne.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotTwo.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotThree.style.backgroundColor = "rgba(224,11,11,1)";
            dotFour.style.backgroundColor = "rgba(224,11,11,0.4)";
            break;

        case 3:
            dotOne.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotTwo.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotThree.style.backgroundColor = "rgba(224,11,11,0.4)";
            dotFour.style.backgroundColor = "rgba(224,11,11,1)";
            
            break;

        default:
            break;
    }
};

function initSlide() {
    pos = 3;
    slideHeader = document.getElementById("slideHeader");
    slideImg = document.getElementById("slideImg");
    slideCaption = document.getElementById("slideCaption");
    slideLink = document.getElementById("slideLink");
    description = document.getElementById("description");
    year = document.getElementById("year");
    owner = document.getElementById("owner");
    source = document.getElementById("source");
    link = document.getElementById("link");
    dotOne = document.getElementsByClassName("dOn")[0];
    dotTwo = document.getElementsByClassName("dOff2")[0];
    dotThree = document.getElementsByClassName("dOff3")[0];
    dotFour = document.getElementsByClassName("dOff4")[0];
    

    slideHeader.innerHTML = "Análise de Dados 1 de " + getCount();
    slideCaption.innerHTML = captions[pos];
    slideLink.href = pdfs[pos];
    description.innerHTML = "Descrição: " + descriptions[pos];
    year.innerHTML = "Ano da Pesquisa: " + years[pos];
    owner.innerHTML = "Elaborador do Mapa ou Gráfico: " + authors[pos];
    source.innerHTML = "Responsável pelos Dados: " + sources[pos];
    link.innerHTML = "Link da Fonte de Dados: " + links[pos];

    doTransform();
    
    
};

function getCount() {
    return imgs.length;
};

function goToLast() {
    pos--;

    if(pos > 0) {
        doTransform();
    } else if(pos == 0) {
        doTransform();
    } else {
        pos = getCount() - 1;
        doTransform();
    }
};

function goToNext() {
    pos++;

    if(pos < getCount()) {
        doTransform();
    } else if(pos == getCount()) {
        pos = 0;
        doTransform();
    }
};

function fromDot(number) {
    pos = number;
    doTransform();
}