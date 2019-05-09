<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'AccesoDatos.php';
require_once 'productoApi.php';
include_once 'producto.php';
require_once 'ventasApi.php';
include_once 'venta.php';
require_once 'MWparaCORS.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);
$app->group('/productos', function () {
  $this->get('/', \ProductoApi::class . ':traerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
  $this->post('/alta/', \ProductoApi::class . ':CargarUno');  
  $this->delete('/{id}', \ProductoApi::class . ':borrarUno');
  $this->get('/{descripcion}', \ProductoApi::class . ':buscarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');
$app->group('/busqueda', function () {
  $this->get('/', \ProductoApi::class . ':traerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
  $this->post('/', \ProductoApi::class . ':CargarUno');  
  $this->delete('/{id}', \ProductoApi::class . ':borrarUno');
  $this->get('/{descripcion}', \ProductoApi::class . ':buscarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');
$app->group('/ventas', function () {
  $this->get('/listado', \VentasApi::class . ':traerTodos');
  $this->post('/nueva', \VentasApi::class . ':CargarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->run();
?>
