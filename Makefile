IMAGE_NODE = node:14.15.5-alpine3.12

clean:
	@docker run -w /app -v `pwd`:/app $(IMAGE_NODE) rm -rf node_modules package-lock.json

install:
	@docker run --rm -w /app -v `pwd`:/app $(IMAGE_NODE) npm install

start:
	@docker run --rm -w /app -v `pwd`:/app -p 3000:3000 $(IMAGE_NODE) npm run start

build:
	@docker run --rm -w /app -v `pwd`:/app $(IMAGE_NODE) npm run build

.PHONY: build
