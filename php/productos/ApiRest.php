<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'AccesoDatos.php';
require_once 'productoApi.php';
include_once 'producto.php';
require_once 'MWparaCORS.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);
$app->group('/productos', function () {

  $this->get('/', \ProductoApi::class . ':traerTodos');
  $this->delete('/{id}', \ProductoApi::class . ':borrarUno');
  $this->get('/{descripcion}', \ProductoApi::class . ':buscarUno');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->run();
?>
