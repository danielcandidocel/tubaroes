
<form method="POST" action="<?php echo BASE_URL;?>login">
    <label>Nome:</label>
    <input type="text" name="nome" /><br/><br/>
    
    <label>Senha:</label>
    <input type="password" name="senha" /><br/><br/>
    
    <input type="submit" value="Logar" />
        
</form>
<?php if(isset($msg)){
    echo $msg;
}
?>