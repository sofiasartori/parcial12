<?php
require_once ('AccesoDatos.php');
class Producto
{

    public function traerTodosProductos(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM productos.producto");
		$consulta->execute();
		

		/*$tabla ='<table style="border:1px solid black;"><tr><th>Sabor</th><th>Tipo</th><th>Kilos</th></tr>';
		while($i=$consulta->fetch()){
			$tabla = $tabla.'<tr><td>'.$i['sabor'].'</td>
					   <td>'.$i['tipo'].'</td>
					   <td>'.$i['kilos'].'</td></tr>';
		}
		$tabla =$tabla.'</table>';
		echo $tabla;*/
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}
}
