install: 
	npm ci
make lint:
	npx eslint 
publish:
	npm publish --dry-run
gendiff:
	node/gendiff.js
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --coverage --coverageProvider=v8