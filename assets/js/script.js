function calcular() {
    var v = $('.calculo').find('input[name=magazine]').val();
    var c = $('.calculo').find('input[name=comissao]').val();
    var f = $('.calculo').find('input[name=frete]').val();
    

    var inss = (c*11)/100;
    var totalinss = inss.toFixed(2).replace('.',',');
    var total = '';
        total = 'RS '+totalinss;
        $("#inss").html(total);
        
    
}


