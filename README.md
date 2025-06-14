# GameArena

This project contains a backend server configured with [Prisma](https://www.prisma.io/) as the ORM.

## Setup

1. Navigate to the `server/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Provide environment variables by editing the `.env` file.

## Running Migrations

To create or apply database migrations run:
```bash
npx prisma migrate dev
```
This will use the connection string specified in `.env` to create the SQLite database and update it to match the Prisma schema.
