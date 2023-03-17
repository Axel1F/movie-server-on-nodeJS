create table film
(
	film_id integer primary key,
	film_name varchar(128) not null,
	film_date_year smallint not null
);


-- один ко многим
create table genre              
(
	genre_id integer primary key,
	genre_name text not null,
	fk_film_id integer references film (film_id) NOT NULL
);

