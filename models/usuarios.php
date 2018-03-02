<?php
class usuarios extends model {

    public function verifyUser($nome, $senha){
       
        $sql = "SELECT * FROM usuarios WHERE nome = :nome AND senha = :senha";
        $sql = $this->db->prepare($sql);
        $sql->bindValue("nome", $nome);
        $sql->bindValue("senha", MD5($senha));
        $sql->execute();

        if($sql->rowCount() > 0) {
            $array = $sql->fetch();
             $_SESSION['tubaLogin'] = $array['id'];
            return true;    
        } else {       
            return false;
        }
    }
}
