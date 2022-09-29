FROM node:14.18.1
WORKDIR /app

RUN npm install vite --registry=https://registry.npm.taobao.org
RUN npm install @vitejs/plugin-react --registry=https://registry.npm.taobao.org

COPY . /app

EXPOSE 7003

CMD npm run serve