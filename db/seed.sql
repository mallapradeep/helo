CREATE TABLE users(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

insert into users( username, password, profile_pic )
values ('Pradeep', 'Malla', 'pradeep.jpg'),
values ('Albin', 'Piya', 'albin.jpg'),
values ('Bikas', 'Thapa', 'bikas.jpg'),
values ('Ayushree', 'Gurung', 'ayushree.jpg'),
values ('Bikisha', 'Shrestha', 'bikisha.jpg'),


create table Posts(
    id serial primary key,
    title varchar(45),
    img text,
    content text, 
    author_id integer
)

insert into Posts ( title, img, content, author_id )
values ('Life', 'life.jpg', 'Life is beautiful', 1)