<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=0" />
        <link href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" type="text/css">
        <!--Favicon-->
        <link rel="apple-touch-icon" sizes="57x57" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo BASE_URL; ?>assets/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo BASE_URL; ?>assets/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?php echo BASE_URL; ?>assets/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="<?php echo BASE_URL; ?>assets/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?php echo BASE_URL; ?>assets/favicon/favicon-16x16.png">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        
        <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
        
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/bootstrap.min.css" type="text/css" />
        
        <!--Script para funcionar o Slider-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        
        <!--Scritp para funcionar a barra de rolagem do preço-->
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/bootstrap.min.js"></script> 
        <script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/jquery.min.js"></script> 
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/jquery-ui.theme.min.css" type="text/css" />
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/jquery-ui.min.css" type="text/css" />
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/jquery-ui.structure.min.css" type="text/css" />
        
        <link rel="stylesheet" type="text/css" href="<?php echo BASE_URL; ?>assets/css/estilo.css" />
        
        <title>Tubaroes Outlet</title>
    </head>
<body>
    <header>
        
            <div class="topo">
                <div class="topo-container">
                    <div class="topo-msg">
                        <h6>O Melhor Preço é Aqui.</h6>
                    </div>
                    <div class="topo-interage">
                        <a href="https://www.facebook.com/tubaroesoutlet/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/tubaroesoutlet/" target="_blank" alt="Instagram Tubaões Outlet"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="far fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="topo-topo">
                <div class="topo-container">
                    <div class="logo">
                        <a href="#"><img src="<?php echo BASE_URL;?>assets/images/logo-preto-branco.png" /></a>
                    </div>
                    <div class="topo-busca">
                        <form>
                            <input type="text" id="buscar" />
                            <button type="submit" class="button-buscar"><span class="glyphicon glyphicon-search"></span></button>
                        </form>
                    </div>
                    <div class="topo-carrinho">
                        <h5>Entrar</h5>
                        <i class="fas fa-shopping-cart"></i>
                        
                    </div>
                </div>
            </div>
        <div class="categorias">
            <div class="topo-container cat">
                <?php $n = -1;
                foreach ($viewData['categorias'] as $cat): 
                    
                    ?>
                    <div class="categoria">
                       
                        <a href="<?php echo BASE_URL;?>categorias/abrir/<?php echo $cat['nome'];?>"><?php echo strtoupper($cat['nome']);?></a>
                        <?php if($n <= count($cat)): ?>
                        |
                        <?php $n++;
                            endif;
                        ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
                  
    </header>
     
        <?php $this->loadViewInTemplate($viewName, $viewData); ?>
 
<footer>
    <div class="rodape">
        <div class="rodape-info">
            
            
        </div>
        <div class="rodape-copy">
            <div class="menus">
                <a href="#">Sobre Nós</a>
                <a href="#">Como Comprar</a>
                <a href="#">Métodos de Pagamento</a>
                <a href="#">Fale Conosco</a>
                <a href="#">Política de Privacidade</a>
                <a href="#">Perguntas Frequentes</a>
            </div>
            <div class="copyright">
                <div>© <span>Tubarões Outlet</span> - Todos Direitos Reservados.</div>
                <div>Desenvolvido por  <a href="http://www.jlcreative.com.br" target="_blanc">JL Creative</a></div>
            </div>
        </div>
    </div>
</footer>
    <script type="text/javascript">
        var BASE_URL = '<?php echo BASE_URL; ?>';
    </script>
    <script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/jquery.zoom.js"></script>
    <script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/jquery.zoom.min.js"></script>
    <script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/jquery-ui.min.js"></script>
    
    <script src="<?php echo BASE_URL; ?>assets/js/script_produto.js" type="text/javascript"></script>
    
    <script src="<?php echo BASE_URL; ?>assets/js/modais.js" type="text/javascript"></script>
    <script src="<?php echo BASE_URL; ?>assets/js/slide_produtos_home.js" type="text/javascript"></script>
    
</body>
</html>


