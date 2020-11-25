<?php

require_once('../../vendor/autoload.php');

//HEADERS
header("Access-Control-Allow-Origin: *"); //acesso a todos
header("Content-Type: application/json; charset=UTF-8"); //content-type json
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE"); //metodos
header("Access-Control-Max-Age: 3600"); //tempo de espera de 1 hora
//autorização
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//HEADERS

$controller = null; //game
$id = null;         //parametro
$data = null;
$method = $_SERVER['REQUEST_METHOD'];     //GET, POST, PUT, DELETE


echo json_encode(["tipo" => $method]);

?>