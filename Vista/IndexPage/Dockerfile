# ทำการเลือก base image (จาก docker hub) มาเป็นตัว runtime เริ่มต้น เพื่อให้สามารถ run project ได้
# ในทีนี้เราทำการเลือก node image version 18 ออกมา
FROM node:18-alpine as BUILD_IMAGE

# กำหนด directory เริ่มต้นใน container (ตอน run ขึ้นมา)
WORKDIR /usr/src/app

# copy file index.js เข้ามาใน container
COPY ./package.json ./

# ทำการลง dependency node
RUN npm install

# ทำการ copy file package.json จากเครื่อง local เข้ามาใน container
COPY . .

# # build Project
RUN npm run build

# # begin second stage
FROM node:18-alpine as PRODUCTION_IMGAE

WORKDIR /usr/src/app

# copy file 
COPY --from=BUILD_IMAGE /usr/src/app/dist/ /usr/src/app/dist/

# # ทำการปล่อย port 8080 ออกมาให้ access ได้
EXPOSE 8080

COPY package.json ./
COPY vite.config.ts ./

# # install type script for base
RUN npm install typescript

EXPOSE 8080
# กำหนด command สำหรับเริ่มต้น run application (ตอน run container)
CMD ["npm", "run", "preview"]