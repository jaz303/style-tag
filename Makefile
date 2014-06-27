SRC = index.js

all: example/bundle.js build/style-tag.js build/style-tag.min.js

clean:
	rm -rf build

build:
	mkdir -p build

build/style-tag.js: $(SRC) build
	browserify -s styleTag index.js > $@

build/style-tag.min.js: build/style-tag.js build
	./node_modules/.bin/uglifyjs < $< > $@

example/bundle.js: example/main.js  $(SRC)
	browserify $< -o $@

.PHONY: all clean