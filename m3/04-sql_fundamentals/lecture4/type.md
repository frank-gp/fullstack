```sql
-- Querying column properties for a specific table (e.g., 'movies')
SELECT column_name, data_type, character_maximum_length, is_nullable
FROM information_schema.columns
WHERE table_name = 'movies';


-- Querying column properties including key type for a specific table (e.g., 'movies')
SELECT
    c.column_name,
    c.data_type,
    c.character_maximum_length,
    c.is_nullable,
    CASE
        WHEN kcu.constraint_name IS NOT NULL AND tc.constraint_type = 'PRIMARY KEY' THEN 'Primary Key'
        WHEN kcu.constraint_name IS NOT NULL AND tc.constraint_type = 'FOREIGN KEY' THEN 'Foreign Key'
        ELSE 'Not Key'
    END AS key_type
FROM
    information_schema.columns c
LEFT JOIN
    information_schema.key_column_usage kcu
ON
    c.table_name = kcu.table_name
AND
    c.column_name = kcu.column_name
LEFT JOIN
    information_schema.table_constraints tc
ON
    kcu.constraint_name = tc.constraint_name
WHERE
    c.table_name = 'movies';
```
