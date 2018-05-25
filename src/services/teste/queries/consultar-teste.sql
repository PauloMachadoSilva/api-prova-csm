-- select * from teste
-- where id 

select * from teste t
inner join questions q on t.id_questions = q.id 
inner join options o on q.id= o.id 
where t.id = ?;