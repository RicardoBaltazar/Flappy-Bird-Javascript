<?php

namespace App\Controller;
use App\Entity\Game;

Class GameController{

    public function create($data = null){
        $game = $this->convertType($data);

        var_dump($game);
        //return json_encode(["name" => "create"]);
    }

    public function update($id = 0, $data = null){
        return json_encode(["name" => "update"]);
    }

    public function delete($id = 0){
        return json_encode(["name" => "delete - {$id}"]);
    }

    public function readById($id = 0){
        return json_encode(["name" => "readById - {$id}"]);
    }

    public function readAll(){
        return json_encode(["name" => "readAll"]);
    }

    public function convertType($data){
        return new Game(
            null,
            (isset($data['titulo']) ? $data['titulo'] : null),
            (isset($data['descricao']) ? $data['descricao'] : null),
            (isset($data['videoId']) ? $data['videoId'] : null)
        );
    }
}