FROM node:18-alpine

RUN  mkdir -p /app

WORKDIR /app

COPY package.json /app
COPY pnpm-lock.yaml /app
#install pnpm
RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

RUN exec sh && pnpm install


COPY . /app

RUN exec sh && pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]