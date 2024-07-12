create DATABASE desafioIgut;

use desafioIgut;

drop table Produto;

CREATE Table Produto (
    idproduto int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    preco FLOAT(10, 2) NOT NULL
);

INSERT INTO
    Produto (nome, preco)
VALUES ('Classic Burger', 15),
    ('Cheese Burger', 18),
    ('Bacon Burger', 20),
    ('Mushroom Burger', 22),
    ('Veggie Burger', 17),
    ('BBQ Burger', 21),
    ('Spicy Burger', 19),
    ('Avocado Burger', 23),
    ('Chicken Burger', 18),
    ('Fish Burger', 20);

select * from Produto;