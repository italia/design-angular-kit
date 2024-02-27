FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends chromium

# Unit test only
ENV CHROME_BIN=/usr/bin/chromium