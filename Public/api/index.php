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
$uri = $_SERVER['REQUEST_URI'];
$unsetCount = 3;

//tratar a URI para retirar o que vem antes do Controller e do parametro
$explodeUri = explode('/', $uri);

for($i = 0; $i < $unsetCount; $i++){
    unset($explodeUri[$i]);
}

$explodeUri = array_values($explodeUri);

if(isset($explodeUri[0])){
    $controller = $explodeUri[0];
}
if(isset($explodeUri[1])){
    $id = $explodeUri[1];
}

//recebendo valores passados e convertendo para post
parse_str(file_get_contents('php://input'), $data);
echo json_encode(["Controller" => $controller, "id" => $id]);

?>