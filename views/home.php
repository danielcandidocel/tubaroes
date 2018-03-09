<div class="home-container">

  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
          <img src="<?php echo BASE_URL;?>assets/images/slider/iphone8-melhor-preco.png" alt=""/>
       
      </div>

      <div class="item">
          <img src="<?php echo BASE_URL;?>assets/images/slider/iphonx-melhor-preco.png" alt=""/>
       
      </div>
    
      <div class="item">
          <img src="<?php echo BASE_URL;?>assets/images/slider/iphonx-melhor-preco2.png" alt=""/>
        
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

<!--View dos Produtos da Home-->
<div class="produtos-home">
    <div class="width-home">
        <div class="conteudo-produtos-home">
            <div class="titulo-produtos-home">
                <div class="linha"></div>
                <div class="titulo">
                    <h4>PRODUTOS EM DESTAQUE</h4>
                </div>
                <div class="linha"></div>
            </div>
        </div>
        <section class="produtos">
            <?php 
            foreach ($viewData['listHome'] as $produto): ?>
            <article id="article-home">
                <a href="<?php echo BASE_URL.'produto/abrir/'.$produto['slug'];?>">
                <div class="produto-home-imagem">
                    <img src="<?php echo BASE_URL.'assets/images/produtos/'.$produto['imagem']; ?>" alt="<?php echo $produto['nome']; ?>"/>
                </div>
                </a>
                <div class="produto-home-marca">
                    <p><?php echo $produto['marca']; ?></p>
                </div>
                <div class="produto-home-nome">
                    <h2><?php echo utf8_encode($produto['nome']); ?></h2>  
                </div>
                <div class="produto-home-valor">
                    <?php if(isset($produto['valor_de'])): ?>
                    <p><del>R$ <?PHP echo number_format($produto['valor_de'], 2, ',', '.');?></del> - <strong> Por: R$ <?PHP echo number_format($produto['valor_vista'], 2, ',', '.');?></strong></p>
                    <?php endif; ?>
                </div>
                <div class="produto-home-parcela">
                    <?php if(isset($produto['parcela'])): ?>
                    <p><strong> Até 12 x R$ <?PHP echo number_format($produto['parcela'], 2, ',', '.');?></strong></p>
                    <?php endif; ?>
                </div>
                
            </article>
            <?php endforeach; ?>

        </section>
    </div>
</div>
</div>