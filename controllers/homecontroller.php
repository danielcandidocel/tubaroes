<?php

class homecontroller extends controller {
    public function index() {
        $dados = array();
        $this->loadTemplatePrototipo('home', $dados);
    }
   
}

