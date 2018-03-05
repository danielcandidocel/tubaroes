function calcular() {
    
//    Pegando as Variaveis
    var v = $('.calculo').find('input[name=magazine]').val();
    var c = $('.calculo').find('input[name=comissao]').val();
    var f = $('.calculo').find('input[name=frete]').val();
    if (v <= 0 || c <= 0 || f < 0){
     alert("Preencha todos os campos!");
    } else {
        
        document.querySelector(".total").style.background = '#eee';
        document.querySelector(".total45").style.background = '#eee';
        document.querySelector(".total5").style.background = '#eee';
        document.querySelector(".total55").style.background = '#eee';
        document.querySelector(".total6").style.background = '#eee';
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
 
        
//    Calculo do Valor Sugerido de Venda 4%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda").html(total);
        if(venda >= v){
            document.querySelector(".total").style.background = 'red';
        }

//    Calculo do Lucro Real
    
    var lucroreal = lucro-(v-venda);
    var totalLucro = lucroreal.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro").html(total); 
        
//        Calculo valor a prazo
    var prazo = parseFloat(totalVenda.replace(",", "."));
    var prazo2 = (prazo*4)/100;
    var tarifa = 0.40;
    var prazo3 = prazo2+prazo+tarifa;
    var valor = prazo3.toFixed(2).replace('.',',');
    
    var total = '';
        total = 'RS '+valor;
        $("#prazo").html(total);
        $("#1x").html(total);
        
//        calculo parcelas 1x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*451)/10000;
    var parc3 = (parc2+parc)/2;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#2x").html(total);
//        calculo parcelas 3x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*604)/10000;
    var parc3 = (parc2+parc)/3;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#3x").html(total);
//        calculo parcelas 4x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*759)/10000;
    var parc3 = (parc2+parc)/4;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#4x").html(total);
//        calculo parcelas 5x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*915)/10000;
    var parc3 = (parc2+parc)/5;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#5x").html(total);
//        calculo parcelas 6x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1072)/10000;
    var parc3 = (parc2+parc)/6;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#6x").html(total);
//        calculo parcelas 7x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1231)/10000;
    var parc3 = (parc2+parc)/7;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#7x").html(total);
//        calculo parcelas 8x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1392)/10000;
    var parc3 = (parc2+parc)/8;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#8x").html(total);
//        calculo parcelas 9x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1554)/10000;
    var parc3 = (parc2+parc)/9;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#9x").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1717)/10000;
    var parc3 = (parc2+parc)/10;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#10x").html(total);
//        calculo parcelas 11x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1882)/10000;
    var parc3 = (parc2+parc)/11;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#11x").html(total);
//        calculo parcelas 12x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*2048)/10000;
    var parc3 = (parc2+parc)/12;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#12x").html(total);
        
//    Calculo do Lucro 4.5%
    var lucro = (custo*45)/1000;
    var totalLucro = lucro.toFixed(2).replace('.',',');
 
        
//    Calculo do Valor Sugerido de Venda 4.5%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda45").html(total);
        if(venda >= v){
            document.querySelector(".total45").style.background = 'red';
        }
//    Calculo do Lucro Real
    
    var lucroreal = lucro-(v-venda);
    var totalLucro = lucroreal.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro45").html(total);
        
//        Calculo valor a prazo
    var prazo = parseFloat(totalVenda.replace(",", "."));
    var prazo2 = (prazo*4)/100;
    var tarifa = 0.40;
    var prazo3 = prazo2+prazo+tarifa;
    var valor = prazo3.toFixed(2).replace('.',',');
    
    var total = '';
        total = 'RS '+valor;
        $("#prazo45").html(total);
        $("#1x45").html(total);
//        calculo parcelas 1x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*451)/10000;
    var parc3 = (parc2+parc)/2;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#2x45").html(total);
//        calculo parcelas 3x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*604)/10000;
    var parc3 = (parc2+parc)/3;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#3x45").html(total);
//        calculo parcelas 4x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*759)/10000;
    var parc3 = (parc2+parc)/4;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#4x45").html(total);
//        calculo parcelas 5x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*915)/10000;
    var parc3 = (parc2+parc)/5;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#5x45").html(total);
//        calculo parcelas 6x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1072)/10000;
    var parc3 = (parc2+parc)/6;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#6x45").html(total);
//        calculo parcelas 7x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1231)/10000;
    var parc3 = (parc2+parc)/7;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#7x45").html(total);
//        calculo parcelas 8x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1392)/10000;
    var parc3 = (parc2+parc)/8;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#8x45").html(total);
//        calculo parcelas 9x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1554)/10000;
    var parc3 = (parc2+parc)/9;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#9x45").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1717)/10000;
    var parc3 = (parc2+parc)/10;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#10x45").html(total);
//        calculo parcelas 11x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1882)/10000;
    var parc3 = (parc2+parc)/11;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#11x45").html(total);
//        calculo parcelas 12x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*2048)/10000;
    var parc3 = (parc2+parc)/12;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#12x45").html(total);
        
//    Calculo do Lucro 5%
    var lucro = (custo*5)/100;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    
        
//    Calculo do Valor Sugerido de Venda 5%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda5").html(total);
        if(venda >= v){
            document.querySelector(".total5").style.background = 'red';
        }
    
//    Calculo do Lucro Real
    
    var lucroreal = lucro-(v-venda);
    var totalLucro = lucroreal.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro5").html(total);
        
//        Calculo valor a prazo
    var prazo = parseFloat(totalVenda.replace(",", "."));
    var prazo2 = (prazo*4)/100;
    var tarifa = 0.40;
    var prazo3 = prazo2+prazo+tarifa;
    var valor = prazo3.toFixed(2).replace('.',',');
    
    var total = '';
        total = 'RS '+valor;
        $("#prazo5").html(total);
        $("#1x5").html(total);
//        calculo parcelas 1x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*451)/10000;
    var parc3 = (parc2+parc)/2;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#2x5").html(total);
//        calculo parcelas 3x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*604)/10000;
    var parc3 = (parc2+parc)/3;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#3x5").html(total);
//        calculo parcelas 4x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*759)/10000;
    var parc3 = (parc2+parc)/4;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#4x5").html(total);
//        calculo parcelas 5x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*915)/10000;
    var parc3 = (parc2+parc)/5;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#5x5").html(total);
//        calculo parcelas 6x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1072)/10000;
    var parc3 = (parc2+parc)/6;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#6x5").html(total);
//        calculo parcelas 7x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1231)/10000;
    var parc3 = (parc2+parc)/7;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#7x5").html(total);
//        calculo parcelas 8x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1392)/10000;
    var parc3 = (parc2+parc)/8;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#8x5").html(total);
//        calculo parcelas 9x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1554)/10000;
    var parc3 = (parc2+parc)/9;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#9x5").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1717)/10000;
    var parc3 = (parc2+parc)/10;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#10x5").html(total);
//        calculo parcelas 11x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1882)/10000;
    var parc3 = (parc2+parc)/11;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#11x5").html(total);
//        calculo parcelas 12x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*2048)/10000;
    var parc3 = (parc2+parc)/12;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#12x5").html(total);
        
        
//    Calculo do Lucro 5.5%
    var lucro = (custo*55)/1000;
    var totalLucro = lucro.toFixed(2).replace('.',',');
 
        
//    Calculo do Valor Sugerido de Venda 5.5%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda55").html(total);
        if(venda >= v){
            document.querySelector(".total55").style.background = 'red';
        }

//    Calculo do Lucro Real
    
    var lucroreal = lucro-(v-venda);
    var totalLucro = lucroreal.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro55").html(total);
        
//        Calculo valor a prazo
    var prazo = parseFloat(totalVenda.replace(",", "."));
    var prazo2 = (prazo*4)/100;
    var tarifa = 0.40;
    var prazo3 = prazo2+prazo+tarifa;
    var valor = prazo3.toFixed(2).replace('.',',');
    
    var total = '';
        total = 'RS '+valor;
        $("#prazo55").html(total);
        $("#1x55").html(total);
//        calculo parcelas 1x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*451)/10000;
    var parc3 = (parc2+parc)/2;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#2x55").html(total);
//        calculo parcelas 3x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*604)/10000;
    var parc3 = (parc2+parc)/3;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#3x55").html(total);
//        calculo parcelas 4x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*759)/10000;
    var parc3 = (parc2+parc)/4;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#4x55").html(total);
//        calculo parcelas 5x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*915)/10000;
    var parc3 = (parc2+parc)/5;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#5x55").html(total);
//        calculo parcelas 6x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1072)/10000;
    var parc3 = (parc2+parc)/6;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#6x55").html(total);
//        calculo parcelas 7x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1231)/10000;
    var parc3 = (parc2+parc)/7;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#7x55").html(total);
//        calculo parcelas 8x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1392)/10000;
    var parc3 = (parc2+parc)/8;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#8x55").html(total);
//        calculo parcelas 9x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1554)/10000;
    var parc3 = (parc2+parc)/9;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#9x55").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1717)/10000;
    var parc3 = (parc2+parc)/10;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#10x55").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1882)/10000;
    var parc3 = (parc2+parc)/11;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#11x55").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*2048)/10000;
    var parc3 = (parc2+parc)/12;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#12x55").html(total);
        
//    Calculo do Lucro 6%
    var lucro = (custo*6)/100;
    var totalLucro = lucro.toFixed(2).replace('.',',');

        
//    Calculo do Valor Sugerido de Venda 6%
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda6").html(total);
        if(venda >= v){
            document.querySelector(".total6").style.background = 'red';
        }
        
//    Calculo do Lucro Real
    
    var lucroreal = lucro-(v-venda);
    var totalLucro = lucroreal.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro6").html(total);
        
//        Calculo valor a prazo
    var prazo = parseFloat(totalVenda.replace(",", "."));
    var prazo2 = (prazo*4)/100;
    var tarifa = 0.40;
    var prazo3 = prazo2+prazo+tarifa;
    var valor = prazo3.toFixed(2).replace('.',',');
    
    var total = '';
        total = 'RS '+valor;
        $("#prazo6").html(total);
        $("#1x6").html(total);
//        calculo parcelas 1x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*451)/10000;
    var parc3 = (parc2+parc)/2;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#2x6").html(total);
//        calculo parcelas 3x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*604)/10000;
    var parc3 = (parc2+parc)/3;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#3x6").html(total);
//        calculo parcelas 4x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*759)/10000;
    var parc3 = (parc2+parc)/4;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#4x6").html(total);
//        calculo parcelas 5x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*915)/10000;
    var parc3 = (parc2+parc)/5;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#5x6").html(total);
//        calculo parcelas 6x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1072)/10000;
    var parc3 = (parc2+parc)/6;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#6x6").html(total);
//        calculo parcelas 7x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1231)/10000;
    var parc3 = (parc2+parc)/7;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#7x6").html(total);
//        calculo parcelas 8x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1392)/10000;
    var parc3 = (parc2+parc)/8;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#8x6").html(total);
//        calculo parcelas 9x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1554)/10000;
    var parc3 = (parc2+parc)/9;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#9x6").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1717)/10000;
    var parc3 = (parc2+parc)/10;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#10x6").html(total);
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*1882)/10000;
    var parc3 = (parc2+parc)/11;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#11x6").html(total);        
//        calculo parcelas 10x
    var parc = parseFloat(valor.replace(",", "."));
    var parc2 = (parc*2048)/10000;
    var parc3 = (parc2+parc)/12;
    var parcela = parc3.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+parcela;
        $("#12x6").html(total);
    }
}


