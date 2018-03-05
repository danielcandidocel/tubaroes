<?php

class logincontroller extends controller {
    public function index() {
        $dados = array();
        $u = new usuarios();
        if(isset($_SESSION['tubaLogin']) && !empty($_SESSION['tubaLogin'])){
        
        $this->loadTemplatePrototipo('painel', $dados);
        } else if(isset($_POST['nome']) && !empty ($_POST['nome'])) {
            $nome = addslashes($_POST['nome']);
            $senha = addslashes($_POST['senha']);
                if($u->verifyUser($nome, $senha)) {
                  
                    $this->loadTemplatePrototipo('painel', $dados);
                  exit();
                } else {
                    $dados['msg'] = "E-mail ou Senha Incorretos. Tente Novamente.";
                    $this->loadTemplatePrototipo('login', $dados);
                    exit();
                }
            
            } else {
                $this->loadTemplatePrototipo('login', $dados);
            }
    }
    
    public function sair() {
        unset($_SESSION['tubaLogin']);
        header("Location: ".BASE_URL);
    }
   
}

