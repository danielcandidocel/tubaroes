<?php

class sitecontroller extends controller {
    public function index() {
        $dados = array();
        $c = new categorias();
        $p = new produtos();
        
        $dados['listHome'] = $p->getProdutosHome();
        $dados['categorias'] = $c->getCategorias();
        $this->loadTemplate('home', $dados);
    }
   
}
