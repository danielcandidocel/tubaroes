function calcular() {
    
//    Pegando as Variaveis
    var v = $('.calculo').find('input[name=magazine]').val();
    var c = $('.calculo').find('input[name=comissao]').val();
    var f = $('.calculo').find('input[name=frete]').val();
    if (v <= 0 || c <= 0 || f <= 0){
     alert("Preencha todos os campos!");
    } else {
//    Calculo do INSS
    var inss = (c*11)/100;
    
    var totalinss = inss.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalinss;
        $("#inss").html(total);
        $("#inss45").html(total);
        $("#inss5").html(total);
        $("#inss55").html(total);
        $("#inss6").html(total);
        
//    Calculo do Custo
    var custo1 = v-c;
    var custo2 = custo1+inss;
    var frete = parseFloat(f.replace(",", "."));
    var custo = custo2+frete;
  
    var totalCusto = custo.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalCusto;
        $("#custo").html(total);
        $("#custo45").html(total);
        $("#custo5").html(total);
        $("#custo55").html(total);
        $("#custo6").html(total);
        
//    Calculo do Lucro 4%
    
    var lucro = (custo*4)/100;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro").html(total);
        
//    Calculo do Valor Sugerido de Venda 4%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda").html(total);
        if(venda >= v){
            document.querySelector(".total").style.background = 'red';
        }
        
//    Calculo do Lucro 4.5%
    var lucro = (custo*45)/1000;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro45").html(total);
        
//    Calculo do Valor Sugerido de Venda 4.5%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda45").html(total);
        if(venda >= v){
            document.querySelector(".total45").style.background = 'red';
        }
        
//    Calculo do Lucro 5%
    var lucro = (custo*5)/100;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro5").html(total);
        
//    Calculo do Valor Sugerido de Venda 5%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda5").html(total);
        if(venda >= v){
            document.querySelector(".total5").style.background = 'red';
        }
        
//    Calculo do Lucro 5.5%
    var lucro = (custo*55)/1000;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro55").html(total);
        
//    Calculo do Valor Sugerido de Venda 5.5%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda55").html(total);
        if(venda >= v){
            document.querySelector(".total55").style.background = 'red';
        }
        
//    Calculo do Lucro 6%
    var lucro = (custo*6)/100;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro6").html(total);
        
//    Calculo do Valor Sugerido de Venda 6%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda6").html(total);
        if(venda >= v){
            document.querySelector(".total6").style.background = 'red';
        }
    }
}


