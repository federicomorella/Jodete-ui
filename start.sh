#install node modules for app
echo $PWD
if [ ! -d "./node_modules" ] 
then
    echo "Installing node modules for react app"
    npm install
fi

#build app
if [ ! -d "./build" ] 
then
    echo "Building react app"
    npm run build
fi

#install server modules
# if [ ! -d "./server/node_modules" ] 
# then
#     echo "Installing node modules for server"
#     cd server && npm install && cd ..
# fi

npm start