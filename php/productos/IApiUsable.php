<?php
interface IApiUsable{
   	public function traerTodos($request, $response, $args);
   	public function CargarUno($request, $response, $args);
   	public function BorrarUno($request, $response, $args);
   	public function BuscarUno($request, $response, $args);

}
?>
