install: 
	npm ci
make lint:
	npx eslint 
publish:
	npm publish --dry-run
gendiff:
	node/gendiff.js