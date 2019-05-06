<?php
require ('producto.php');
require ('IApiUsable.php');

class productoApi extends Producto implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Producto::traerTodosProductos();
    }

    public function BorrarUno($request, $response, $args){
    	$id=$args['id'];
    	$consulta = Producto::borrarProducto($id);
    }

    public function BuscarUno($request, $response, $args){
    	$desc=$args['descripcion'];
    	$consulta = Producto::buscarProducto($desc);
        echo "consulta: ".$consulta;
    }
}
?>
