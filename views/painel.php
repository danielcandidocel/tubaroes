<h1>Calculo de Custo e Venda</h1>
<div class="calculo">
    <form method="GET">
        <label>Valor de Compra (Magazine):</label>
        <input type="number" name="magazine" /><br/>
        <label>Valor da Comissão:</label>
        <input type="number" name="comissao" /><br/>
        <label>Valor do Frete:</label>
        <input type="number" name="frete" /><br/>
    </form>
</div>
<div class="total">
    <label>INSS: </label>
    <span id="inss"></span><br/>
    <label>Custo do Produto: </label>
    <span id="custo"></span><br/>
    <label>Lucro: </label>
    <span id="lucro"></span><br/>
     <label>Valor Sugerido de Venda: </label>
    <span id="venda"></span>
</div>
<div class="button">
    <a href="javascript:;" onclick="calcular()"><span>Calcular</span></a>
</div>