FROM oven/bun:latest

WORKDIR /app/backend
COPY backend/package.json backend/bun.lock* ./
RUN bun install
COPY backend/ .

EXPOSE 3000

env port=3000
env NODE_ENV=production

CMD ["bun", "index.ts"]
