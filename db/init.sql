drop table if exists users;
drop table if exists posts;

create table users(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text not null
);

create table posts(
    id serial primary key,
    title varchar(45),
    img text not null,
    content text not null,
    author_id integer references users(id)
)