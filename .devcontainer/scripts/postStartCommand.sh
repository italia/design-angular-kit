#!/bin/bash

WORKSPACE_FOLDER=$1

echo "lifecycle hook: postStartCommand => start"
echo "Set $WORKSPACE_FOLDER as git safe directory"
git config --global --add safe.directory $WORKSPACE_FOLDER
# git config --global --add safe.directory /workspaces/design-angular-kit
echo "lifecycle hook: postStartCommand => done"