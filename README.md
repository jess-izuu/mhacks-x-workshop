# MHacks X: Deep Learning Using TensorFlow Workshop



## Example Setup

This repository includes 4 demos that use TensorFlow that you can run using [Docker](https://get.docker.com): the [TensorFlow Playground](https://github.com/tensorflow/playground), a IPython Notebook about Deep Learning, a chatbot that uses TensorFlow, and a [classifier app](https://github.com/sugyan/tensorflow-mnist) for the MNIST Dataset.

- Get Docker [here](https://get.docker.com) if you don't have it already

- Clone this Repository: `git clone https://github.com/mewil/mhacks-x-workshop && cd mhacks-x-workshop`

- Run the docker-compose file `docker-compose up -d` to run in the background or `docker-compose up` to run in the current window (this will take a few minutes)

- Navigate to:
	* [localhost:5000](localhost:5000) - MNIST Classifier
	* [localhost:6000](localhost:6000) - ChatBot
	* [localhost:7000](localhost:7000) - IPython Notebook
	* [localhost:8000](localhost:8000) - TensorFlow Playground

- To kill the docker containers run `docker-compose down`, to also remove the docker images run `docker-compose down --rmi all` instead
