set -e

DOCKER_CH_PRIVE_FRONTEND_BROWSER="ch-prive-frontend"

docker build --no-cache -f Dockerfile -t $DOCKER_CH_PRIVE_FRONTEND_BROWSER .
