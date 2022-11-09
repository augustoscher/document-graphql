.PHONY: help run stop rebuild

.DEFAULT: help
help:
	@echo "make dev"
	@echo "       starts the application"
	@echo "make dev-logs"
	@echo "       starts the application with logs"
	@echo "make stop"
	@echo "       stops the application"
	@echo "make rebuild"
	@echo "       rebuild containers"

install:
	yarn install

dev: stop
	docker-compose up -d
	@echo "Document GraphQL running."

dev-logs: stop
	docker-compose up -d && docker-compose logs -f -t
	@echo "Document GraphQL running."

stop:
	docker-compose down
	@echo "Document GraphQL stoped."

rebuild: stop
	docker-compose up -d --build
