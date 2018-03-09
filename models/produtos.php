<?php
class produtos extends model {

    public function getProdutosHome(){
       $array = array();
       
        $sql = "SELECT *, (select marcas.marca from marcas where marcas.id = produtos.id_marca) as marca, (select imagem_produto.url from imagem_produto where imagem_produto.id_produto = produtos.id) as imagem FROM produtos ORDER BY RAND() LIMIT 16";
        $sql = $this->db->query($sql);
       
        if($sql->rowCount() > 0) {
            $array = $sql->fetchAll();    
        } 
        
        return $array;
    }
}