#/bin/bash
echo "lifecycle hook: postCreateCommand => start"

# echo "Set node_modules permission"
# sudo chown -R node:node node_modules
# echo "Set node_modules permission: done"

echo "Installing deps"
npm i
echo "Installing deps: done"

echo "lifecycle hook: postCreateCommand => done"
