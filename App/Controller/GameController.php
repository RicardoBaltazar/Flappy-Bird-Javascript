<?php

namespace App\Controller;
use App\Entity\Game;

Class GameController{

    public function create($data = null){
        return json_encode(["name" => "create"]);
    }

    public function update($id = 0, $data = null){
        return json_encode(["name" => "create"]);
    }

    public function delete($id = 0){
        return json_encode(["name" => "create"]);
    }

    public function readById($id = 0){
        return json_encode(["name" => "create"]);
    }

    public function readAll(){
        return json_encode(["name" => "create"]);
    }


}