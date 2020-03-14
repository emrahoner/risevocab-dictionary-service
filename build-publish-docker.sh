echo "Building and publishing $1 on port $2"

if [ "$(docker ps -aq -f name=$1)" ]; then
    docker rm --force $1
fi
docker image build -t $1:local .
docker run --publish $2:4000 --detach --name $1 $1:local