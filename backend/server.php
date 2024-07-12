<?php
$servername = "localhost";
$username = "root";
$password = "2006";
$dbname = "desafioIgut";

header('Content-Type: application/json');

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Conexão falhou: ' . $conn->connect_error]));
}

// Query para pegar todos os dados id, nome e preço do banco de dados

$sql = "SELECT idproduto, nome, preco FROM Produto";
$result = $conn->query($sql);

$produtos = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
}

echo json_encode($produtos);

$conn->close();
?>