all: clean build

deps:
	mkdir ./temp
	git clone https://github.com/gohugoio/hugo.git ./temp/hugo
	cd ./temp/hugo; \
		go install 
	hugo version
	$(MAKE) clean

clean:
	rm -rf ./temp
	rm -rf ./public

build:
	hugo -s ./src/ -d ../public/

serve:
	hugo serve -s ./src/ --liveReloadPort=1313
