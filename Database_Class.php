<?php

Class database
{
    private $host = 'localhost';
    private $user =  'root';
    private $password = '';
    private $database = 'twitter_clone';
    
    public function connect(){
        $con = mysqli_connect($this->host, $this->user, $this->password, $this->database);

        mysqli_set_charset($con, 'utf8');

        if(mysqli_connect_errno()){
            echo 'erro ao tentar se conectar com o banco de dados'.mysqli_connect_error();
        }

        return $con;
    }
}