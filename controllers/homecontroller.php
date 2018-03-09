<?php

class homecontroller extends controller {
    public function index() {
        $dados = array();
        $p = new produtos();
        
        $dados['listHome'] = $p->getProdutosHome();
        $this->loadTemplatePrototipo('home', $dados);
    }
   
}

