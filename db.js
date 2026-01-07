import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: "jordanvillamarin",  
  host: "localhost",
  database: "postgres", 
  password: "85290",   
  port: 5432,
});