#!/bin/sh

# Build docker image using pnpm deploy
# Assumes 'pnpm install' and 'pnpm -r build' has been run beforehand

API_PRUNED=./tmp/api-pruned
mkdir -p $API_PRUNED

# Creates version of api without dev-dependencies
CI=1 pnpm --filter "./api" --prefer-offline --frozen-lockfile --prod --loglevel=error deploy $API_PRUNED && \
  docker build --build-arg RELEASE=$RELEASE --build-arg API_PRUNED=$API_PRUNED --tag $IMAGE_TAG .

# --offline doesn't work in the above (see https://github.com/pnpm/pnpm/issues/5315).
# TODO: update the script to speed up deploy when bug is fixed

exit_code=$?

# clean up before maybe failing
rm -rf $API_PRUNED

exit $exit_code
