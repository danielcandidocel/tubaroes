<?php

class sitecontroller extends controller {
    public function index() {
        $dados = array();
        $c = new categorias();
        
        $dados['categorias'] = $c->getCategorias();
        $this->loadTemplate('home', $dados);
    }
   
}
