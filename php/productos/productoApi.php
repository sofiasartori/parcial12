<?php
require ('producto.php');
require ('IApiUsable.php');

class productoApi extends Producto implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Producto::traerTodosProductos();
    }
}
?>
