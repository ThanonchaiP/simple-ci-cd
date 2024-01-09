build-image:
	aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 654656542116.dkr.ecr.ap-southeast-1.amazonaws.com
	docker buildx build --no-cache -f Dockerfile  -t 654656542116.dkr.ecr.ap-southeast-1.amazonaws.com/cyber/non/test:$(VERSION) --platform linux/amd64 . --push