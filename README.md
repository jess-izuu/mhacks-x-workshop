# MHacks X Deep Learning Using TensorFlow Workshop

Set up 

**If you'd like to contribute, be sure to review the [contribution
guidelines](CONTRIBUTING.md).**

## Example Setup

This repository includes 4 online demos that use TensorFlow that you can run using [Docker](https://get.docker.com): the [TensorFlow Playground](https://github.com/tensorflow/playground), a IPython Notebook about Deep Learning, a chatbot that uses TensorFlow, and a classifier app for the MNIST Dataset.

To run the visualization locally you just need a server to serve all the files from the `dist` directory. You can run `npm install` then `npm run serve` if you don't have one handy. To see the visualization, visit `http://localhost:8080/` on your browser.

When developing, use `npm run serve-watch`. This will start a static server and also watchers to automatically compile the typescript, html and css files
whenever they change.

To produce a minified javascript file for production, run `npm run build`.

To push to production: `git subtree push --prefix dist origin gh-pages`.

This is not an official Google product.
