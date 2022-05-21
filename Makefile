deps:
	mkdir ./temp
	git clone https://github.com/gohugoio/hugo.git ./temp/hugo
	cd ./temp/hugo; \
		go install 
	hugo version
	$(MAKE) clean

clean:
	rm -rf ./temp
