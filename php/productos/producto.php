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

	public function insertarProducto($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsProducto = $objetoAccesoDato->RetornarConsulta("INSERT into productos.producto (id, descripcion, tipo, fechaDeVencimiento, precio, rutaDeFoto) values (:id, :descripcion, :tipo, :fechaDeVencimiento, :precio, :rutaDeFoto);");
			$itemsProducto->bindValue(':id', $request['id'], PDO::PARAM_INT);
			$itemsProducto->bindValue(':descripcion', $request['descripcion'], PDO::PARAM_STR);
			$itemsProducto->bindValue(':tipo', $request['tipo'], PDO::PARAM_STR);
			$itemsProducto->bindValue(':fechaDeVencimiento', $request['fechaDeVencimiento'], PDO::PARAM_STR);
			$itemsProducto->bindValue(':precio', $request['precio'], PDO::PARAM_STR);
			$itemsProducto->bindValue(':rutaDeFoto', '../assets/pordefecto.png', PDO::PARAM_STR);
			$itemsProducto->execute();
		
	}

	public function borrarProducto($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM productos.producto where id=$id");
		$consulta->execute();
	}

	public function buscarProducto($descripcion){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT id, descripcion, tipo, fechaDeVencimiento, precio, rutaDeFoto FROM productos.producto where descripcion='$descripcion'");
		$consulta->execute();
		//$productoBuscado= $consulta->fetchObject('Producto');
		$miArray = Array();
		while($i=$consulta->fetchObject('Producto')){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		/*if($productoBuscado == "")
			return $this->response->statusCode(400);
		else{
			return json_encode($productoBuscado);
		}*/
		    
	}
}
