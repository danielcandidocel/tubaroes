<?php

class controller {
    public function loadView($viewName, $viewData = array()) {
        extract($viewData);
        require 'views/'.$viewName.'.php';
    }   
    
    public function loadTemplate($viewName, $viewData = array()){
        require 'views/template.php';
    }
    
    public function loadViewinTemplate($viewName, $viewData = array()){
        extract($viewData);
        require 'views/'.$viewName.'.php';
    }

    public function loadTemplatePrototipo($viewName, $viewData = array()){
        require 'views-prototipo/template.php';
    }    
    public function loadViewPrototipo($viewName, $viewData = array()) {
        extract($viewData);
        require 'views-prototipo/'.$viewName.'.php';
    }    
    public function loadViewinTemplatePrototipo($viewName, $viewData = array()){
        extract($viewData);
        require 'views-prototipo/'.$viewName.'.php';
    }
}
