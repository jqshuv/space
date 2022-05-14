# Copyright (c) 2022 Unately
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

RUN su node -c "npm install -g @commitlint/cli @commitlint/config-conventional"
