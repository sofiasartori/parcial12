<?php
require ('venta.php');
require_once ('IApiUsable.php');

class VentasApi extends Venta implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Venta::traerTodasVentas();
    }
    public function CargarUno($request, $response, $args){
    	$arrayParametro = $request->getParsedBody();
        $consulta = Venta::insertarVenta($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }
    public function BorrarUno ($request, $response, $args){}
    public function BuscarUno($request, $response, $args){}
}
?>
