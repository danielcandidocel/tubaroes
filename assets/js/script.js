function calcular() {
    
//    Pegando as Variaveis
    var v = $('.calculo').find('input[name=magazine]').val();
    var c = $('.calculo').find('input[name=comissao]').val();
    var f = $('.calculo').find('input[name=frete]').val();
    
//    Calculo do INSS
    var inss = (c*11)/100;
    
    var totalinss = inss.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalinss;
        $("#inss").html(total);
        
//    Calculo do Custo
    var custo1 = v-c;
    var custo2 = custo1+inss;
    var frete = parseFloat(f.replace(",", "."));
    var custo = custo2+frete;
  
    var totalCusto = custo.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalCusto;
        $("#custo").html(total);
        
//    Calculo do Lucro
    var lucro = (custo*4)/100;
    var totalLucro = lucro.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalLucro;
        $("#lucro").html(total);
        
//    Calculo do Valor Sugerido de Venda
    var venda = custo+lucro;
    var totalVenda = venda.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalVenda;
        $("#venda").html(total);
        
    
}


