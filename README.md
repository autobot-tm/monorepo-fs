# 🚀 Fullstack Monorepo (NestJS + Next.js + pnpm + Turborepo)

Monorepo quản lý **Backend (NestJS)** và **Frontend (Next.js)** trong cùng 1 repo.  
Sử dụng **pnpm workspace** để quản lý dependency, **Turborepo** để build/lint song song.

---

## 📦 Cấu trúc thư mục

```
my-monorepo/
├── apps/
│   ├── backend/       # NestJS API server (port 3001)
│   └── frontend/      # Next.js app (port 3000)
├── packages/
│   └── types/         # Shared types/interfaces
├── package.json       # Root scripts
├── pnpm-workspace.yaml
└── turbo.json
```

---

## 🚀 Yêu cầu môi trường

- **Node.js** >= 18
- **pnpm** >= 10.16.1
- **Docker** (tuỳ chọn, nếu muốn chạy DB qua container)

---

## ⚡ Quick Start

Copy và chạy thẳng trong terminal (PowerShell / bash):

```bash
# Clone repo
git clone https://github.com/your-org/my-monorepo.git
cd my-monorepo

# Cài dependencies
pnpm install

# Chạy FE + BE song song
pnpm dev
```

👉 Sau đó mở:

- **Frontend (Next.js)**: http://localhost:3000
- **Backend (NestJS)**: http://localhost:3001

---

## 🧰 Các lệnh hữu ích

| Lệnh             | Mô tả                                     |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Chạy FE + BE song song                    |
| `pnpm dev:fe`    | Chỉ chạy frontend                         |
| `pnpm dev:be`    | Chỉ chạy backend                          |
| `pnpm build`     | Build cả FE + BE qua turborepo            |
| `pnpm lint`      | Lint toàn bộ code                         |
| `pnpm clean`     | Xoá `node_modules` + lockfile             |
| `pnpm reinstall` | Xoá sạch + cài lại dependencies           |
| `pnpm reset`     | Xoá sạch + clear cache pnpm + cài lại mới |

---

## 🛠️ Backend (NestJS)

- Source: `apps/backend`
- Chạy độc lập:
    ```bash
    cd apps/backend
    pnpm start:dev
    ```

---

## 🎨 Frontend (Next.js)

- Source: `apps/frontend`
- Chạy độc lập:
    ```bash
    cd apps/frontend
    pnpm dev
    ```

---

## 📦 Shared package

- `packages/types`: chứa DTO, interface dùng chung giữa FE và BE
- Import ví dụ:
    ```ts
    import { UserDTO } from '@types/index';
    ```
