<?php
require_once ('AccesoDatos.php');
class Venta
{

    public function traerTodasVentas(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT id_producto, fechaDeVenta, cantidad, producto.rutaDeFoto FROM productos.venta JOIN productos.producto where venta.id_producto=producto.id");
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

	public function insertarVenta($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsProducto = $objetoAccesoDato->RetornarConsulta("INSERT into productos.venta (id_producto, fechaDeVenta, cantidad) values (:id_producto, :fechaDeVenta, :cantidad);");
			$itemsProducto->bindValue(':id_producto', $request['id'], PDO::PARAM_STR);
			$itemsProducto->bindValue(':fechaDeVenta', $request['fechaDeVenta'], PDO::PARAM_STR);
			$itemsProducto->bindValue(':cantidad', $request['cantidad'], PDO::PARAM_STR);
			$itemsProducto->execute();
		
	}

	
}
