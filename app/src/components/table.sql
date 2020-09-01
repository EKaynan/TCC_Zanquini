CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(512) NOT NULL UNIQUE, 
password VARCHAR(512) NOT NULL, name VARCHAR(512) NOT NULL, father_id INTEGER, 
FOREIGN KEY (father_id) REFERENCES users(id));

CREATE TABLE tasks (id INT AUTO_INCREMENT PRIMARY KEY, valor_tarefa integer, 
descricao_tarefa VARCHAR(1024) NOT NULL, valor_total integer DEFAULT 0, created_date 
TIMESTAMP DEFAULT NOW(), user_id INT NOT NULL REFERENCES users(id));

-- senha: 123123
INSERT INTO users(id, email, password, name) Values(1, 'rsdevigo@gmail.com', '$2b$10$/EiJAYpr55zxclYLfi3hWeR08Ys6.ZdyBIXemP8Vi7FzywfwijdSC', 'Rodrigo Sanches Devigo');
INSERT INTO users(id, email, password, name, father_id) Values(2, 'rsigo@gmail.com', '$2b$10$/EiJAYpr55zxclYLfi3hWeR08Ys6.ZdyBIXemP8Vi7FzywfwijdSC', 'Rodrigo Sanches Devigo', 1);
INSERT INTO tasks (id , valor_tarefa, descricao_tarefa, user_id) values(1, 10, "comprar leite", 2);
--usar navegate para definir rotas do usuario, comparando o o father_id sendo null ou nao;
--usar o getuser para puxar o id do father e se for null vai logar no pai, senão no filho