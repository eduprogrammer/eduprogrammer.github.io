var types = ["Comum", "Estatística", "Equação do 2° Grau", "Juros"];
var descriptions = ["Efetua operações comuns como adição, subtração, multiplicação e divisão.", "Calcula estatísticas de um conjunto de dados como média, mediana, desvio-padrão,variância, curtose, assimetria, variância e coeficiente de variação.", "Retorna raízes de quações do segundo grau completas ou não, com raízes reais ou imaginárias (complexas).","Efetua o cálculo de juros simples e composto, processando os dados informados (capital, taxa, tempo e montante)."];
var classes = ["calc_buttons", "calc_statistical", "calc_second", "calc_interest"];



var isFirst, operationMode, curSlide, slideCount;

function appendNumber(number) {
    
    if(isFirst) {
        
        if(first.innerHTML == "0") {
            first.innerHTML = number;
        } else {
            var cur = first.innerHTML;
            cur += number;
            first.innerHTML = cur;
            
        }
    } else {
        if(second.innerHTML == "0") {
            second.innerHTML = number;
        } else {
            var cur = second.innerHTML;
            cur += number;
            second.innerHTML = cur;
            
        }
    }
}

function invertSign() {

    var number = (isFirst == true) ? first.innerHTML : second.innerHTML;
    var transform = "";

    if(isFirst) {
        if(first.innerHTML[0] == "-") {
        
            for (let i of number) {
                if(i != "-") {
                    transform += i;
                }
            }
    
            first.innerHTML = transform;
    
        } else {
            first.innerHTML = "-" + number;
        }
    } else {
        if(second.innerHTML[0] == "-") {
        
            for (let i of number) {
                if(i != "-") {
                    transform += i;
                }
            }
    
            second.innerHTML = transform;
    
        } else {
            second.innerHTML = "-" + number;
        }
    }
    
    

}

function invertSignEq(index) {

    var element;

    switch (index) {
        case 0:
            element = document.getElementById("oneEq");
            break;

        case 1:
            element = document.getElementById("twoEq");
            break;

        case 2:
            element = document.getElementById("threeEq");       
            break;

        default:
            break;
    }

    var number = element.value;
    number = "" + number;
    var transform = "";

    if(number[0] == "-") {
        
        for (let i of number) {
            if(i != "-") {
                transform += i;
            }
        }

        element.value = transform;

    } else {
        element.value = "-" + number;
    }

}

function eraseIt() {
    isFirst = true;
    first.innerHTML = 0;
    second.innerHTML = 0;
    second.style.visibility = "hidden";
    operation.style.visibility = "hidden";
    first.style.visibility = "visible";
    
}

function appendDot() {
    
    var number = (isFirst == true) ? first.innerHTML : second.innerHTML;
    var doIt = true;
    

    for(let i of number) {

        if(i == ".") {
            doIt = false;
        } 
    }

    if(doIt) {
        
        if(isFirst) {
            var withDot = first.innerHTML;
            withDot += ".";
            first.innerHTML = withDot;
            doIt = true;
        } else {
            var withDot = second.innerHTML;
            withDot += ".";
            second.innerHTML = withDot;
            doIt = true;
        }
        
        
    }
}

function onOperation(mode) {

    isFirst = false;
    second.style.visibility = "visible";
    operation.style.visibility = "visible";

    switch (mode) {
        case 0:
            operationMode = mode;
            operation.innerHTML = "+";
            break;

        case 1:
            operationMode = mode;
            operation.innerHTML = "-";
            break;

        case 2:
            operationMode = mode;
            operation.innerHTML = "*";
            break;

        case 3:
            operationMode = mode;
            operation.innerHTML = "/";
            break;

        default:
            break;
    }
}

function getResult() {
    var one = first.innerHTML;
    var two = second.innerHTML;
    isFirst = true;
    first.innerHTML = 0;
    first.style.visibility = "hidden";
    operation.style.visibility = "hidden";
    
    switch (operationMode) {
        case 0:
            second.innerHTML = parseFloat(one) + parseFloat(two);
            break;

        case 1:
            second.innerHTML = parseFloat(one) - parseFloat(two);
            break;

        case 2:
            second.innerHTML = parseFloat(one) * parseFloat(two);
            break;

        case 3:
            second.innerHTML = parseFloat(one) / parseFloat(two);
            break;
    
        default:
            break;
    }
}

function goToLast() {
    curSlide--;
    if(curSlide > -1) {
        type.innerHTML = "Tipo de Calculadora: " + types[curSlide];
        description.innerHTML = "Descrição: " + descriptions[curSlide];

        for(let i of(document.getElementsByClassName(curSlide + 1))) {
            i.remove();
        }

        switch (curSlide + 1) {
            case 1:
                document.getElementById("calc_type").innerHTML = "\
                <br>\
                    <ul>\
                        <li><button onclick=\"onOperation(0)\">+</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(1)\">1</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(2)\">2</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(3)\">3</button></li>\
                        <li><button onclick=\"onOperation(1)\">-</button></li>\
                    </ul>\
\
                    <ul>\
                        <li><button onclick=\"onOperation(2)\">*</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(4)\">4</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(5)\">5</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(6)\">6</button></li>\
                        <li><button onclick=\"onOperation(3)\">/</button></li>\
                    </ul>\
\
                    <ul>\
                        <li><button class=\"special\" onclick=\"invertSign()\">a</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(7)\">7</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(8)\">8</button></li>\
                        <li><button class=\"number\" onclick=\"appendNumber(9)\">9</button></li>\
                        <li><button class=\"erase\" onclick=\"eraseIt()\">x</button></li>\
                    </ul>\
\
                    <ul class=\"dot\">\
                        <li><button class=\"number\" onclick=\"appendNumber(0)\">0</button></li>\
                        <li><button class=\"special\" onclick=\"appendDot()\">.</button></li>\
                    </ul>\
\
                    <br>\
                    <button class=\"equal\" onclick=\"getResult()\">=</button>\
                ";
                document.getElementById("calc_type").classList.replace(curSlide + 1, "calc_buttons");
                break;

            case 2:
                document.getElementById("calc_type").innerHTML = "\
                <ul>\
                        <li><button class=\"number\" onclick=\"addN(1)\">1</button></li>\
                        <li><button class=\"number\" onclick=\"addN(2)\">2</button></li>\
                        <li><button class=\"number\" onclick=\"addN(3)\">3</button></li>\
                        <li><button class=\"number\" onclick=\"addN(4)\">4</button></li>\
                        <li><button class=\"number\" onclick=\"addN(5)\">5</button></li>\
                    </ul>\
\
                    <ul>\
                        <li><button class=\"number\" onclick=\"addN(6)\">6</button></li>\
                        <li><button class=\"number\" onclick=\"addN(7)\">7</button></li>\
                        <li><button class=\"number\" onclick=\"addN(8)\">8</button></li>\
                        <li><button class=\"number\" onclick=\"addN(9)\">9</button></li>\
                        <li><button class=\"number\" onclick=\"addN(0)\">0</button></li>\
                    </ul>\
\
                    <ul>\
                        <li><button class=\"special\" onclick=\"addD()\">.</button></li>\
                        <li><button class=\"special\" onclick=\"addV()\">SEP</button></li>\
                        <li><button class=\"erase\" onclick=\"eraseS()\">x</button></li>\
                    </ul>\
\
                    <button class=\"calc_st\" onclick=\"getStatistical()\">Calcular</button>\
\
                    <div class=\"bigdata\">\
\
                        <p id=\"mean\">Média: x</p>\
                        <p id=\"med\">Mediana: x</p>\
                        <p id=\"var\">Variância: x</p>\
                        <p id=\"sd\">Desvio Padrão: x</p>\
                        <p id=\"cv\">Coeficiente de Variação: x</p>\
                        <p id=\"asy\">Assimetria: x</p>\
                        <p id=\"kur\">Curtose:x</p>\
\
\
\
                    </div>\
                ";
                document.getElementById("calc_type").classList.replace(curSlide + 1, "calc_statistical");
                break; 

            case 3:

                document.getElementById("calc_type").innerHTML = "\
                <p class=\"s_title\">Preencha os coeficientes nos quadrados vermelhos:</p>\
\
                    <div class=\"coefficients\">\
                    <ul>\
                        <li><input type=\"text\" size=\"2\" id=\"oneEq\"></li>\
                        <li><input type=\"text\" size=\"2\" id=\"twoEq\"></li>\
                        <li><input type=\"text\" size=\"2\" id=\"threeEq\"></li>\
                    </ul>\
                    </div>\
\
                    <div class=\"power\">\
                    <ul>\
                        <li>X²</li>\
                        <li>X</li>\
                    </ul>\
                    </div>\
\
                    <div class=\"invd\">\
                        <ul>\
                            <li onclick=\"invertSignEq(0)\">+-</li>\
                            <li onclick=\"invertSignEq(1)\">+-</li>\
                            <li onclick=\"invertSignEq(2)\">+-</li>\
                        </ul>\
                    </div>\
\
                    <br>\
                    <div class=\"final_degree\">\
                        <ul>\
                            <li><button onclick=\"calcEq()\">Calcular</button></li>\
                            <li><button class=\"erase\" onclick=\"eraseEq()\">X</button></li>\
                        </ul>\
                    </div>\
\
                    \
                    <div class=\"solutions\">\
                        <p id=\"solution_eq_one\">Solução 1: x</p>\
                        <p id=\"solution_eq_two\">Solução 2: x</p>\
\
                    </div>\
                ";
                document.getElementById("calc_type").classList.replace(curSlide + 1, "calc_second");

                break;

            default:
                break;
        }

    } else {
        curSlide++;
    }
}

function goToNext() {
    curSlide++;
    if(curSlide < slideCount) {
        type.innerHTML = "Tipo de Calculadora: " + types[curSlide];
        description.innerHTML = "Descrição: " + descriptions[curSlide];

        for(let i of(document.getElementsByClassName(curSlide - 1))) {
            i.remove();
        }
        
        switch (curSlide - 1) {
            case 0:                
                
                document.getElementById("calc_type").innerHTML = "<ul><li><button class=\"number\" onclick=\"addN(1)\">1</button></li><li><button class=\"number\" onclick=\"addN(2)\">2</button></li><li><button class=\"number\" onclick=\"addN(3)\">3</button></li><li><button class=\"number\" onclick=\"addN(4)\">4</button></li><li><button class=\"number\" onclick=\"addN(5)\">5</button></li></ul><ul><li><button class=\"number\" onclick=\"addN(6)\">6</button></li><li><button class=\"number\" onclick=\"addN(7)\">7</button></li><li><button class=\"number\" onclick=\"addN(8)\">8</button></li><li><button class=\"number\" onclick=\"addN(9)\">9</button></li><li><button class=\"number\" onclick=\"addN(0)\">0</button></li></ul><ul><li><button class=\"special\" onclick=\"addD()\">.</button></li><li><button class=\"special\" onclick=\"addV()\">SEP</button></li><li><button class=\"erase\" onclick=\"eraseS()\">x</button></li></ul><button class=\"calc_st\" onclick=\"getStatistical()\">Calcular</button><div class=\"bigdata\"><p id=\"mean\">Média: x</p><p id=\"med\">Mediana: x</p><p id=\"var\">Variância: x</p><p id=\"sd\">Desvio Padrão: x</p><p id=\"cv\">Coeficiente de Variação: x</p><p id=\"asy\">Assimetria: x</p><p id=\"kur\">Curtose:x</p></div>";
                document.getElementById("calc_type").classList.replace(curSlide - 1,"calc_statistical");
                break;

            case 1:
                document.getElementById("calc_type").innerHTML = "\
                <p class=\"s_title\">Preencha os coeficientes nos quadrados vermelhos:</p>\
\
                    <div class=\"coefficients\">\
                    <ul>\
                        <li><input type=\"text\" size=\"2\" id=\"oneEq\"></li>\
                        <li><input type=\"text\" size=\"2\" id=\"twoEq\"></li>\
                        <li><input type=\"text\" size=\"2\" id=\"threeEq\"></li>\
                    </ul>\
                    </div>\
\
                    <div class=\"power\">\
                    <ul>\
                        <li>X²</li>\
                        <li>X</li>\
                    </ul>\
                    </div>\
\
                    <div class=\"invd\">\
                        <ul>\
                            <li onclick=\"invertSignEq(0)\">+-</li>\
                            <li onclick=\"invertSignEq(1)\">+-</li>\
                            <li onclick=\"invertSignEq(2)\">+-</li>\
                        </ul>\
                    </div>\
\
                    <br>\
                    <div class=\"final_degree\">\
                        <ul>\
                            <li><button onclick=\"calcEq()\">Calcular</button></li>\
                            <li><button class=\"erase\" onclick=\"eraseEq()\">X</button></li>\
                        </ul>\
                    </div>\
\
                    \
                    <div class=\"solutions\">\
                        <p id=\"solution_eq_one\">Solução 1: x</p>\
                        <p id=\"solution_eq_two\">Solução 2: x</p>\
\
                    </div>\
                ";
                document.getElementById("calc_type").classList.replace(curSlide - 1, "calc_second");

                break;
        
            case 2:
                document.getElementById("calc_type").innerHTML = "\
                \
                    <div class=\"option_int\">\
                        <ul>\
                            <li><input type=\"radio\" checked name=\"simple\" onclick=\"setJ(0)\" id=\"simpleInterest\">&nbsp;<label for=\"simple\">Simples</label></li>\
                            <li><input type=\"radio\" name=\"coumpound\" onclick=\"setJ(1)\" id=\"compoundInterest\">&nbsp;<label for=\"coumpound\">Composto</label></li>\
                        </ul>\
                    </div>\
\
                    <br>\
                    <table style=\"margin-left:60px\">\
                        <tr>\
                            <th>Capital:</th>\
                            <td><input type=\"text\" size=\"5\" id=\"capital\"style=\"background-color: rgba(171, 91, 224, 0.911);border-radius: 15%;text-align: center;\"></td>\
                        </tr>\
\
                        <tr>\
                            <th>Taxa (%):</th>\
                            <td><input type=\"text\" size=\"5\" id=\"taxa\" style=\"background-color: rgba(171, 91, 224, 0.911);border-radius: 15%;text-align: center;\"></td>\
                        </tr>\
\
                        <tr>\
                            <th>Tempo:</th>\
                            <td><input type=\"text\" size=\"5\" id=\"tempo\"style=\"background-color: rgba(171, 91, 224, 0.911);border-radius: 15%;text-align: center;\"></td>\
                        </tr>\
\
                    </table>\
\
                    <br>\
                    <div class=\"final_int\">\
                        <ul>\
                            <li><button onclick=\"getJ()\">Calcular</button></li>\
                            <li><button class=\"erase\" onclick=\"eraseJ()\">X</button></li>\
                        </ul>\
\
                    </div>\
\
                    <div class=\"int_result\">\
                        <p id=\"juros_res\">Juros: x</p>\
                        <p id=\"capital_res\">Montante: x</p>\
\
                    </div>\
                ";
                document.getElementById("calc_type").classList.replace(curSlide - 1, "calc_interest");
                break;
            
            default:
                break;
        }
        
        
    } else {
        curSlide--;
    }
}

function addN(number) {
    var current = first.innerHTML;
    
    if(current == "0") {
        first.innerHTML = number;
    } else {
        current += number;
        first.innerHTML = current;
    }
}

function addV(params) {
    var current = first.innerHTML;
    current += ",";
    first.innerHTML = current;
}

function addD() {
    var numbers = first.innerHTML;
    var ready = "";

    var numArray = numbers.split(",");
    var key = numArray.length - 1;
    var cur = numArray[key];
    cur += ".";

    for (var i = 0; i < numArray.length; i++) {
        if(i != key) {
            ready += numArray[i] + ",";
        } else {
            ready += numArray[i] + ".";
        }
        
    }

    first.innerHTML = ready;
}

function eraseS() {
    first.innerHTML = "0";
    document.getElementById("mean").innerHTML = "Média: 0";
    document.getElementById("med").innerHTML = "Mediana: 0";
    document.getElementById("var").innerHTML = "Variância: 0";
    document.getElementById("sd").innerHTML = "Desvio Padrão: 0";
    document.getElementById("cv").innerHTML = "Coeficiente de Variação: 0";
    document.getElementById("asy").innerHTML = "Assimetria: 0";
    document.getElementById("kur").innerHTML = "Curtose: 0";
}

function getStatistical() {
    var curArray = first.innerHTML.split(",");
    var calc = new FenixCalculator(curArray);
    var obj = calc.statistical();
    
    document.getElementById("mean").innerHTML = "Média: " + obj.mean;
    document.getElementById("med").innerHTML = "Mediana: " + obj.med;
    document.getElementById("var").innerHTML = "Variância: " + obj.varianceSp;
    document.getElementById("sd").innerHTML = "Desvio Padrão: " + obj.stdvSp;
    document.getElementById("cv").innerHTML = "Coeficiente de Variação: " + obj.cvSp;
    document.getElementById("asy").innerHTML = "Assimetria: " + obj.skewnessSp;
    document.getElementById("kur").innerHTML = "Curtose: " + obj.kurtosisSp;

}

function eraseEq() {
    document.getElementById("oneEq").value = "";
    document.getElementById("twoEq").value = "";
    document.getElementById("threeEq").value = "";
    first.innerHTML = 0;

    document.getElementById("solution_eq_one").innerText = "Solução 1: x";
    document.getElementById("solution_eq_two").innerText = "Solução 2: x";
}

function calcEq() {
    
    var eq = new FenixCalculator([document.getElementById("oneEq").value, document.getElementById("twoEq").value, document.getElementById("threeEq").value]);
    var obj = eq.secondDegreeEq();
    
    document.getElementById("solution_eq_one").innerText = "Solução 1: " + obj.rootOne;
    document.getElementById("solution_eq_two").innerText = "Solução 2: " + obj.rootTwo;
}

function setJ(type) {
    switch (type) {
        case 0:
            compoundInterest = false;
            document.getElementById("simpleInterest").checked = true;
            document.getElementById("compoundInterest").checked = false;
            break;

        case 1:
            compoundInterest = true;
            document.getElementById("simpleInterest").checked = false;
            document.getElementById("compoundInterest").checked = true;
            break;
    
        default:
            break;
    }
}

function eraseJ() {
    document.getElementById("capital").value = "";
    document.getElementById("taxa").value = "";
    document.getElementById("tempo").value = "";

    document.getElementById("juros_res").innerHTML = "Juros: x";
    document.getElementById("capital_res").innerHTML = "Montante: x";

}

function getJ() {
    let interests = [document.getElementById("capital").value, document.getElementById("taxa").value, document.getElementById("tempo").value];
    var jur = new FenixCalculator(interests);
    var res;

    if(compoundInterest) {
        res = jur.simpleInterest();
    } else {
        res = jur.compoundInterest();
    }

    document.getElementById("juros_res").innerHTML = "Juros: " + res.juros;
    document.getElementById("capital_res").innerHTML = "Montante: " + res.montante;
}