#!/bin/bash

# disabling for now in ci since its not connecting
if [ "$IS_CI" != "1" ]; then
  yarn test:dev
  yarn test:prod
fi
