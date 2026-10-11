## Системные зависимости

#### Нужны Java JDK 17+, Node.js 18+ (LTS):
```bash
sudo apt install -y git openjdk-17-jdk nodejs npm
```

#### Проверка:
```bash
java -version
node -v
npm -v
git --version
```

---

## Запуск

### 1. Backend

```bash
cd backend
./mvnw spring-boot:run
```

### 2. Frontend

```bash
cd frontend
npm run dev
# open http://localhost:5173
```
