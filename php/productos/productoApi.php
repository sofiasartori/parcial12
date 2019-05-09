<?php
require ('producto.php');
require ('IApiUsable.php');

class productoApi extends Producto implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Producto::traerTodosProductos();
    }
    public function CargarUno($request, $response, $args){
    	$arrayParametro = $request->getParsedBody();
        $consulta = Producto::insertarProducto($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }
    public function BorrarUno($request, $response, $args){
    	$id=$args['id'];
    	$consulta = Producto::borrarProducto($id);
    }

    public function BuscarUno($request, $response, $args){
    	
    	$desc=$args['descripcion'];
    	$consulta = Producto::buscarProducto($desc);
        
    }
}
?>
