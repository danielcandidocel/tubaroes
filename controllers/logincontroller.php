<?php

class logincontroller extends controller {
    public function index() {
        $dados = array();
        $u = new usuarios();
        if(isset($_SESSION['tubaLogin']) && !empty($_SESSION['tubaLogin'])){
        
        $this->loadTemplate('painel', $dados);
        } else if(isset($_POST['nome']) && !empty ($_POST['nome'])) {
            $nome = addslashes($_POST['nome']);
            $senha = addslashes($_POST['senha']);
                if($u->verifyUser($nome, $senha)) {
                  
                    $this->loadTemplate('painel', $dados);
                  exit();
                } else {
                    $dados['msg'] = "E-mail ou Senha Incorretos. Tente Novamente.";
                    $this->loadTemplate('login', $dados);
                    exit();
                }
            
            } else {
                $this->loadTemplate('login', $dados);
            }
        
    }
   
}

